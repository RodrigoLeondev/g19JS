// Arrow functions -> funciones flecha
 /*
function retorno (a, b) {
    /*if(){
       
        condicion ? 
        return a
    }
    else{
        return b */
/*
        if(a > b){ 
            return a
        }
        else{
            return b 
    }
}*/


//ARROW FUNCTIONS

/*
console
function suma(a, b){
return a + b
}

// declaración o inicialización
const suma = (a, b) => {
    return a + b
}
console-log( suma(3,5) ) */

/*
const strReverse = ( str = 'koder' ) => {
    let strReverse = ''

    for(i = str.lenght -1 ; i >= 0 ; i--){
        strReverse += str[i]
    }
    return strReverse
}

console.log( strReverse('Hola'))

*/
 /*
// Ejercicio 1

const grados = (a) =>{
    let temperatura = parseInt(prompt('Diga esa temperatura'))
    let fah = temperatura * 9/5 + 32
        return fah
}
    console.log(grados(30))
*/

/*
//Ejercicio 2

const tabla = () => {
        let aux = ''
    for(i = 1; i <= 10; i++){
        for(j = 1; j <= 10; j++){
            console.log (`${i} x ${j} = ${ i * j} `)
        }   
    }
}
*/


// Arrow function
// Pedirá una cadena te texto
// Verificar si la oración es un palindromo
// isPalindrome('hola) --> No es un palindromo
// isPalindrome('oso) --> Si es un palindromo
// Función de retorno


const isPalindrome = () => {
    let oration = prompt('Ingresa una oración')
    let reversed = ''
        for(i = oration.lenght -1; i >= 0; i--){
                reversed += oration[i]
        }        
        if(oration === reversed){
            console.log('Si es un palindromo')
        }

        else{
            console.log('No es un palindromo')
        }
            
}
