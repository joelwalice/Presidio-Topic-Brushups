const apiKey = "2292237f3f5dbc6072958c92d04b0699";

function getOutcome() {
  const p = document.getElementById("output");
  p.style.alignItems = "center";
  p.style.display = "flex";
  p.style.justifyContent = "center";
  const output = document.querySelector("#enter").value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${output}&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data.coord);
      p.innerText = `Place : ${data.name}\nLongitude : ${data.coord.lon}, Latitude : ${data.coord.lat}\nWeather : ${data.weather[0].description}\nTemperature is : ${data.main.temp} but\nIt feels like ${data.main.feels_like}\n Wind speed : ${data.wind.speed} at ${data.wind.deg} degrees`;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      p.innerText = "Error retrieving weather data";
    });
}
