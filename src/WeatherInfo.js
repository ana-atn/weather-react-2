import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import SunCloud from "./images/sun-cloud.png";

export default function WeatherInfo(props) {
  return (
    <div className WeatherInfo>
      <FormattedDate date={props.data.date} />
      <div className="current-data">
        <div className="row">
          <div className="col temp-current">
            <WeatherIcon code={props.data.icon} width="70px" />

            <span>{Math.round(props.data.temperature)}</span>
            <span className="c-f">
              <span>
                <a href="#" className="tempconversion-link">
                  {" "}
                  °C
                </a>
              </span>
              {} |
              <span>
                <a href="#" className="tempconversion-link">
                  {" "}
                  °F{" "}
                </a>
              </span>
            </span>
            <br />
            <div className="temp-current-min-max">
              <span className="temp-max">{Math.round(props.data.tempmax)}</span>
              /<span>{Math.round(props.data.tempmin)}</span>
            </div>
          </div>
          <div className="col current-other-info">
            <ul>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {Math.round(props.data.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
