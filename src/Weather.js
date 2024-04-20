import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`The weather in Paris is ${response.data.main.temp}°C`);
  }
  let apiKey = "8cac06f7ab6c10287cd06a316ff84a57";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
}
