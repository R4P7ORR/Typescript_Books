import './style.css'
import { Book } from "./Book.ts";

let bookList : Book[] = [];
function fillList(){
  for(let i = 0; i < 30; i++){
    let book = "Book #" + i;
    let rating = Math.floor(Math.random()*10) +1;
    bookList.push(new Book(book, rating));
  }
}

function bestOf(inputList : Book[]){
  let bestBook = "";
  let bestRating = 0;
  inputList.forEach(element => {
    if(element.rating > bestRating){
      bestRating = element.rating;
    }
  });
  inputList.forEach(element => {
    if(element.rating == bestRating){
      if(bestBook.length == 0){
        bestBook = element.name;
      }else{
        bestBook = bestBook + ", " + element.name;
      }
    }
  });
  
  console.log("The best rated book(s) are: " + bestBook + ". Their rating(s): " + bestRating)
}

function addBookFunc(e: SubmitEvent){
  let name = (document.getElementById("inputBook") as HTMLInputElement).value;
  let rating = parseInt((document.getElementById("inputRating") as HTMLInputElement).value);
  if(name.length == 0){
    alert("The book name must be declared!");
    e.preventDefault();
  }else if(rating < 0 || rating > 10 || isNaN(rating)){
    alert("The rating MUST be between 1 and 10!");
    e.preventDefault();
  }else{
    bookList.push(new Book(name, rating));
    //document.getElementById("inputBook")!.textContent = "";
    //document.getElementById("inputRating")!.textContent = "1";
    e.preventDefault();
  }
}

function init(){
  fillList();
  
  bookList.forEach(element => {
    console.log(element.name);
  });
  console.log("-------------------------");

  bookList.forEach(element =>{
    if(element.rating >7){
      console.log(element)
    }
  })

  bestOf(bookList);
  console.log("-------------------------");

  document.getElementById("addNewBook")!.addEventListener("submit", addBookFunc);
  //document.getElementById("rewriteBestOf")!.addEventListener("click", bestOf(bookList));
}
document.addEventListener("DOMContentLoaded", init);