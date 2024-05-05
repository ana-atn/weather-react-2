import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row weather-week">
        <div className="col weather-day">
          <div className="day-name">Thu</div>
          <WeatherIcon code="01d" width="50px" />
          <div className="temp-max-min">
            <strong>20</strong>/10
          </div>
        </div>
      </div>
    </div>
  );
}
