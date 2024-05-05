import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";

import Search from "./images/search.svg";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      city: response.data.name,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      tempmax: response.data.main.temp_max,
      tempmin: response.data.main.temp_min,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "73a00877081bd43422bdee0f3022beb5";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row city">
          <div className="col current-city">{weatherData.city}</div>
          <form className="col searchbar" onSubmit={handleSubmit}>
            <input
              className="bar form-control"
              type="text"
              placeholder="Search city..."
              size="20"
              autoFocus="on"
              autoComplete="off"
              onChange={handleCityChange}
            />
            <input
              className="go-button"
              type="image"
              src={Search}
              alt="Search Button"
            />
          </form>
        </div>
        <WeatherInfo data={weatherData} />
        <Forecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
