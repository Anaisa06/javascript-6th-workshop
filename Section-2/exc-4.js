


  
  //Ejercicio 4: Funciones Declaradas vs Expresadas
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
  

//DOM


//Obtener elementos de DOM
const image4 = document. getElementById("img-4-2")
const resultButton = document.getElementById("result-btn")
const answersText = document.getElementsByClassName("showText")

//Función para cambiar el display de none a block
const showAnswer = function(){
  image4.style.display = "block"
  for (let i = 0; i < answersText.length; i++) {
    answersText[i].style.display = "block";
  } 
}

//Event listener para cuando el usuario clickee el botón, ejecutar la función
resultButton.addEventListener("click", showAnswer)

