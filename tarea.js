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

const employesTotal = ( obj ) => {
    let suma = 0
    let contador = 0
    
    for(elemento in obj) {
        suma += obj[elemento] 
        contador ++
    }
    return console.log(`Los empleados son ${contador} y el total de salarios ${suma}`)

}

employesTotal(salarios)
