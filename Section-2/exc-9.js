//Ejercicio 9: Domina las Web APIs con Promesas y Fetch

function checkNum (variable){
    while(isNaN(variable)){
        console.warn("El valor ingresado no es un número")
        variable = prompt("Por favor, ingresa solo números")
    }
    variable = parseFloat(variable)
    return variable   
}

let userTimeout = checkNum(prompt("Ingresa el número de segundos en el que quieres que se ejecute el programa"))

const myPromise = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve("setTimeout ejecutado")
    }, userTimeout*1000)
})


myPromise
.then(result => {
    alert(result)
})

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        if(!response.ok){
            throw new Error("Ups, algo salió mal obteniendo los datos")
        } 
        return response.json()
        
    })
    .then( data => {
        console.log(data)
    })
    .catch(error => {
        console.error('Error:', error);
    });
