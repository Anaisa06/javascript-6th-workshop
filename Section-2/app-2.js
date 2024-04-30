//Closures
function crearSumador(numero) {
  return function(numero2) {
    return numero + numero2
  }
}

let sumarCinco = crearSumador(5) //Edita entre el parénstesis el primer número a sumar
let sumaTotal = sumarCinco(3) //Edita entre el paréntesis el segundo número a sumar

console.log(sumaTotal)

