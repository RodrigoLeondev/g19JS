/* OBJETOS

Object --> Palabra reservada
*/

// propiedad: valor  o  key: valor
/*
let koder = {
    name: 'rod',
    generation: '19',
    bootcamp:'Js',
    horario: ['7-10', '12-4'],
    gender: 'masculino',
    isActive: true,
    modules: {
        js: true,
        maquetado: true,
        backend: false,
        react: false
    }
}
console.log(koder)

let generation = koder.generation
let backendPassed = koder.modules.backend 

//if( backendPassed ){
  //  console.log(` ${koder.name} si paso al modulo de backend y tiene
    //el horario ${ koder.horario.[0] }`)
//}
let active = koder.isActive ? 'activo' : 'inactivo'

 console.log(`
    Mi nombre es ${koder.name}, 
    de genero ${koder.gender}. 
    Soy de la generación ${koder.generation},
    del bootcamp ${koder.bootcamp}, 
    en un horario de ${koder.horario[0]}, 
    actualmente ${active} 
    y me encuentro en el modulo 
    ${koder.modules.js ? 'JS' : ''}
    ${koder.modules.maquetado ? 'maquetado' : ''}
    ${koder.modules.backend ? 'backend' : ''}
    ${koder.modules.react ? 'react' : ''}
 `) */

 //Creando nuevas propiedades

 //let car = {}
//car.model = 'jetta'
//console.log(car)

/*
let koderAssign = { }
//usando dot notacion --> .algo
koderAssign.name = 'Rod'
koderAssign.gender = 'masculino'
koderAssign.generation = '19'
koderAssign.bootcamp = 'Javascipt'
koderAssign.horario = ['7-10', '12-4']
koderAssign.isActive = true

// nested objects
koderAssign.modules = {}
    koderAssign.modules.js = true
    koderAssign.modules.maquetado = true
    koderAssign.modules.backend = false
    koderAssign.modules.react = false

    console.log(`
    Mi nombre es ${koderAssign.name}, 
    de genero ${koderAssign.gender}. 
    Soy de la generación ${koderAssign.generation},
    del bootcamp ${koderAssign.bootcamp}, 
    en un horario de ${koderAssign.horario[0]}, 
    actualmente ${koderAssign.isActive ? 'activo' : ''} 
    y me encuentro en el modulo 
    ${koderAssign.modules.js ? 'JS' : ''}
    ${koderAssign.modules.maquetado ? 'maquetado' : ''}
    ${koderAssign.modules.backend ? 'backend' : ''}
    ${koderAssign.modules.react ? 'react' : ''}
 `)
 */

 /*
// con bracket notation
    let koder3 = {}
    koder3 ['name'] = 'Rod'
    koder3 ['gender'] = 'masculino'
    koder3 ['generation'] = '19'
    koder3 ['bootcamp']  = 'Javascript'
    koder3 ['horario'] = ['7-10', '12.4']
    koder3 ['isActive'] = true
    koder3 ['module'] = {}
        koder3 ['module'] ['JS'] = true
        koder3 ['module'] ['maquetado'] = true
        koder3 ['module'] ['backend'] = false
        koder3 ['module'] ['react'] = false

        console.log(`
        Mi nombre es ${koder3['name']}, 
        de genero ${koder3['gender']}. 
        Soy de la generación ${koder3['generation']},
        del bootcamp ${koder3['bootcamp']}, 
        en un horario de ${koder3 ['horario'] [0]}, 
        actualmente ${koder3['isActive'] ? 'activo' : ''} 
        y me encuentro en el modulo 
        ${koder3['module']['Javascript'] ? 'JS' : ''}
        ${koder3['module']['maquetado'] ? 'maquetado' : ''}
        ${koder3['module']['backend'] ? 'backend' : ''}
        ${koder3['module']['react'] ? 'react' : ''}
     `)
*/

let salarios = {
    'jorge': '20000',
    'lenny': '30000',
    'ernesto': '25000',
    'rod': '20000'
}

//Iterando Objetos
// bucles-ciclos

for ( elemento in salarios ){
    let key = elemento
    let val = salarios[elemento]
    console.log(key, val)
}
/*
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
/*

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
*/