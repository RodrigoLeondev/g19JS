/* // DOM

// Seleccionar por ID
document.getElementById('title')

//seleccionar por tagname, devuelve array de objetos
document.getElementsByTagName('h1')

//seleccionar por clase
document.getElementsByClassName('item')

//Seleccionar elementos por tag, class, id
// seleccionar por selector, selecciona primer coincidencia
document.querySelector('.item') // --> selecciona el elemento por clase
document.querySelector('#title') // --> selecciona por id
document.querySelector('h1') // --> selecciona por tagname

// Selector All
// seleccionar por selector, selecciona todas las coincidencia
document.querySelectorAll('.item')




// Setear (agregar), obtener, comprobar atributos

// seleccionar el elemento a cambiar
let titulo = document.querySelector('.title')
titulo.setAttribute('data-id', 1)

// element.getAttribute('')
let atributoP = titulo.getAttribute('data-id')
console.log(atributoP)

// comprobar si existe un atributo
titulo.hasAttribute('class')
 */



/*  Ejercicio
* 1. A nuestro elemento ul agregar clase 'lista' y id 'lista'
* 2. Quitar a todos los elementos de la lista la clase item
* 3. Todos los items, agregar la clase'list__item'
*/

// let underList = document.querySelector('ul')
// underList.setAttribute('class', 'lista')
// underList.setAttribute('id', 'lista')

// let removeItems = document.querySelectorAll('li')
// removeItems.forEach((cv) =>{
//     cv.removeAttribute('class')
// })

// let allItems = document.querySelectorAll('li')
// allItems.forEach((cv) => {
//     cv.setAttribute('class', 'list__item')
// })

// Crear elementos en HTML

/* //CREAR Paso a paso. Solo se crea de maneta temporal
let listTwo = document.createElement('ul')
let item1 = document.createElement('li')
//Se genera variable de donde se va a insertar en el DOM los elementos creados 
let body = document.querySelector('body')
//Se adhiere el texto que se solicita 
item1.textContent = 'item 1'

listTwo.appendChild(item1)
// se agrega al body y deja de ser temporal
body.appendChild(listTwo) */

// Forma dinámica
const listaDos = document.createElement('ul')

for( i = 1; i <= 10; i++){
    let item = document.createElement('li')
    item.textContent = `item ${i}`
    listaDos.appendChild(item)
}
//console.log(listaDos)
let body = document.querySelector('body')
body.appendChild(listaDos) 


const listaTres = document.createElement('ul')

for( i = 1; i <= 10; i++){
    let item = document.createElement('li')
    item.textContent = `item ${i}`
    listaTres.appendChild(item)
}
//console.log(listaDos)
let parent = document.querySelector('.content')
parent.appendChild(listaTres) 

// AGREGAR dentro de otro elemento (refernciado)
// parentNode.insertBefore(newNode, referenceNode);

let reference = document.querySelector('.subtitle1')
document.querySelector('.content')
.insertBefore(listaDos, reference)
 
