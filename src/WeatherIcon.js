import React from "react";

import Sun from "./images/sun.png";
import Cloud from "./images/cloud.png";
import CloudComputing from "./images/cloud-computing.png";
import Mist from "./images/mist.png";
import Rain from "./images/rain.png";
import Snow from "./images/snow.png";
import Storm from "./images/storm.png";
import SunCloud from "./images/sun-cloud.png";

export default function WeatherIcon(props) {
  let url = null;

  if (props.code === "01d" || props.code === "01n") {
    url = Sun;
  } else if (props.code === "02d" || props.code === "02n") {
    url = SunCloud;
  } else if (
    props.code === "03d" ||
    props.code === "03n" ||
    props.code === "04d" ||
    props.code === "04n"
  ) {
    url = Cloud;
  } else if (
    props.code === "09d" ||
    props.code === "09n" ||
    props.code === "10d" ||
    props.code === "10n"
  ) {
    url = Rain;
  } else if (props.code === "11d" || props.code === "11n") {
    url = Storm;
  } else if (props.code === "13d" || props.code === "13n") {
    url = Snow;
  } else if (props.code === "50d" || props.code === "50n") {
    url = Mist;
  } else {
    url = CloudComputing;
  }

  return <img src={url} alt="weather icon" width="70px" />;
}
