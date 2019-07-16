

const name = document.getElementsByName('name-id')[0];
const sprite = document.getElementsByName('sprite')[0];
const move = document.getElementsByName('moves')[0];
const evolution = document.getElementsByName('evolution')[0];

const lookingForPokemon = document.getElementById("pokemonChoosen");
let response;


// eventlistner on keypress
// use input to make api call
lookingForPokemon.addEventListener('keypress', function (enter) {
  var key = enter.which || enter.keyCode;
  if (key === 13) { // 13 is enter

    // code for enter
    apiCall();
  }
});


// api call
// gets data
// parses json to arry
function apiCall(params) {
  fetch('https://pokeapi.co/api/v2/pokemon/charmander')
  .then(function(response) {
    console.log('json');
    return response.json();
  })
  .then(function(myJson) {
    console.log('https://pokeapi.co/api/v2/pokemon/charmander');
    console.log(myJson);
    postInfo(myJson)
  });

}


// post api data:
// The ID-number
// An image (sprite)
// At least 4 "moves"
// The previous evolution, only if it exists, along with their name and image
function postInfo(myJson) {
  let pokemonName = myJson.name;
  let pokemonId = myJson.id;
  let pokemonFoto = myJson.sprites.front_default;
  let pokemonMove = myJson.moves
  // let prevPokemonEvo = myJson 

  name.innerHTML = `<h2>${pokemonName} #${pokemonId}</h2>`;
  sprite.innerHTML = `<img src="${pokemonFoto}" alt="the front of ${pokemonName}">`
  
  console.log(pokemonMove);
  for  (let i = 0; i < move.childElementCount; i++) {
    move.children[i].innerText = `${pokemonMove[i].move.name}`;
  }
  evolution.innerHTML = 'first evo';

}








