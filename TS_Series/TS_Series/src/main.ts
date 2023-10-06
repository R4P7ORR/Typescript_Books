import './style.css'
import { series } from './series'

let seriesList : series[] = [];

/*function listWrite(){
  let listItem = 
  for(const i of seriesList){
    let listElement = document.createElement("li");
    
  }
}*/


function addToList(){
  try{
  let title = document.getElementById("title") as HTMLInputElement;
  let episode = document.getElementById("episode") as HTMLInputElement;
  let director = document.getElementById("director") as HTMLInputElement;

  let s1: series = new series(title.value, parseInt(episode.value), director.value)
  seriesList.push(s1);

  document.getElementById("htmlList")!.innerHTML += s1.toString()+  "<br>";
  document.getElementById("errorMessage")
  }catch(e){
    if (e instanceof Error){
      document.getElementById("errorMessage")!.textContent = e.message;
    }
  }
}


document.getElementById("submitButton")?.addEventListener("click", addToList)

/*function loaded(){
  let a = document.getElementById("load");
  a!.setAttribute("class", "");
}
document.addEventListener("DOMContentLoaded", loaded);*/