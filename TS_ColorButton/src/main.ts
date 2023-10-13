import "./style.css"

function addNewText(){
  const paragraph = document.createElement("p");
  const BG = document.createElement("input");
  BG.type = "color";
  const FG = document.createElement("input");
  FG.type = "color";
  document.getElementById("textDiv")!.appendChild(BG);
  document.getElementById("textDiv")!.appendChild(FG);
  document.getElementById("textDiv")!.appendChild(paragraph);
  paragraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  FG.addEventListener("input", () => {
    paragraph.style.color = FG.value;
  })
  BG.addEventListener("input", () => {
    paragraph.style.backgroundColor = BG.value;
    console.log(BG.value);
  })
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.createElement("button");
  document.getElementById("app")!.appendChild(btn);
  btn.textContent = "New Select-Color";
  btn.addEventListener("click",addNewText)
})