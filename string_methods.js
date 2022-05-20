// Metodos de string
// Funciones
// str.nombreMetodo(p1,p2,p..)
// .toUpperCase()
//.toLowerCase()
// .substring(start, end)
// .include(searchEle,ent, formIndex)
// .slice

//Ejercicio

// Hola koders   * cuantas vocales existen * * cuantos caracteres son *
// * cortar el string en 2 string --> 'hola' 'koders'

/*
let text = 'Hola koders';
const myArray = text.split(" ")
*/

let text = 'Hola koders';
console.log(`La cadena ${text} tiene ${text.length} caracteres`);

console.log(text.split(" "))

console.log(text.replace(/[aeiouAEIOU]/g, "*"))

console.log(text.match(/[aeiou]/g).length)



