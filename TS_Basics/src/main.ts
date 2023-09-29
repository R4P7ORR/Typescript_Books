let i = 5;
i++;
i = 1;
//i = asdf;

let v1 :number;

//v1 = "asdf";   
v1 = 2;

let t1 :number[] = [];
t1.push(1);


//Union types
let ns : number | string;
ns = "asdf";
ns = 1;
//ns = false;

let a = document.getElementById("asdf");
function szamChange(){
  let sz = document.getElementById("szamlalo") as HTMLInputElement;
  let szam = parseInt(sz.value);
  let negyzet = szam * szam;
  document.getElementById("negyzet")!.textContent = negyzet.toString();
}

function szamKuldes(e: SubmitEvent) : void{
  let szam = parseInt((document.getElementById("szamlalo") as HTMLInputElement).value);
  if(szam < 0){
    e.preventDefault();
  }
}

function init(){
  document.getElementById("szamlalo")!.addEventListener("input", szamChange);
  document.getElementById("szamForm")!.addEventListener("submit", szamKuldes)
}

document.addEventListener("DOMContentLoaded", init);