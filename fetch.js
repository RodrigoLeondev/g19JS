/*
ESTRUCTURA DE FETCH

fetch('https://example.com/movies.json') -->hace un GET por defecto
.then(response => response.json())
.then(data => console.log(data))
.catch(error => {
    console.log(error)
}) */

// const fetch = () => {
//     return new Promise( (resolve, reject ))
// }

fetch('https://koders19gjs-default-rtdb.firebaseio.com/koders/.json')
.then( response => {
    if(response.ok){
       return response.json() 
    } else{
        return new Error('Mensaje de error')
    }
    
})
.then( (koders) => {
    console.log(koders)
})
.catch(err => {
    console.log(err)
})