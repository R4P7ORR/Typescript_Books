document.addEventListener("DOMContentLoaded", () =>{
  for (let i = 0; i < 5; i++){
    const btn = document.createElement("button");
    document.getElementById("app")!.appendChild(btn);

    btn.textContent = "Gomb";
    btn.addEventListener("click", () => {
      const rndSzin = '#' + Math.floor(Math.random() * (2 ** 24)).toString(16);
      btn.style.backgroundColor = rndSzin;
      console.log(i);
    })
  }
});