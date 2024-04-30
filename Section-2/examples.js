
//Closures
function crearSumador(numero) {
    return function(numero2) {
      return numero + numero2
    }
  }
  
  let sumarCinco = crearSumador(5) //Edita entre el parénstesis el primer número a sumar
  let sumaTotal = sumarCinco(3) //Edita entre el paréntesis el segundo número a sumar
  
  console.log(sumaTotal)
  
  //Funciones Declaradas vs Expresadas
  console.log(
    "Intentando llamar a 'funcionDeclarada' antes de su declaración:"
  );
  try {
    console.log(funcionDeclarada());
  } catch (error) {
    console.log("Error:", error.message);
  }
  
  console.log(
    "Intentando llamar a 'funcionExpresada' antes de su declaración:"
  );
  
  
  try {
    console.log(funcionExpresada());
  } catch (error) {
    console.log("Error:", error.message); 
  }
  
  // Declaración de una función declarada
  function funcionDeclarada() {
    return "Función declarada ha sido llamada.";
  }
  
  // Declaración de una función expresada
  const funcionExpresada = function () {
    return "Función expresada ha sido llamada.";
  };
  
  console.log("Llamando a 'funcionDeclarada' después de su declaración:");
  console.log(funcionDeclarada());
  
  console.log("Llamando a 'funcionExpresada' después de su declaración:");
  console.log(funcionExpresada());
  