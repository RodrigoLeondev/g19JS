const getInfo = () =>{
  const primerPeticion = new XMLHttpRequest()
let users = []

primerPeticion.onload = ( data ) => {
  if(data.target.status >= 200 && data.target.status <= 299){
  let responseJSON = JSON.parse(data.target.responseText)
  users = responseJSON
//   printUsers(users)
  } 

}


primerPeticion.open('GET', 'https://jsonplaceholder.typicode.com/posts',false)

primerPeticion.send()
// console.log(primerPeticion)

}




const filterUsers = ( strToFilter ) => {
    strToFilter = strToFilter.toLowerCase()
    let filteredUsers = users.filter( (user) => {
      if(
        user.id.toLowerCase().includes(strToFilter) ||
        user.title.toLowerCase().includes(strToFilter) ||
        user.body.toLowerCase().includes(strToFilter)
      ){
        return user
      }
    })
    return filteredUsers
  }


const printPost = (usersFiltered) => {
    let allUserLayout = usersFiltered.reduce((acc, user, idx, arr) => {
      return acc += `
      <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${user.id}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${user.title}</h6>
        <p class="card-text">${user.name}</p>
      </div>
    </div>
      `
    }, '')
  
    document.getElementById('users__filtered').innerHTML = allUserLayout
  }

//   // cuando cargue la pagina, cargar todos los usuarios
  document.addEventListener('DOMContentLoaded',  printPost(users) )
  
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



//   const printUsers = (arrObjs) => {
//     let template = arrObjs.reduce((acc, user,) => { // --> por cada user que esta dentro de arrObj...
//       return acc += `
//       <li> ${user.id}: ${user.title}
//       <p> ${user.body} </p>
//       </li>
//       `
//   }, '')
//       document.querySelector('#lista__users').innerHTML = template

// }
