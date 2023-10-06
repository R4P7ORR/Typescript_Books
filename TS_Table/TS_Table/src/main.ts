import './style.css'

function init(){
  document.getElementById("sendProduct")!.addEventListener("click", addToList);
}
function addToList(){
  try{
    let name = document.getElementById("productName") as HTMLInputElement;
    let price = document.getElementById("productPrice") as HTMLInputElement;
    let code = document.getElementById("productCode") as HTMLInputElement;
  }catch(e){
    if(e instanceof Error){
      document.getElementById("errorMessage")!.textContent = e.message;
    }
  }
}






document.addEventListener("DOMContentLoaded", init);