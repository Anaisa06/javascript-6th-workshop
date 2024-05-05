
//Ejercicio 8: Magia con Closures

function excercise8(){
  function counter(){  

    let count = 0

    function raiseCounter(){
      count++
      return count
    }      

    return {
      raiseCounter,    
    }
  }

  const myCounter = counter()

  let keepCounting = confirm("¿Quieres aumentar el contador?")

  while(keepCounting){
    let count = myCounter.raiseCounter()
    alert(`El nuevo valor del contador es ${count}`)
    keepCounting = confirm("¿Quieres aumentar el contador?")
  }
}


//DOM

const excEightBtn = document.getElementById("excercise-8-btn")
excEightBtn.addEventListener("click", excercise8)