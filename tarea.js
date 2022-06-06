/* 
Del siguiente objeto
 * Realizar una función que 
 * 1. Calcule el numero de empleados
 * 2. Obtenga el total a pagar
 * employesAndTotal( { 'Albert': 50000, 'jorge': 50000 })
 * -> Son 3 empleados y el total es 100000
 */
 

// let salarios = {
//     'juan': 30000,
//     'Albert': 50000,
//     'jorge': 50000
// }
 /*
const employes = ( obj ) => {
    let total = 0
    for(val in obj) {
        total += (salarios[val])
        //total += (salarios[key])
    }
    return total

}
console.log(employes(salarios))
*/

// const employes = ( obj ) => {
//     let total = 0
//     for(key in obj) {
//        // total += (salarios[val])
//         total += (salarios[key])
//     }
//     return total

// }
// console.log(employes(salarios))

/**
 * Dado un array de objetos koders
 * Imprimir en consola, todos los nombres de cada koder
 * 
 * 'jorge luis Camarillo tiene 30 años y es de la generacion 6'
 * 'Erik Gutierrez tiene 30 años y es de la generacion 16'
 * ....
 * 
 */

//  let koders =  [
//     {
//         name: 'jorge luis',
//         lastName: 'Camarillo',
//         age: 30,
//         generation: 6,
//         modulos: ['js','node js', 'cloud'], 
//     },
//     {
//         name: 'Erik',
//         lastName: 'Gutierrez',
//         age: 20,
//         generation: 15,
//         modulos: ['Node'], 
//     },
//     {
//         name: 'Sara',
//         lastName: 'Reveles',
//         age: 24,
//         generation: 12,
//         modulos: ['js'], 
//     }
// ]

// koders.forEach((cv, index, arrayObj) => {
  
//     console.log(`
//         ${cv.name} ${cv.lastName} tiene ${cv.age} años
//         y es de la generacion ${cv.generation}
//     `)
// })

/**
 * Del mismo array de koders
 * Obtener la suma de todas las edades
 * 
 */

//  let totalAge = 0
//  koders.forEach((objCompleto, index, arrayObj) => {
//      totalAge += objCompleto.age
//  })
//  console.log(totalAge)
 
 
/*  let totalAgeRed = koders.reduce( (acc, cv) => {
     return acc + cv.age
 }, 0) 
 
 console.log(totalAgeRed) */


 /**
 * Del objeto library
 * 1. Obtener el numero de libros que se estan leyendo
 * 2. Obtener una lista de todos los autores
 * 3. Obtener una lista de todos los Libros
 * 
 */
  let library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }
]
