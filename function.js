// Funciones

/*
let strUser = prompt('Dame una palabra', 'str').toLowerCase()
let strReversed = ''

for( i = strUser.length -1; i => 0; i-- ){
    strReversed += strUser[i]
    console.log(strUser[i])
}
console.log(strReversed)*/

/*
function reversedStr() {
    //console.log('mi primer funcion')
    let strUser = prompt('Dame una palabra', 'str').toLowerCase()
    let strReversed = ''
    
    for( i = strUser.length -1; i => 0; i-- ){
        strReversed += strUser[i]
        console.log(strUser[i])
    }
    console.log(strReversed)

}   */

//Invocar funcion

/*
function otherFunction() {
    console.log('otra funcion funcion')
}
*/

//Invocar funcion


    //Ejercicio 1
/*
function number()

let endPoint = parseInt(prompt('Ingrese un número entre 1 y 100')) 
let suma = 0 
let iterator = 0 //CICLO FOR // 

    for (let i = 0; i <= endPoint; i++) { suma = suma + i } 
    console.log(suma)
*/

   /* let str = prompt('Ingrese una oración', 'Hola E') let containerA = 0 let acomulator = str.length let containerE = 0 let counter = 0 let strMin = str.toLowerCase() // for (let i = 0; i < acomulator; i++) { // if( strMin[i]==='a'){ // containerA += 1 // }else if( strMin[i]==='e'){ // containerE += 1 // }else{ // console.error ('no contiene letras A ni E') // } // } 
    */
/*
   function getNumber(){
       let retorno = 'mensaje de retorno'
       console.log('pasos intermedios')
       return retorno
       //return termina la ejecución de la función
       //return devuelve 1 valor, por eso debe ir al final
        console.log('pasos intermedios')
    
   }
        console.log(getNumber)


        function getNumberLight () {
            return 'mensaje de retorno'
        }

        function suma(){
            return 8 + 10
        }*/
/*
        function ticketBuy(){
            return 'Compara boleto'
        }

        function abordar() {
            return 'Abordar bus'
        }

        function descender(){
            return 'Descender bus'
        }
        function viajar(){
            let boleto = ticketBuy()
            let abordarBus = abordar()
            let descenderBus = descender()

                console.log(viajar)
        } */

        // FUNCIONES CON PARAMETROS
/*
        let a = 6
        let b = 5
        function suma(a, b){
            console.log(a, b)
            
            let total = 0 // --> indica tipo de dato definir = 0
            total = a + b

            return total
        }
        let totalSuma = suma(a, b)


         //Parámetros opcionales

         function sumaOpcional(p1, p2, p3 = 4)
            console.log(p1, p2 p3)
            return p1 + p2 + p3
*/
            //Ejercicio:
            //Realiza una función
            //Que pida al usuario 3 números
            //Retorne la suma de esos 3 numeros
            //Los tres numeros deben pasarse como parámetros

        
            let number1 = parseInt(prompt('Dame un número'))
            let number2 = parseInt(prompt('Dame un segundo número'))
            let number3 = parseInt(prompt('Dame un tercer número'))

                //console.log(number1, number2, number3)
                function sumaTotal() {
                    return number1 + number2 + number3
        }
            let superSuma = sumaTotal (number1, number1, number3)
            console.log(sumaTotal(number1, number1, number3))
           
