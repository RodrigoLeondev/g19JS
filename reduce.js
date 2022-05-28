/*
let numeros = [1,2,3,4,5,6,7,8,9]

let acumulador = 0
numeros.forEach((numero) =>{
    acumulador = acumulador + numero
})

console.log(acumulador)

let cajaNaranja = ['naranja', 'naranja', 'naranja']
let jarra = ''

cajaNaranja.forEach((naranja) => {
    jarra = jarra + naranja // jarra += naranja
})
    jarra = 'naranjanaranjanaranja'

    const hacerJugo = (cajafrutas) => {
        let jugo = ''
        cajafrutas.forEach((cajafrutas) => {
            acc = acc + fruta
        })
        return jugo
    }

    let frutas = ['naranja', 'naranja', 'naranja']
    let recipiente = hacerJugo(frutas)
    console.log(recipiente)*/


    // REDUCE
    // reduce(callback, initialValue)

    /*
    let numeros = [1,2,3]
    let totalSuma = numeros.reduce((acc, cv, index, arr) => { 
    return total += cv
}, '')

    */
/*
let frutas = ['naranja', 'naranja', 'naranja']
let vaso = frutas.reduce((recipiente, fruta, index, arr) => {
    return recipiente + fruta
}, '')
console.log(vaso) 
*/

// Function reduce()
// getInitialLetters(['jorge', 'luis', 'camarillo', 'cristobal'])
/*
let nombres = ['Ernesto', 'Abraham', 'Rodrigo', 'Breeze', 'Lenny']

const iniciales = (arr) => {
    let inicial = arr.reduce( (recipiente, nombre, index, arr) => {
        
        return recipiente + nombre.charAt(0)
    }, '')
    return inicial
}*/


console.log(iniciales(nombres))

let nombres = ['Ernesto','Abraham','Rodrigo','Breez','Lenny'] 
const iniciales = (arr) => { 
    let inicial = arr.reduce( (recipiente,nombre,index,arr)=>{ 
        return recipiente + nombre.charAt(0) },'') 
        return inicial } 
console.log(iniciales(nombres)) 