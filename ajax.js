/* 
AJAX
Asyncronic JavaScript and XML
Holds the status of the XMLHttpRequest
0: reques not initialzed
1: server connection established
2: request recived
3: processing request
4: request finished and response is ready
*/

/* // Create and XMLHttpRequest
  const xhttp = new XMLHttpRequest()
  console.log(xhttp ) */


//Formar request
// Enviar request
// Esperar respuesta
// Recibir response
// Procesar el response

// Create an XMLHttpRequest object
const primerPeticion = new XMLHttpRequest()
// console.log(primerPeticion)

// Define a  callback function
// 0: reques not initialized
primerPeticion.onload = ( data ) => {
    // console.log(data)

}

// Send a request
// 1: server connection established. Abriendo la conexión

// GET, POST, DELETE, PATCH, PUT
primerPeticion.open('GET', '/js/example.json',false)
// console.log(primerPeticion)
primerPeticion.send()
// console.log(primerPeticion) 
