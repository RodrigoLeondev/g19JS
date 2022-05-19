// codigo
//  Pedir al usuario que ingrese 3 números
// Imprime en consola el mayor
// Opcional- usar alert
 

/*
let firstnumber = parseInt(prompt('Dame un numero', 'number'))
let secondnumber = parseInt(prompt('Dame otro numero', 'number'))
let thirdnumber = parseInt(prompt('Dame un numero más', 'number'))

    if(firstnumber > secondnumber && firstnumber > thirdnumber){
        alert(`El numero ${firstnumber} es el mayor`)
    } else if(secondnumber > firstnumber && secondnumber > thirdnumber){
        alert(`El numero ${secondnumber} es el mayor`)
    } else if(thirdnumber > firstnumber && thirdnumber > secondnumber){
        alert(`El numero ${thirdnumber} es el mayor`)
    } else {
        alert('Los tres numero son iguales')
    } */

    let firstnumber = parseInt(prompt('Escribe un numero', 'number'))
    let secondnumber = parseInt(prompt('Escribe otro numero', 'number'))

    firstnumber > secondnumber ?
        console.log(`${firstnumber} es mayor que ${secondnumber}`)
        :
        console.log(`${secondnumber} es mayor que ${firstnumber}`)
