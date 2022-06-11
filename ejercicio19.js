// destructuracion de objetos
let persona = {
    name:'jorge',
    age: 20,
    bootcamp: 'js'
}

// let nombre = persona.name
// let edad = persona.age

let { name:nombre , age:edad, bootcamp } = persona

console.log(persona)
console.log(nombre)
console.log(edad)
console.log(bootcamp)


let frutas = ['piña', 'melon', 'sandia']
let[ fruta1, fruta2, fruta3] = frutas
console.log(fruta1)
console.log(fruta2)
console.log(fruta3)