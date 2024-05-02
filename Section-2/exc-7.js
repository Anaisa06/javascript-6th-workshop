//Ejercicio 7

//Función para verificar que solo se ingresen números
function verifyNum (variable){
    while(isNaN(variable)){      
        variable = prompt("Por favor, ingresa solo números sin espacios")
    }  
    return variable   
  }
  
  //Obtener elementos del DOM
  const image7 = document.getElementById("img-7-2")
  const excSevenBtn = document.getElementById("excercise-7-btn")
  
  //Función para ejecutar cuando el usuario clickee el botón
  function excercise7(){
    let flag = true
    while(flag){
      //Preguntar el orden
      let userResponse = verifyNum(prompt("¿Cuál crees que será el orden que se mostrarán los mensajes en consola? Ingresa el orden de los números sin espacios.\n1. Inicio del script\n2. Primer setTimeout\n3. Segundo setTimeout\n4. Promesa resuelta\n5. Fin del script"))
  
      //Evaluar la respuesta del usuario
      switch(userResponse){
        case "15423":
          alert("¡Felicidades! Ese es el orden correcto")
          flag = false
          break
        default:
          flag = confirm("No es el orden correcto. ¿Quieres intentarlo de nuevo?")  
      }
    }
  
    //Mostrar la imagen con la respuesta
    image7.style.display = "block"
  }
  
  //Añadir event listener de click y ejecutar función
  excSevenBtn.addEventListener("click", excercise7)