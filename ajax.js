/* 
1. 
2. Request recived
3. Processing request
4.Reques finished and response is ready
*/

//Formar request
// Enviar request
// Esperar respuesta
// Recibir response
// Procesar el response

// Create an XMLHttpRequest object
const primerPeticion = new XMLHttpRequest()
console.log(primerPeticion)

// Define la callback function
primerPeticion.onload = ( data ) => {
    console.log(data)

}

// Send a request
// GET, POST, DELETE, PATCH, PUT
primerPeticion.open('GET', '/example.json',false)
console.log(primerPeticion)
primerPeticion.send()
