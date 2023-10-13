function addButton(){
  const btn = document.createElement("button");
  document.getElementById("app")!.appendChild(btn);
  btn.textContent= "Button";
  btn.addEventListener("click",addButton);
}



function addNewCounter(){
  const btn = document.createElement("button");
  document.getElementById("counterDiv")!.appendChild(btn);
  btn.textContent = '0';
  let counter = 0;
  btn.addEventListener("click", () => {
    counter++;
    btn.textContent = counter.toString();
  });
}

document.addEventListener("DOMContentLoaded", () =>{
  addButton();
  
  const btn = document.createElement("button");
  document.getElementById("addCounter")!.appendChild(btn);
  btn.textContent = "Add New Counter";
  btn.addEventListener("click", () =>{
    addNewCounter();
  });
})