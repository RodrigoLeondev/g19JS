//CICLOS
// for while y do while

/*
for(,inicio, fin, incremento){

}*/
 
/*
for(let i = 1; i <= 10; i++) {  //++ incremento
    console.log(`5x${i} = ${5*i}`)
} */

/*
let str = 'Hola koders'
for(let i = 1; i <= 10; i++)
    console.log()
*/

// Hola koders --> Imprimir en cada una de las vocales

let str = 'Hola koders'
let end = str.length - 1

for(let i = 0; i < end; i++) {
    let letter = str [i]
    if(
        letter !== 'a' &&
        letter !== 'e' &&
        letter !== 'i' &&
        letter !== 'o' &&
        letter !== 'u' &&
        letter !== ' '
         ){
             console.log(letter)
         }
}

