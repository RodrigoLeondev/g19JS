
/**
 * Ejercicio 1
 * <ul id="menu" class="menu">
        <li class="item__menu">Home</li>
        <li class="item__menu">Products</li>
        <li class="item__menu">About Us</li>
    </ul>
    Replicar con JS este markup
 */

    const addUnderList = document.createElement('ul')

    const itemText = ['Home', 'Products', 'About Us'].forEach((cv, index, arr) => {
        let addList = document.createElement('li')
        addList.textContent = `${cv}`
        addList.setAttribute('class', 'item__menu')
        addUnderList.appendChild(addList)
   })
        
    let body = document.querySelector('body')
    body.appendChild(addUnderList)




/**
 * Dado un arreglo de koders
 * 1. Generar una lista con la clase koders
 * 2. Agregar a cada koder en esa lista
 * 3. A todos los koders agregarles la clase 'item koder'
 */
/* 
 let koders =  [
    {
        name: 'jorge luis',
        lastName: 'Camarillo',
        age: 30,
        generation: 6,
        modulos: ['js','node js', 'cloud'], 
    },
    {
        name: 'Erik',
        lastName: 'Gutierrez',
        age: 20,
        generation: 15,
        modulos: ['Node'], 
    },
    {
        name: 'Sara',
        lastName: 'Reveles',
        age: 24,
        generation: 12,
        modulos: ['js'], 
    }
] */

/**
 * Opcional
 * Del mismo arreglo de koders
 * 1. Generar una tabla de koders con las columnas
 *   - Nombre completo
 *   - Edad
 *   - Generación 
 * 
 *   Opcional -Modulos cursados
 * 
 * Referencia: https://slack-files.com/TCRFJBKB6-F03J4CBCBA7-8b1c39e7bc
 * 
 */

/* 
    <tr>
        <td>Jorge</td>
        <td>30</td>
        <td>6</td>
    </tr> 
*/

/* 
let tbody = document.querySelector('tbody')
koders.forEach( (koder, index, arr) => {

    let tr = document.createElement('tr')
    let tdName = document.createElement('td')
    tdName.textContent = koder.name
    tr.appendChild(tdName)
    let tdAge = document.createElement('td')
    tdAge.textContent = koder.age
    tr.appendChild(tdAge)
    let tdGen = document.createElement('td')
    tdGen.textContent = koder.generation
    tr.appendChild(tdGen)
    console.log(tr)
    tbody.appendChild(tr)
    
})
 */


