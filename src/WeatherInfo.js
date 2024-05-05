import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <FormattedDate date={props.data.date} />
      <div className="current-data">
        <div className="row">
          <div className="col temp-current">
            <WeatherIcon code={props.data.icon} width="70px" />
            <WeatherTemperature
              celsius={props.data.temperature}
              maxcelsius={props.data.tempmax}
              mincelsius={props.data.tempmin}
            />
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
