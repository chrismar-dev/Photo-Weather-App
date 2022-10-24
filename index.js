let weather = {
  apiKey: "3e569d522ddd510b3d30214c608b3c09",
  fetchWeather: function (city, units) {
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
    console.log(name,icon,description,temp,humidity,speed);
    document.querySelector(".city").innerText = name;
  }
};

