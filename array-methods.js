// .filter
// [1,2,3], filter(callback)

/*
let newArr = [10,20,30,41]

let soloPares = newArr.filter( (currentValue, index, copiaArrOriginal)=>{
    // condiciones
    if( currentValue % 2 === 0){
        return currentValue
    }
})
    console.log(soloPares) */



/*  Escribir una funcion que
Filtrar solo las ciudades
filterCities
.filter
.forEach
*/

/*
let arrMultiple = [1,23,4, 'México', 'Perú', 'España', 3]
let cities = arrMultiple.filter( (ciudad, index, arr) =>{
    if(typeof ciudad ===  'string'){
        console.log(ciudad)
    }
}) */

//ForEach


/* OK
let arrMultiple = [1,23,4, 'México', 'Perú', 'España', 3]
let result = []  //se declara una vartable vacía que funciona como contenedor donde se se almacena
arrMultiple.forEach((city) => {
    if(typeof city === 'string'){
        //return city
        result.push(city)

    }
}) 
console.log(result) */


// Array Index

let arrTwoDimensions = [ [1,2], [3,4],[9,8] ]

let newArray = []
    arrTwoDimensions.forEach( (arrInterior) => {
        let newArrayInterior = arrInterior.map( (el) => {
            console.log(el)
                return el * 2
    })
    newArray.push(newArrayInterior)
})
console.log(newArray)