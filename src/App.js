import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>hello world </h2>
        <Weather city="Paris" />
      </header>
    </div>
  );
}

export default App;
