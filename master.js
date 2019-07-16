

const sprite = document.getElementsByName('sprite')[0];
const move = document.getElementsByName('moves')[0];
const evolution = document.getElementsByName('evolution')[0];

console.log(document.getElementsByName('moves'));
console.log(sprite, move, evolution);
console.log(move);
console.log(evolution);
const lookingForPokemon = document.getElementById("pokemonChoosen");
// document.getElementsByClassName('input');
let response;


// eventlistner on keypress
// use input to make api call
lookingForPokemon.addEventListener('keypress', function (enter) {
  var key = enter.which || enter.keyCode;
  if (key === 13) { // 13 is enter

    // code for enter
    // apiCall();
    postInfo();
  }
});


// api call
// gets data
// parses json to arry
function apiCall(params) {
fetch('https://pokeapi.co/api/v2/pokemon/4')
  .then(function(response) {
    console.log('json');
    return response.json();
  })
  .then(function(myJson) {
    console.log('response json');

    console.log(JSON.stringify(myJson));
    console.log('myJson');
    console.log(myJson);
    postInfo(myJson)
  });

}


// post api data:
// The ID-number
// An image (sprite)
// At least 4 "moves"
// The previous evolution, only if it exists, along with their name and image
function postInfo() {

  sprite.innerHTML = "foto";
  for  (let i = 0; i < move.childElementCount; i++) {
    move.children[i].innerText = `move${(i + 1)}`;
    console.log(move.childElementCount);
    console.log(i);
  }
  evolution.innerHTML = 'first evo';

}






// console.log(apilink);

// Make a request for a user with a given ID
// function apiCall(params) {
//   let pokemon = lookingForPokemon.value;
//   let apilink = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

//   let  = new XMLHttpRequest();
//   pokedex.addEventListener("load", () => {
//     alert(pokedex.responseText)
//   });
//   pokedex.open("GET", "https://en.pokedexpedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=Albert+Einstein");
//   pokedex.send();

// }


