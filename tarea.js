/* 
Del siguiente objeto
 * Realizar una función que 
 * 1. Calcule el numero de empleados
 * 2. Obtenga el total a pagar
 * employesAndTotal( { 'Albert': 50000, 'jorge': 50000 })
 * -> Son 3 empleados y el total es 100000
 */
 

let salarios = {
    'juan': 30000,
    'Albert': 50000,
    'jorge': 50000
}
 /*
const employes = ( obj ) => {
    let total = 0
    for(val in obj) {
        total += (salarios[val])
        //total += (salarios[key])
    }
    return total

}
console.log(employes(salarios))
*/

const employes = ( obj ) => {
    let total = 0
    for(key in obj) {
       // total += (salarios[val])
        total += (salarios[key])
    }
    return total

}
console.log(employes(salarios))
