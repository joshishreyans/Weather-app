const apiKey = YOUR_API_KEY;
const weather = (city) => {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=metric&appid=" +
      apiKey
  )
    .then((response) => response.json())
    .then((data) => displayWeather(data));
};

const displayWeather = (data) => {
  const { name } = data;
  const { icon, description } = data.weather[0];
  const { temp, humidity } = data.main;
  console.log(name, icon, description, temp, humidity);

  document.querySelector(".temperature h1").innerText = temp + "° C";
  document.querySelector(".city h2").innerText = name;
  document.querySelector(".description h2").innerText = description;
  document.querySelector(".description img").src =
    "http://openweathermap.org/img/wn/" + icon + "@2x.png";
  document.querySelector(".humidity h2").innerText = humidity + "%";
  document.querySelector(".weather").classList.remove("loading");
  document.body.style.backgroundImage= "url('https://source.unsplash.com/1600x900/?"+name+"')"
};

const searchCity = () => {
  weather(document.querySelector(".search-bar input").value);
};

document
  .querySelector(".search-bar button")
  .addEventListener("click", function () {
    searchCity();
  });

document
  .querySelector(".search-bar input")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      searchCity();
    }
  });

  weather('vadodara');