import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
      <footer>
        <a href="https://github.com/ana-atn/weather-react-2">
          open-source code
        </a>{" "}
        by ana atanackovic
      </footer>
    </div>
  );
}

export default App;
