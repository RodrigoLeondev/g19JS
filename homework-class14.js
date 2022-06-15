
/**
 * Tareas
 * 1. Optimizar todos los ejericios con innerHTML
 * 2. Resolver el siguiente ejercicio
 */


/**
 * Ejercicio 
 * Dado un array de álbumes
 * Imprimir en un grid de cards con los álbumes
 * Cada card debe tener 
 * Id, Titulo e imagen del album
 * 
 * Referencia
 * https://getbootstrap.com/docs/5.2/components/card/#grid-cards
 */


 const albumes = [
    {
      "albumId": 1,
      "id": 1,
      "title": "accusamus beatae ad facilis cum similique qui sunt",
      "url": "https://via.placeholder.com/600x300/92c952",
      "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
      "albumId": 1,
      "id": 2,
      "title": "reprehenderit est deserunt velit ipsam",
      "url": "https://via.placeholder.com/600x300/771796",
      "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
      "albumId": 1,
      "id": 3,
      "title": "officia porro iure quia iusto qui ipsa ut modi",
      "url": "https://via.placeholder.com/600x300/24f355",
      "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
    {
      "albumId": 1,
      "id": 4,
      "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
      "url": "https://via.placeholder.com/600x300/d32776",
      "thumbnailUrl": "https://via.placeholder.com/150/d32776"
    },
    {
      "albumId": 1,
      "id": 5,
      "title": "natus nisi omnis corporis facere molestiae rerum in",
      "url": "https://via.placeholder.com/600x300/f66b97",
      "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
    },
    {
      "albumId": 1,
      "id": 6,
      "title": "accusamus ea aliquid et amet sequi nemo",
      "url": "https://via.placeholder.com/600x300/56a8c2",
      "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
    },
    {
      "albumId": 1,
      "id": 7,
      "title": "officia delectus consequatur vero aut veniam explicabo molestias",
      "url": "https://via.placeholder.com/600x300/b0f7cc",
      "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
    },
    {
      "albumId": 1,
      "id": 8,
      "title": "aut porro officiis laborum odit ea laudantium corporis",
      "url": "https://via.placeholder.com/600x300/54176f",
      "thumbnailUrl": "https://via.placeholder.com/150/54176f"
    },
    {
      "albumId": 1,
      "id": 9,
      "title": "qui eius qui autem sed",
      "url": "https://via.placeholder.com/600x300/51aa97",
      "thumbnailUrl": "https://via.placeholder.com/150/51aa97"
    },
    {
      "albumId": 1,
      "id": 10,
      "title": "beatae et provident et ut vel",
      "url": "https://via.placeholder.com/600x300/810b14",
      "thumbnailUrl": "https://via.placeholder.com/150/810b14"
    }
]
 


// document.getElementById('first__item').classList.remove('active')

const loadAlbumes = () => {
  let template = albumes.reduce((acc, cv) => { // --> se declara la función
    // Se agrega el código de bootstrapp
    // Se identifica el CV y se sustituye dependiendo lo que se solicite
    // En "src" se pide una url, por eso se declara el cv + la url ---> ${cv.url}
    // En "title" se pide el id, por eso se declara el cv + id ---> ${cv.id}
    // En "text" se pide el title, por eso se declara el cv + title ---> ${cv.title}
    return acc += `  
      <div class="col">  
        <div class="card">
          <img src="${cv.url}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${cv.id}</h5>
            <p class="card-text">${cv.title}</p>
          </div>
        </div>
      </div>
    `
  }, '')
  document.querySelector('#cards__albumes').innerHTML = template
  
} 

const loadFinished = () => {
  loadAlbumes()
}
