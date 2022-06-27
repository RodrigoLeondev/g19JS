
/**
 * 
 * 1. LLenar el endpoint de firebase con multiples posts
 * 2. Crear una funcion que obtenga todos los posts y los imprima en una lista de cards
 * Referencia:
 * https://getbootstrap.com/docs/5.2/components/card/#content
 * 
 * 3. Crear un nuevo documento html con un formulario que tenga lo siguiente
 * 3 campos (titulo, contenido, fecha )
 * 1 botón de enviar
 * Referecia:
 * https://getbootstrap.com/docs/5.2/forms/form-control/
 * 
 *  Acciones
 *  cuando se de click en el boton de enviar, 
 *  crear un nuevo post en firebase
 *  Opcional: Mostrar un alert con el aviso de que ya se creo el post
 * 
 * Referencia: 
 * https://getbootstrap.com/docs/5.2/components/alerts/#content
 */

// Estructura sugerida de archivos
/**
 * createuser.html
 * js/createPost.js
 * css/createpost.css
 */

// Esctructura del post
// { title, body, date }

// url de firebase
//  * urlFirebase /posts/.json

// como obtener los valores de los input, textarea, select ...
// let title = document.querySelector('#elemento').value
// let body = document.querySelector('#elemento').value
// let date = document.querySelector('#elemento').value

const ajaxXHR = (callback, url, method = 'GET', obj = {} ) => {
  const xhttp = new XMLHttpRequest()
  xhttp.open( 
      method,  
      `https://rodrigokoderjs19-default-rtdb.firebaseio.com/POST/.json`, 
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
  }}




const postCreated = (resp) => {
  // { 
  //     name:'-id' 
  // }
  if(resp.name !== ''){
      document.querySelector('#wrap__alert').classList.remove('d-none')
      document.querySelector('#id__post').innerHTML = resp.name

      // timer
      setTimeout( () => {
          document.querySelector('#wrap__alert').classList.add('d-none')
          document.querySelector('#id__post').innerHTML = ''
      }, 4000)
      
      // clear form
      document.querySelector('#title').value = ''
      document.querySelector('#body').value = ''
      document.querySelector('#datepost').value = '2022-06-10'
  }
}

let btnEnviar = document.querySelector('#create__post')
btnEnviar.addEventListener('click', () => {
  
  let title = document.querySelector('#title').value
  let body = document.querySelector('#body').value
  let datepost = document.querySelector('#datepost').value

  if( title !== '' && body !== '' && datepost !== '' ){

      let newPost = {
          title: title,
          body: body,
          date: datepost
      }

      console.log(newPost)
      
      ajaxXHR(postCreated, '/posts/.json', 'POST', newPost)

  } else {
      alert('Algunos datos estan vacios')
  }
})

