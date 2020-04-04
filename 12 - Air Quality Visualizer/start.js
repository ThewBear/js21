(() => {
  const cityElem = document.querySelector(".city");
  const stateCountryElem = document.querySelector(".state-country");
  const aqiElem = document.querySelector(".aqi > h1");
  const temperatureElem = document.querySelector(".temperature");
  const humidityElem = document.querySelector(".humidity");
  const windElem = document.querySelector(".wind");

  const city = "Bangkok";
  const state = city;
  const country = "Thailand";
  const aqi = Math.floor(Math.random() * 100 + 30);
  const temperature = Math.floor(Math.random() * 25 + 15);
  const humidity = Math.floor(Math.random() * 50 + 35);
  const wind = Math.floor(Math.random() * 25 + 5);

  cityElem.innerText = city;
  stateCountryElem.innerText = `${state}, ${country}`;
  aqiElem.innerText = aqi;
  temperatureElem.innerText = `Temp: ${temperature}°C`;
  humidityElem.innerText = `Humidity: ${humidity}%`;
  windElem.innerText = `Wind: ${wind} m/s`;

  if (aqi <= 50) {
    document.documentElement.style.setProperty(
      "--current-aqi-color",
      "var(--good-aqi-color)"
    );
  } else if (aqi <= 100) {
    document.documentElement.style.setProperty(
      "--current-aqi-color",
      "var(--medium-aqi-color)"
    );
  } else {
    document.documentElement.style.setProperty(
      "--current-aqi-color",
      "var(--bad-aqi-color)"
    );
  }
})();
