// DOM
// Document Object Model --> como manipula el doc html
// document.querySelector('item')
// element.classlist.add('clase nueva')
// element.innerHTML = 'nuevohtml' --> modifica todo el html de un elemento
// elment.addAttribute('propiedad', 'valor') --> agrega nuevo atributo () --> es un método
// document.getElementsByTagName('h2') [1]
// document.createElement('h2')
// document.getElementById('idDelInput').value --> se obtiene un valor de un input

// element.addEventListener('click', callback) --> agrega un Listener al evento click
// callback es una funcion basada como parámetro, click es el evento = si hay un click, se ejecuta la función
// element.addEventListener('click', () => { ... } )
 

// BOM
// Browser Object Model 
// Comunicarse con el navegador

// window.innerHeight; --> manipula el alto del navegador (quita lo que esta ocupado por html)
// 100 vw = 1680px
// 10  vw = 168px
// window.innerWidth; --> manipula el ancho del navegador

// window.screen --> medidas completas del viewport

// window.navigator  --> Navegador, como lo dientifica, versión, lenguajes, etc

// window.history.back --> ir atrás del historial
// window.history.forward --> ir adelante del historial
 
// window.location --> HTMLOListElement, href, origin ... de dónde viene la página
//  pathName --> https.google.com/pathName/pathName

// http
// hyper text transfer protocol
// https
// hyper text transfer protocol secure
