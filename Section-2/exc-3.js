//Ejercicio 3: Closures en Acción
function crearSumador(numero) {
    return function(numero2) {
      return numero + numero2
    }
  }
  
  let sumarCinco = crearSumador(5) 
  let sumaTotal = sumarCinco(3)
  
  console.log(sumaTotal)
  