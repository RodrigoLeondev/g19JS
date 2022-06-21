
/* 
Para este ejercicio, se realiza primero la petición GET a la url,
después se realizan todas las funciones para filtrar 
*/
const primerPeticion = new XMLHttpRequest()
let users = []

primerPeticion.onload = ( data ) => {
  if(data.target.status >= 200 && data.target.status <= 299){
  let responseJSON = JSON.parse(data.target.responseText)
  users = responseJSON
//   printUsers(users)
  } 

}


primerPeticion.open('GET', 'https://jsonplaceholder.typicode.com/users',false)

primerPeticion.send()


const filterUsers = ( strToFilter ) => {
    strToFilter = strToFilter.toLowerCase()
    let filteredUsers = users.filter( (user) => {
      if(
        user.name.toLowerCase().includes(strToFilter) ||
        user.username.toLowerCase().includes(strToFilter) ||
        user.email.toLowerCase().includes(strToFilter)
      ){
        return user
      }
    })
    return filteredUsers
  }
  
  const printUserList = (usersFiltered) => {
    let allUserLayout = usersFiltered.reduce((acc, user, idx, arr) => {
      return acc += `
      <a href="#" class="list-group-item list-group-item-action " aria-current="true">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">${user.name}</h5>
        </div>
        <p class="mb-1">${user.phone}</p>
        <small>${user.email}</small>
      </a>
      `
    }, '')
  
    document.getElementById('users__filtered').innerHTML = allUserLayout
  }
  
  
  // cuando cargue la pagina, cargar todos los usuarios
  document.addEventListener('DOMContentLoaded',  printUserList(users) )
  
  let inputSearch = document.getElementById('filter__user')
  inputSearch.addEventListener('keyup', () => {
    // obtener el valor a buscar
    let searchTerm = inputSearch.value
    // Filtrar los usuarios
    let usersFiltrados = filterUsers(searchTerm)
    // imprimirlos en consola
    console.log(usersFiltrados)
    // agregarlos al layout en #lista__users
    printUserList(usersFiltrados)
  }) 


  const printUsers = (arrObjs) => {
    let template = arrObjs.reduce((acc, user,) => { // --> por cada user que esta dentro de arrObj...
      return acc += `
      <li> ${user.id}: ${user.title}
      <p> ${user.body} </p>
      </li>
      `
  }, '')
      document.querySelector('#lista__users').innerHTML = template

}

 
