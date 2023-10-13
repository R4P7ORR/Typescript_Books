import { product } from './product';
import './style.css'
const products: product[] = [];
function init(){
  document.getElementById("sendProduct")!.addEventListener("click", addToList);
}
function write(){
  let tBody = document.getElementById("productTable")!;
  tBody.innerHTML = '';
  for(const p of products){
    let tableRow = document.createElement("tr");
    let tdName = document.createElement("td");
    let tdPrice = document.createElement("td");
    let tdCode = document.createElement("td");
    tdName.textContent = p.name.toString();
    tdPrice.textContent = p.price.toString();
    tdCode.textContent = p.code.toString();
    tableRow.appendChild(tdName);
    tableRow.appendChild(tdPrice);
    tableRow.appendChild(tdCode);
    tBody.appendChild(tableRow);
  }
}
function addToList(){
  try{
    let name = (document.getElementById("productName") as HTMLInputElement).value;
    let price = (document.getElementById("productPrice") as HTMLInputElement).value;
    let code = (document.getElementById("productCode") as HTMLInputElement).value;
    let obj = new product(name, parseInt(price),code);
    for(const p of products){
      document.getElementById("errorMessage")!.textContent = "This item is already in the list!";
      throw new Error("This item is already in the list!");
    }
    products.push(obj);
    write();
    (document.getElementById("productName") as HTMLInputElement).value;
    (document.getElementById("productPrice") as HTMLInputElement).value;
    (document.getElementById("productCode") as HTMLInputElement).value;
    document.getElementById("errorMessage")!.textContent = "";
  }catch(e){
    if(e instanceof Error){
      document.getElementById("errorMessage")!.textContent = e.message;
      console.log(e)
    }
  }
}
document.addEventListener("DOMContentLoaded", init);