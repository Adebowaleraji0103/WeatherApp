const API_KEY = "b331259393768ae562a5ec0b002648e4";

formElement = document.getElementById("formName");
inputElement = document.getElementById("inputName");
cityNameElement = document.getElementById("city-name");
cityWeather = document.getElementById("city-weather");
cityTemperature = document.getElementById("city-temperature");
cityHumidity = document.getElementById("city-humidity");
cityWind = document.getElementById("city-wind");

console.log(cityNameElement);

formElement.addEventListener("submit", async (e) => {
  e.preventDefault();

  let cityName = inputElement.value;
  // let cityWeather = inputElement.value
  // console.log(cityName)
  let result = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
  );
  let data = await result.json();
  // console.log(data.name)
  // console.log(data.main.humidity)
  // console.log(data.main.temp)
  console.log(data);

  cityNameElement.textContent = data.name;

  let weather = data.weather[0].main;
  if (weather === "Clouds") {
    cityWeather.textContent = "Cloudy";
  } else if (weather === "Sun") {
    cityWeather.textContent = "Sunny";
  } else {
    cityWeather.textContent = "Rainy";
  }
  let temp = data.main.temp;
  let deg = ((temp - 32) * 3) / 9;
  cityTemperature.textContent = data.main.temp;
  cityTemperature.textContent = deg;

  cityHumidity.textContent = data.main.humidity;
  cityWind.textContent = data.wind.speed;


});
function clearAll(){
  inputElement.value = "";
  cityWeather.textContent = "";
  cityNameElement.textContent = "";
  cityTemperature.textContent = "";
  cityHumidity.textContent = "";
}
