
const apikey = "1db79a731b58e87909262d144cb39fa9";
const main = document.getElementById('main');
const form = document.getElementById('search-form');
const search = document.getElementById('Search');
const button = document.getElementById('submitbutton');
const loading = document.getElementById('loading');
const url = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

async function getWeatherByLocation(city) {
  const resp = await fetch(url(city), { origin: 'cors' });
  const respData = await resp.json();

  addWeatherToPage(respData);
}

function addWeatherToPage(data) {
  const temp = KtoC(data.main.temp);

  const weather = document.createElement('div');
  weather.classList.add('weather');

  weather.innerHTML = `

        <h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
        ${temp}°C ${data.weather[0].main}</h2>
        <h3>  </h3>
        <h3>in ${search.value.toUpperCase()}</h3>
        <div class="weather-box"></div>
        `;

  main.innerHTML = '';

  main.appendChild(weather);
}

function KtoC(K) {
  return Math.floor(K - 273.15);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const city = search.value;

  if (city) {
    getWeatherByLocation(city);
    getAttractionsByLocation(city);
  }

});

function getResults() {
  const city = search.value;

  if (city) {
    getWeatherByLocation(city);
    getAttractionsByLocation(city);
  }

}
button.disabled = true;
search.addEventListener('keyup', () =>{
if(search.value.length == 0) button.disabled = true;
else button.disabled = false;
});
loading.addEventListener('ser', () =>{
if(respData == false) loading;
});



