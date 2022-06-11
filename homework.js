const postCreated = (resp) => {
    
    if(resp.name != ''){
        document.querySelector('#wrap__alert').classList.remove(d-none)
        document.querySelector('#id__post').innerHTML = resp.name
        
        setTimerout( () => {
            document.querySelector('#wrap__alert').classList.add(d-none)
            document.querySelector('#id__post').innerHTML = ''
        }, 4000)
        document.querySelector('#title').value = ''
        document.querySelector('#body').value = ''
        document.querySelector('#datepost').value = '2022-06-10'
        
    }

}

let btnEnviar = document.querySelector('#create__post')
btnEnviar. addEventListener('click', () => {
    let title = documen.querySelector('#title').value.trim()
    let body = documen.querySelector('#body').value.trim()
    let datepost = document.querySelector('#datepost').value.trim()
})

if( title != '' && body != '' && datepost != ''){
    let newPost = {
        title : title,
        body : body,
        date : datepost
    }
    ajaxXHR(postCreated, '/posts/.json', 'POST', newPost)
} else {
    alert('Regresa, verifica los campos vacíos')
}





const ajaxXHR = (callback, url, method = 'GET', obj = {} ) => {
    const xhttp = new XMLHttpRequest()
    xhttp.open( 
        method,  
        `https://rodrigokoderjs19-default-rtdb.firebaseio.com/${url}`, 
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