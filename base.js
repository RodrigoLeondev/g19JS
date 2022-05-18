/*
console.log("Hola hola")

//Crear variables
//let, const, var
//Palabras reservadas

//variables
var koder = "Rodrigo" // Se puede modificar
let koder2 = "other" // Se puede modificar
//constantes
const koder3 = "other2" //No se puede modificar

console.log(koder, koder2, koder3)
koder = "Juan"
koder2 = "Pancho"
console.log(koder, koder2, koder3)

const URL = "https://www.google.com"

// scope
// let para variable
// const para constantes

//Condicionales

// Concatenar variables
// el operador "typeof" indica el tipo de lato que maneja
let valor1 = "4" // lo concatena y deja de ser suma porque las "" lo hacen un dato string y no un número
let valor2 = 5

console.log(valor1 + valor2)

// console.log("string" + variable)
let koderExample = "Rodrigo"
let nombreConcatenado = "hola " + koderExample
console.log(nombreConcatenado)

// template strings
// string literal
// placeholders: indica donde colocar una variable
// `string ${variable}` (son comillas invertidas)
const age = 30
console.log(`tienes ${age * 2} años`)

// Pedir valores al usuario
// prompt(mensaje, valorDelMensajePorDefecto)
// window.prompt = objeto.metodo
 /*let nombrekoder = window.prompt('Dame tu nombre', 'Name')
if(nombrekoder === null) { //si no hay respuesta (da un null) aparece el mensaje "nombre vacio"
    // Se usa el === porque el dato no va a cambiar
    // = se usa para asignar == comparar variable === compara tipo y valor, si es diferente es false
    console.log('Nombre vacio')
} else { // si hay una entrada, imprime el nombrekoder
    console.log(nombrekoder)
}  */

/*if(nombrekoder !== null) { 
    
    console.log(nombrekoder)
} else { 
    console.log('Nombre vacio')
}

//Convertir strings a numeros
let agekoder = prompt('Dame tu edad', 30)
let newAgekoder = parseInt(agekoder)
console.log(typeof agekoder)
console.log(parseInt(agekoder))
*/

// pedir al usuario en su localidad
// convertir °celsius to °fahrenheit  celsius * 9/5 +32
// calcular los °F

let gradosCelsius = prompt('Vamos a convertir °C a °F', '¿A cuántos grados Celsius estás?')
console.log(gradosCelsius * 9/5 +32)