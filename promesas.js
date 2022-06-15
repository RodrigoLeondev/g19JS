let koders = [
    {
        name: 'Emilio',
        age: 30,
        city: 'Guadalajara',
        generacion: 6,
        typeKoder: 'js',
        gender: 'M',
        avatar: 'https://i.pravatar.cc/150?img=68'
    },
    {
        name: 'Juan',
        age: 30,
        city: 'Ciudad de méxico',
        generacion: 6,
        typeKoder: 'iOS',
        gender: 'M',
        avatar: 'https://i.pravatar.cc/150?img=67'
    },
    {
        name: 'Maria',
        age: 30,
        city: 'Ciudad de méxico',
        generacion: 6,
        typeKoder: 'iOS',
        gender: 'M',
        avatar: 'https://i.pravatar.cc/150?img=47'
    },
    {
        name: 'Ivonne',
        age: 30,
        city: 'Ciudad de méxico',
        generacion: 6,
        typeKoder: 'iOS',
        gender: 'M',
        avatar: 'https://i.pravatar.cc/150?img=45'
    },
    {
        name: 'Alex',
        age: 30,
        city: 'Ciudad de méxico',
        generacion: 6,
        typeKoder: 'iOS',
        gender: 'M',
        avatar: 'https://i.pravatar.cc/150?img=38'
    }
]

// PROMESAS: Acciones que se ejecutan en un futuro
// Pendiente
// Resultado: completada, rechazada
/* 
 const getKoders = () =>{
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            reject( new Error('Error al obtener datos'))
    }, 1500)
        })
}

let primerPromesa = new Promise( (resolve, reject) => {
    setTimeout( () => {
        resolve(koders)
        
}, 1500)
})

primerPromesa
.then( (responsePromesa)  => {
    console.log(responsePromesa)
})


let irAlCine = new Promise( (cumplir, noCumplir) => {
    let age = 18
    if(age >= 18) {
        resolve('Puedes entrar al cine')
    } else{
        reject('Alto niño nal*as miad*s')
    }

    setTimeout( () => {
        // cumplir('Boletos')
        noCumplir('Valio barriga sr...')
    }, 3000)
})

irAlCine
.then( (amos ) => {
    console.log(amos)
})



let entrarAlBar = new Promise( (resolve, reject) => {
    let age = 15

    if( age >= 18) {
        setTimeout( () => {
            resolve('Pasale papi')
        }, 3000)
    } else {
        reject('Llegale morro')
    }
})
 

entrarAlBar
.then( (amos ) => {
    console.log(amos)
})

const irAlBar = () => {
    return new Promise( (resolve, reject) => {
        let age = 15
        console.log('verificando tu edad morro')
        if( age >= 18) {
            setTimeout( () => {
                resolve('Pasale papi')
            }, 3000)
        } else {
            reject('Llegale morro')
        }
    })
}
entrarAlBar
.then( (amos ) => {
    console.log(amos)
})
 */


/* 
[].forEach((cv, index, arr) => {})

[].map((cv, index, arr) => {})

[].reduce((cv, index, arr) => {})
*/





/* // llamar la pizza
const llamarPizzeria = () => {
    return new Promise( (resolve, reject ) =>{
        setTimeout( () => {
            resolve('Buenas noches...')
        }, 1000)
    })
}

// Elegir pizza
const elegirPizza = () => {
    return new Promise( (resolve, reject ) =>{
        setTimeout( () => {
            resolve('Se elige peperoni')
        }, 1000)
    })
}

//  Esperar pizza
const esperarPïzza = () => {
    return new Promise( (resolve, reject ) =>{
        setTimeout( () => {
            // resolve('Esperando pizza...')
            reject('ya valió barriga')
        }, 1000)
    })
}

//  Pagar pizza
const pagarPizza = () => {
    return new Promise( (resolve, reject ) =>{
        setTimeout( () => {
            resolve('Pagar')
        }, 1000)
    })
}

// Disfrutar pizza
const disfrutarPizza = () => {
    return new Promise( (resolve, reject ) =>{
        setTimeout( () => {
            resolve('Esta buena')
        }, 1000)
    })
}

// Primer forma de hacer la promesa

llamarPizzeria ()
.then( response => {
    console.log(response)
    return elegirPizza()
})

.then( response => {
    console.log(response)
    return esperarPïzza()
})

.then( response => {
    console.log(response)
    return pagarPizza()
})

.then( response => {
    console.log(response)
    return disfrutarPizza()
})
.then( response => {
    console.log(response)
    
}) 

.catch( (error) => {
    console.log(error) //Error handling
    alert('algo salio mal con el pedido', error)
})
 */





/* // metodo 2, menos eficiente por como se estructura

llamarPizzeria()
.then(response => {
    console.log(response)
    elegirPizza()
    .then( responsePizza => {
        console.log(responsePizza)
        esperarPïzza()
        .then
    })
}) */

/* 
Generar proceso de inscripción
 - Conocer kodemia
 - Inscribirse
 - Tomar primera clase
*/

const conocerKodemia = () => {
    return new Promise( (resolve, reject ) =>{
        setTimeout( () => {
            resolve('Conocí Kodemia por redes')
        }, 1000)
    })
}

const inscripcion = () => {
    return new Promise( (resolve, reject ) =>{
        setTimeout( () => { 
            resolve('Comencé el proceso de inscripción')
            // reject('no me alcanzó')
        }, 2000)
    })
}

// const inscripcion = () => {
//     return new Promise( (resolve, reject ) =>{
//         setTimeout( () => {
//             Math.random() >= 0.5 ? 
//             resolve('Comencé el proceso de inscripción') :
//             reject('no me alcanzó')
//         }, 2000)
//     })
// }

const claseMuestra = () => {
    return new Promise( (resolve, reject ) =>{
        setTimeout( () => {
            resolve('Kodemia me regaló mi primer clase muestra')
        }, 4000)
    })
}

conocerKodemia ()
.then( response => {
    console.log(response)
    return inscripcion()
})

.then( response => {
    console.log(response)
    return claseMuestra()
})
.catch( (error) => {
    console.log(error)
    alert('me voy uber eats', error)
})