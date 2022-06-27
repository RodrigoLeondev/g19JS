
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
    }
  }


// ajaxXHR(printAllPosts, '/posts/.json', 'GET')
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
btnEnviar.addEventListener('click',  () => {
    
    let title = document.querySelector('#title').value.trim()
    let body = document.querySelector('#body').value.trim()
    let datepost = document.querySelector('#datepost').value.trim()

    if( title !== '' && body !== '' && datepost !== '' ){ // Validación de que no hay datos vacíos

        let newPost = { // se hace el envío, con esto se forma el post
            title: title,
            body: body,
            date: datepost
        }

        console.log(newPost)
        
        ajaxXHR(postCreated, '/posts/.json', 'POST', newPost)

    } else {
        alert('Algunos datos estan vacios') // si estan vacío se manda la alerta
    }
})