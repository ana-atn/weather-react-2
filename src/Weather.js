import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import Search from "./images/search.svg";
import SearchLocation from "./images/search-location.svg";
import SunCloud from "./images/sun-cloud.png";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      tempmax: response.data.main.temp_max,
      tempmin: response.data.main.temp_min,
      date: "Friday, Aug 4, 17:24",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row city">
          <div className="col current-city">{weatherData.city}</div>
          <form className="col searchbar">
            <input
              className="bar form-control"
              type="text"
              placeholder="Search city..."
              size="20"
              autoFocus="on"
              autoComplete="off"
            />
            <input className="go-button" type="image" src={Search} />
            <button className="my-location-button">
              <img src={SearchLocation} />
            </button>
          </form>
        </div>
        <div className="current-date-time" i>
          {weatherData.date}
        </div>
        <div className="current-data">
          <div className="row">
            <div className="col temp-current">
              <img src={SunCloud} width="70px" alt="Weather Icon" />
              <span>{Math.round(weatherData.temperature)}</span>
              <span className="c-f">
                <span>
                  <a href="#" className="tempconversion-link">
                    {" "}
                    °C
                  </a>
                </span>
                |
                <span>
                  <a href="#" className="tempconversion-link">
                    {" "}
                    °F{" "}
                  </a>
                </span>
              </span>
              <br />
              <div className="temp-current-min-max">
                <span className="temp-max">
                  {Math.round(weatherData.tempmax)}
                </span>
                /<span>{Math.round(weatherData.tempmin)}</span>
              </div>
            </div>
            <div className="col current-other-info">
              <ul>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "73a00877081bd43422bdee0f3022beb5";
    let city = "New York";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
