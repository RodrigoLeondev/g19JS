/* REPASO METODOS DE ARROW FUNCTIONS
*/
// Parametros
// Invocaciones

/*
//Declaracion de la funcion
const suma = (a, b) => {
    //Sentencias
    let total = a + b
    return total
}
*/

// Invocar --->
//  suma() -->  sin argumentos
//  suma() --> con argumentos

// const funcionNoRetorno = () => {
//    console.log('Todo ok')
// } --> así no retorna nada

// const funcionNoRetorno = () => console.log('Todo ok') --> quitando {} si hace un retorn autom

// arr.map( callback ) --> SINTAXIS!!!!
// arr.reduce( callback(acc, cv, index, arr), intialValue ) --> SINTAXIS!!!!
// arr.filter( callback ) --> SINTAXIS!!!!
// arr.forEach( callback ) --> SINTAXIS!!!!
// El callback es la función que se va a ejecutar

// arr.map( callback )

const doubleNumber = ( cv, index, arr ) => {
    let total = cv * 2
    return total
}
   //let totalFunction =  doubleNumber(15)
   //console.log(totalFunction)

   let multiArray = [100,1000,10,2,4]
   //Funciones como argumentos
    let resultado = multiArray.map(doubleNumber)


   /* Fcunaiones anonimas
   multiArray.map(
       ( cv, index, arr ) => {
           let total = cv * 2
           return total
       }
   )
      multiArray.map( cv =>  cv * 2 ) --> Así queda reducida
   */

// Se puede encontrar:
// arr.map( function (cv, index, arr) {}) o se encuentra:
// arr.map( () => {})









/*
//'str'.split('').reverse()
let arr = ['r', 't', 's']
let result = arr.filter( (cv, index, arr) => {
    if(cv === 'r'){
        return cv
    }
})

console.log(result)
*/


/*
let reducePares = (arr) => {

    let soloPares = arr.reduce((acc, cv, index, arrr) =>{
        if( cv % 2 === 0){
            acc.push(cv)
            return acc 
        } else{
            return acc
        }
           
    }, [])
}
let arrTodos = [1,2,3,4,5]

*/

/* REPASO METODOS DE ARRAY 

*/


/**
 * Escribir una funcion, Que dado una array de numeros y strings, 
 * retorne un array con solo los que son de tipo string
 * filterArray([1, 2, "a", "b"]) 
 * -> ["a", "b"]
 * 
 * Implementar soluciones con
 * .forEach()
 * .filter()
 * .reduce()
 *
*/

let firstArray = [1,2,3,'a','b','c']
firstArray.forEach((letter) => {
    let letterPresent = ''
    return firstArray
})
console.log(letterPresent)