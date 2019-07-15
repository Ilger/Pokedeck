


debugger; 
const apiKey = '0859cc855f463308434e640ef36c8314';
const apiLinkForcast = 'api.openweathermap.org/data/2.5/forecast?q=';
let city = 'London,uk';

const forecastContainer = document.getElementById('forecast-container');

const container = document.createElement('div')
container.setAttribute('class', 'container')

forecastContainer.appendChild(container);

// axios.get(`https://${apiLinkForcast}${city}&APPID=${apiKey}`).then(response => console.log(response));
console.log(`https://${apiLinkForcast}${city}&APPID=${apiKey}`);
// Make a request for a user with a given ID
debugger;
axios.get(`https://${apiLinkForcast}${city}&APPID=${apiKey}`)
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
