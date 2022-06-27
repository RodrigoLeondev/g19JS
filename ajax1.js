  // JSON.parse( texto ) --> recibe un obj
    // JSON.stringify( obj ) --> recibe un texto



     // POST
    // payload --> set de información que se envía en request o response

// const createUser =  ( objUser ) => {
//   const xhttp = new XMLHttpRequest()
//   xhttp.open( "POST",  
//     "https://rodrigokoderjs19-default-rtdb.firebaseio.com/users/.json", true)
//   xhttp.onload = function(data) {
//       if(data.target.status >= 200 && data.target.status <= 399){
//         console.log(data.target.response)
//       }
//   }
//   xhttp.send( JSON.stringify(objUser) )
// }

// let user =      {
//     name: 'Jesus',
//     lastName: 'Silva',
//     age: 28
// }


// POST Create
// GET Read
// PATCH-PUT Update
// DELETE Delete

/* 
PATCH - Actualiza un fragmento
PUT - Actualiza todo
*/


// PATCH
// const createUser =  ( objUser ) => {
//   const xhttp = new XMLHttpRequest()
//   xhttp.open( "POST",  
//     "https://rodrigokoderjs19-default-rtdb.firebaseio.com/users/.json", true)
//   xhttp.onload = function(data) {
//       if(data.target.status >= 200 && data.target.status <= 399){
//         console.log(data.target.response)
//       }
//   }
//   xhttp.send( JSON.stringify(objUser) )
// }

// let user =      {
//     name: 'Jesus',
//     lastName: 'Silva',
//     age: 28
// }

// const updateUSer = ( userUpdate ) =>{
//   const updatexhr = new XMLHttpRequest()
//   updatexhr.open('PATCH', 'https://rodrigokoderjs19-default-rtdb.firebaseio.com/-N53SJ-AMBYqmN7xYiWU.json', true)

// updatexhr.onload = (response) => {
//   if(response.target.status >= 200 && response.target.status <= 399){
//     console.log(response.target)
//     console.log(response.target.response)
//   }

//   }
//   updatexhr.send(JSON.stringify(userUpdate))
// }

// updateUSer( {
//   name: 'Jorge Luis',
//   lastName: 'Camarillo 123',
//   age: 31
// })   ejecutar en consola





// PUT --> Si no se indica todas las propuedades del objeto
// reemplaza por las nuevas:

// updateUSerPut( {
//   name: 'Jorge Luis',
//   lastName: 'Camarillo 123',
//   age: 31
// })   ---> Así es el array de obj inicial

// updateUSerPut( {
//   name: 'Jorge Luis',}) ---> En este caso al imprimir, solo quedaría name, las demás desaparecen


// const createUser =  ( objUser ) => {
//   const xhttp = new XMLHttpRequest()
//   xhttp.open( "POST",  
//     "https://rodrigokoderjs19-default-rtdb.firebaseio.com/users/.json", true)
//   xhttp.onload = function(data) {
//       if(data.target.status >= 200 && data.target.status <= 399){
//         console.log(data.target.response)
//       }
//   }
//   xhttp.send( JSON.stringify(objUser) )
// }

// let user =      {
//     name: 'Jesus',
//     lastName: 'Silva',
//     age: 28
// }

// const updateUSerPut = ( userUpdate ) =>{
//   const updatexhr = new XMLHttpRequest()
//   updatexhr.open('PUT', 'https://rodrigokoderjs19-default-rtdb.firebaseio.com/-N53SJ-AMBYqmN7xYiWU.json', true)

// updatexhr.onload = (response) => {
//   if(response.target.status >= 200 && response.target.status <= 399){
//     console.log(response.target)
//     console.log(response.target.response)
//   }

//   }
//   updatexhr.send(JSON.stringify(userUpdate))
// }

// updateUSerPut( {
//   name: 'Jorge Luis',
//   lastName: 'Camarillo 123',
//   age: 31
// })   ejecutar en consola




// DELETE
// const createUser =  ( objUser ) => {
//   const xhttp = new XMLHttpRequest()
//   xhttp.open( "POST",  
//     "https://rodrigokoderjs19-default-rtdb.firebaseio.com/users/.json", true)
//   xhttp.onload = function(data) {
//       if(data.target.status >= 200 && data.target.status <= 399){
//         console.log(data.target.response)
//       }
//   }
//   xhttp.send( JSON.stringify(objUser) )
// }

// let user =      {
//     name: 'Jesus',
//     lastName: 'Silva',
//     age: 28
// }

// const deleteUser = ( idUser ) =>{
//   const deletexhr = new XMLHttpRequest()
//   deletexhr.open('PUT', `https://rodrigokoderjs19-default-rtdb.firebaseio.com/${idUser}.json`, true)

//   deletexhr.onload = (response) => {
//   if(response.target.status >= 200 && response.target.status <= 399){
//     console.log(response.target)
//     console.log(response.target.response)
//   }

//   }
//   deletexhr.send(JSON.stringify(idUser))
// }


// GET
const getUsers  = (callback) => {
  const getxhr = new XMLHttpRequest()
  getxhr.open(
    'GET', 
    `https://rodrigokoderjs19-default-rtdb.firebaseio.com/users/.json`, 
    true
  )
  getxhr.onload = (response) => {
    if(response.target.status >= 200 && response.target.status <= 399){
      console.log(response.target)
      let users = JSON.parse(response.target.response)
      callback(users)

    }
  }
  getxhr.send()
}

const printUsers = (users) => {
  for( user in users) {
    console.log(users[user].name)
  }
}
//  getUsers(printUsers)




const ajaxXHR = (callback, url, method = 'GET', obj = {} ) => {

  const xhttp = new XMLHttpRequest()
  xhttp.open( 
      method,  
      `https://koders19gjs-default-rtdb.firebaseio.com${url}`, 
      true
  )
  xhttp.onload = function(data) {
      if(data.target.status >= 200 && data.target.status <= 399){
          let response = JSON.parse(data.target.response)
          callback(response)
      }
  }

  if(method === 'GET' || method === 'DELETE'){
      xhttp.send()
  } else {
    xhttp.send( JSON.stringify(obj) )
  }
  
}
// 09-06-2022