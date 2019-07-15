


const pokeApi = 'https://pokeapi.co/';
let pokemon = 12;
let apilink = `https://pokeapi.co/api/v2/pokemon/butterfree`;


console.log(apilink);

// Make a request for a user with a given ID
axios.get(apilink)
  .then(function (response) {
    // handle success
   console.log(response);
   console.log('het is gelukt');
  })
  .catch(function (error) {
    // handle error
    console.log('het is niet gelukt');
    console.log(error);
  })
  .finally(function () {
    // always executed
    console.log('wordt sowieso uitgevoerd');
  });
