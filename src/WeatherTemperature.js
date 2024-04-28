import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span className="WeatherTemperature">
        <span>{Math.round(props.celsius)}</span>
        <span className="c-f">
          <span> °C</span>
          {} |
          <span>
            <a
              href="#"
              className="tempconversion-link"
              onClick={convertToFahrenheit}
            >
              {" "}
              °F{" "}
            </a>
          </span>
        </span>
        <br />
        <div className="temp-current-min-max">
          <span className="temp-max">{Math.round(props.maxcelsius)}</span>/
          <span>{Math.round(props.mincelsius)}</span>
        </div>
      </span>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    let maxfahrenheit = (props.maxcelsius * 9) / 5 + 32;
    let minfahrenheit = (props.mincelsius * 9) / 5 + 32;

    return (
      <span className="WeatherTemperature">
        <span>{Math.round(fahrenheit)}</span>
        <span className="c-f">
          <span>
            <a
              href="#"
              className="tempconversion-link"
              onClick={convertToCelsius}
            >
              {" "}
              °C
            </a>
          </span>
          {} |<span> °F </span>
        </span>
        <br />
        <div className="temp-current-min-max">
          <span className="temp-max">{Math.round(maxfahrenheit)}</span>/
          <span>{Math.round(minfahrenheit)}</span>
        </div>
      </span>
    );
  }
}
