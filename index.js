let units = "metric";
let weather = {
  apiKey: "3e569d522ddd510b3d30214c608b3c09",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=" + units + "&appid=3e569d522ddd510b3d30214c608b3c09"
      ).then((repsonse) => repsonse.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function(data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    const { country } = data.sys;
    console.log(name,icon,description,temp,humidity,speed,country);
    document.querySelector(".city").innerText = name + ", " + country;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°";
    document.querySelector(".humidity").innerText = humidity + "%";
    document.querySelector(".wind").innerText = speed + "km/h";
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900?" + name + "')";
    document.querySelector(".image").src = "https://source.unsplash.com/1600x900?" + description;
  },
  search: function() {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
  unitchange: function() {
    if (units === "imperial"){
      units = "metric";
      console.log("Units have changed to metric!");
    } else {
      units = "imperial";
      console.log("Units have changed to imperial!");
    }
    weather.search();
  }
};

document.querySelector(".search-button").addEventListener("click", function () { 
  weather.search();
});

document.querySelector(".temp").addEventListener("click", function () {
  weather.unitchange();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    weather.search();
  }
});

addEventListener('error', (event) => {});

onerror = (event) => { };