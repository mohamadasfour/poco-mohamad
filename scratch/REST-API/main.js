

const apiUrl = 'https://ghibliapi.herokuapp.com/films';

// Write Javascript code!
const cardsContainer = document.getElementById('app');


function createCard(data) {
  return `
  <div class="movie-item card">
    <h3>${data.title}</h3>
    <p>${data.description.substring(0, 300)}</p>
  </div>
  `;
}

  function createItems(data) {
   data.forEach((film) => {
     const item = createCard(film);
     cardsContainer.innerHTML += item;
   });
}

function getFilms(){
    fetch(apiUrl).then(function(response){
        response.json()
        .then(function(data){
            createItems(data)
        });
    });
}


getFilms();

setTimeout(function(){
 console.log('SetTimeOut');
 alert('hello');}),1000;
    
