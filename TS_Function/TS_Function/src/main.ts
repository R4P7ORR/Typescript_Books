const fv1 = (param1: number, param2: string) : string => {
  return param1.toPrecision(2) + param2;
}

const fv2 = (param1: number, param2: string) => param1.toPrecision(2) + param2;

const t1 = [ 1, 46, 7124 ];
const eredmenyTomb = t1.filter(e =>{
  return e > 10;
}).map( e => e.toFixed(5));

document.addEventListener("DOMContentLoaded", (e) =>{
  document.getElementById("app")!.addEventListener("click", e1 => {
    console.log(e1.button);
  })
})