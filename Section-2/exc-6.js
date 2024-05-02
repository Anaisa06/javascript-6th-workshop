
//Ejercicio 6: Event Loop y Web APIs

function excercise6(){
  //Mensaje con timeout de 0 segundos
  setTimeout(() => {
    alert("Mensaje: con timeout de 0 segundos")
  }, 0)

  //Mensaje sin timeout
  alert("Mensaje: Inmediatamente")

  //Mensaje con timeout de 1 segundo
  setTimeout(() => {
    alert("Mensaje: con timeout de 1 segundo")
  }, 1000)
}

//DOM
const excSixBtn = document.getElementById("excercise-6-btn")
excSixBtn.addEventListener("click", excercise6)