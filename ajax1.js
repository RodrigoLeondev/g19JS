/*     // JSON.parse( texto ) --> recibe un obj
    // JSON.stringify( obj ) --> recibe un texto

const createUser = (objUser) => {
    console.log(JSON.stringify(objUser))
}

const xhttp = new XMLHttpRequest() // -->estructura de una petición
console.log(xhttp)
xhttp.open(
    "POST",
    "https://koders19gjs-default-rtdb.firebaseio.com/users/.json",true)

xhttp.onload = function(data){
    console.log(data)
    if(data.target.status >= 200 && data.target.status <= 399){
        console.log(data.target.response)
    }



    xhttp.send( JSON.stringify(objUser) ) 
}

let user = {
    name: 'Rodrigo Alejandro',
    lasName: 'Leon',
    age: 27
}
// createUser( user ) */

// Update
// PATCH - actualiza un fragmento
// PUT - actuliza todo

const createUser =  ( objUser ) => {
    console.log(JSON.stringify(objUser))
    const xhttp = new XMLHttpRequest()
    xhttp.open( "POST",  
      "https://https://rodrigokoderjs19-default-rtdb.firebaseio.com/users/.json", true)
    xhttp.onload = function(data) {
      console.log(data)
        if(data.target.status >= 200 && data.target.status <= 399){
            console.log(data.target.response)
        }
    }
    xhttp.send( JSON.stringify(objUser) )
  }
  
  let user =  {
    name: 'Rodrigo',
    lastName: 'Leon',
    age: 28
}
//     let user2 =  {

//     name: 'Paola',
//     lastName: 'Zamarripa',
//     age: 28
// }
//     let user3 =  {
//     name: 'Adalberto',
//     lastName: 'Zamarripa',
//     age: 47
// }
//     let user4 =  {
//     name: 'Elisa',
//     lastName: 'Juarez',
//     age: 47
// }
//     let user5 =  {
//     name: 'Natalia',
//     lastName: 'Zaam',
//     age: 18
// }
//     let user6 =  {
//     name: 'Osvaldo',
//     lastName: 'Martinez',
//     age: 42
// }
//     let user7 =  {
//     name: 'Chris',
//     lastName: 'Rocha',
//     age: 41
// }
//     let user8 =  {
//     name: 'Guillermo',
//     lastName: 'Chigo',
//     age: 36
// }
//     let user9 =  {
//     name: 'Israel',
//     lastName: 'Acevedo',
//     age: 44
// }
//     let user10 =  {
//     name: 'Jesus',
//     lastName: 'Silva',
//     age: 28
// }
  //createUser( user )
 //
 //
 const updateUser = ( newUser ) => {
    const updatexhr = new XMLHttpRequest()
    updatexhr.open('PATCH', 'https://rodrigokoderjs19-default-rtdb.firebaseio.com/users.json', true)

    updatexhr.onload = (response) => {
        if(response.target.status >= 200 && response.target.status <= 399){
            console.log(response.target)
            console.log(response.target.response)
        }
    }
    updatexhr.send( JSON.stringify(userUpdated))

  }


  const deleteUser  = ( idUser ) => {
    const deletexhr = new XMLHttpRequest()
    deletexhr.open(
      'DELETE', 
      `https://koders19gjs-default-rtdb.firebaseio.com/users/${idUser}.json`, 
      true
    )
    deletexhr.onload = (response) => {
      if(response.target.status >= 200 && response.target.status <= 399){
        console.log(response.target)
        console.log(response.target.response)
      }
    }
    deletexhr.send()
  }
  
  deleteUser( '-N4AIvnfNeWo3gt8vvgY') 