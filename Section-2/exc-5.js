//Ejercicio 5: Promesas y Callbacks en Acción

//Definir la función manejarAsincronia
function manejarAsincronia(callback, promise){ 
    promise
    //Ejecutar el callback una vez se resuelva la promesa
    .then(result => {
      console.log(result)
      callback()
    })
    .catch(error => {
      console.log(error)
    })
  }
  
  //Definir la promesa, se resuelve en 2 segundos
  const myPromise = new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve("Promesa resuelta luego de 2 segundos")
    }, 2000)
  })
  
  //Definir la función de callback
  function myCallback(){
    console.log("Callback ejecutado")
  }
  
  //Llamar la función para ejecutar el programa
  manejarAsincronia(myCallback, myPromise)


// let promise
// function myFunction(promise){
//   const lista = ["hola", "mundo"]
//   promise = new Promise ((resolve, reject) => {
//     setTimeout(() => {
//       resolve(lista.join(" "))
//     }, 1000)
//   })

//   promise
//   .then(mensaje => {
//     console.log(mensaje)
//   })
// }

// myFunction(promise)