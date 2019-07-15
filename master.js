


debugger; 
const pokeApi = 'https://pokeapi.co/';

const forecastContainer = document.getElementById('forecast-container');

const container = document.createElement('div')
container.setAttribute('class', 'container')

forecastContainer.appendChild(container);

console.log(`https://pokeapi.co/`);
// Make a request for a user with a given ID
debugger;
axios.get(`https://pokeapi.co/`)
  .then(function (response) {
    debugger;
    // handle success
   console.log(response);
  })
  .catch(function (error) {
    debugger;
    // handle error
    console.log(error);
  })
  .finally(function () {
    debugger; 
    // always executed
  });
