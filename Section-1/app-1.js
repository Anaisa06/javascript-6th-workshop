//Scope Quiz
function scopeQuiz(){
    let question1 = confirm("¿Crees que es posible acceder a la variable 'globalVariable' desde dentro de la función 'testScope'?")
    if (question1){
        alert("¡Muy bien! Es correcto. Es posible acceder a la variable globalVariable dentro de la función, porque al ser una variable global se puede acceder desde cualquier parte del código.")
    } else {
        alert("¡Te equivocaste! Si es posible acceder a la variable 'globalVariable' dentro de la función, porque al ser una variable global se puede acceder desde cualquier parte del código.")
    }


    let question2 =  confirm("Al ejecutar el código, ¿crees que la variable 'blockVariable' se mostrará en consola sin problema?")
    if (question2){
        alert("¡Muy bien! Es correcto. La variable blockVariable está siendo llamada dentro de su mismo scope, por lo tanto no habría ningún error.")
    } else {
        alert("¡Te equivocaste! La variable blockVariable está siendo llamada dentro de su mismo scope, por lo tanto no habría ningún error.")
    }

    let question3 = confirm("¿Crees que es posible acceder a la variable 'functionVariable' por fuera de la función?")
    if (!question3){
        alert("¡Muy bien! La variable 'functionVariable' no puede ser llamada por fuera de la función, ya que está definida dentro de un scope local y solo será leída en ese scope.")
    } else {
        alert("¡Te equivocaste! La variable 'functionVariable' no puede ser llamada por fuera de la función, ya que está definida dentro de un scope local y solo será leída en ese scope.")
    }
}

//Hoisting
function hoistingQuiz(){
    function questionLine(line, varValue){
        const pregunta = `¿Qué resultado crees que arrojará la consola al ejecutar la línea ${line}?\n1. Error\n2. ${varValue}\n3. Undefined\n4. Null`
        return pregunta
    }    
    
    //Question 1    
    const question1 = prompt(questionLine(2, 1))
    if(question1 === "3"){
        alert("¡Es correcto! La variable 'a' está usando la palabra reservada 'var' para ser declarada, así que el nombre de la variable se lee, más no su contenido, por eso da undefined.")
    } else {
        alert("Te equivocaste. La respuesta correcta es 'undefined'. La variable 'a' está usando la palabra reservada 'var' para ser declarada, así que el nombre de la variable se lee, más no su contenido, por eso da undefined.")
    }

    //Question 2    
    const question2 = prompt(questionLine(3, 2))
    if (question2 === "1"){
        alert("¡Es correcto! La variable 'b' está siendo declarada con la palabra 'let' y esta no se inicializa hasta el punto en el que aparecen en el código")
    } else {
        alert("Te equivocaste. La variable 'b' está siendo declarada con la palabra 'let' y esta no se inicializa hasta el punto en el que aparecen en el código, por lo tanto genera un error")
    }

    //Question 3
    const question3 = prompt(questionLine(4, 3))
    if (question3 === "1"){
        alert("¡Es correcto! La variable 'c' está siendo declarada con la palabra 'const' y esta, al igual que 'let', no se inicializa hasta el punto en el que aparecen en el código")
    } else {
        alert("Te equivocaste. La variable 'b' está siendo declarada con la palabra 'const' y esta, al igual que 'let', no se inicializa hasta el punto en el que aparecen en el código, por lo tanto genera un error")
    }

    //Question 4
    const question4 = prompt(questionLine(7, "Función declarada ha sido llamada."))
    if (question4 === "2"){
        alert("¡Es correcto! Las funciones declaradas se elevan en el ámbito en el que están, permitiendo acceder a ella antes de ser declarada en el código")
    } else {
        alert("Te equivocaste. Las funciones declaradas se elevan en el ámbito en el que están, permitiendo acceder a ella antes de ser declarada en el código")
    }

    //Question 5
    const question5 = prompt(questionLine(8, "Función expresada ha sido llamada."))
    if (question5 === "1"){
        alert("¡Es correcto! Las funciones expresadas no se inicializa hasta el punto en el que aparecen en el código")
    } else {
        alert("Te equivocaste. Las funciones expresadas no se inicializa hasta el punto en el que aparecen en el código, por lo tanto genera un error")
    }    
}

const firstBtn = document.getElementById("btn-1")
firstBtn.addEventListener("click", scopeQuiz)

const secondBtn = document.getElementById("btn-2")
secondBtn.addEventListener("click", hoistingQuiz)