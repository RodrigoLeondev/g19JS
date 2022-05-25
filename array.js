

// let newArray = []
// let newArray = [1.2.4]
// let newArray = ['str', str2]
// let newArray = [ [9.8.7], [9,8]]

let newArray = [1,2,3, 'str', [1,2] ]
    console.log(newArray)
    //.lenght --> tamaño de array  --> cantidad de elementos que contiene

   // console.log(newArray[3][1])

    for( i = 0; i < newArray.length ; i++ ){
        //console.log(newArray[i])
    }  
    let arrayToReverse = [1,2,3]
    let arrReversed = []
    for( i = arrayToReverse.length -1 ; i >= 0 ; i++ ){
        arrReversed.push( arrayToReverse[i])
    }
        console.log(arrayToReverse, arrReversed)
    // Métodos de array 
    // .push() --> agregar nuevo item al array
    // .pop() --> elimina nuevo item al array
