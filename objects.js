
/*
let salarios = {
    'jorge': '20000',
    'lenny': '30000',
    'ernesto': '25000',
    'jorge': '20000'
}

//Iterando Objetos
// bucles-ciclos
// for ( key in objeto )
for ( key in salarios ){
   // let key = item
    //let val = salarios[item]
    //console.log(key, val)

    if(key === 'ernesto' || key === 'lenny'){
        console.log(salarios[key])
    }
}

*/
// Calcular el total de salarios
 
/**
 * Ejercicio 1:
 * Calcular el total de salarios
 * -> 95000
 */

/*
 let salarios = {
    'jorge': '20000',
    'lenny': '30000',
    'ernesto': '25000',
    'rod': '20000'
 }

let suma = 0
for (item in salarios){
    let key = item
    let val = salarios
    suma += parseInt(val[key])
}
console.log(suma)

*/


/**
 * Ejercicio 2:
 * Pasar el ejercicio 1 a función flecha
 * Debe recibir 1 parametro 
 * Objeto de salarios
 */
/*

 const arr = (obj) => {
     let total = 0
     for(elemento in obj) {
        total += Number(salarios[elemento])
     }
     return total
 }
    console.log(arr(salarios))

*/

/**
 * Ejercicio 3:
 * Escribir una funcion que reciba un parametro
 * Verificar si el parametro es un objeto
 * o si es un array
 * p.ej.  
 * ·> isAnObjectOrArray( [1,2,3] )
 * -> 'Es un array'
 * ·> isAnObjectOrArray( {key:'value'} )
 * -> 'Es un Objeto'
 * ·> isAnObjectOrArray( 'Hola mundo' )
 * -> 'No es un array ni un objeto'
 */



/*
 * 
 * @params {Object}, [Array] ,'string' - Estructura que se quiere validar
 * @return 'String' - mensaje de respuesta
 * 
 * @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
 * @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
 * 
 */


let objectCar = { // <-- Create
    model: 'jetta',
    doors: 4,
    year: 2022,
    cilindraje: 2,
    color: 'rojo'
}

// CRUD
// C --> create

// R --> read
console.log(objectCar.model)

// U --> update
objectCar.color = 'verde'

// D --> delete
delete objectCar.cilindraje

// Crear / actualizar un objeto 
// Leer propiedades de un elemento
// 