import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
      </div>
      <footer>
        <a
          href="https://github.com/ana-atn/weather-react-2"
          target="_blank"
          rel="noreferrer"
        >
          open-source code
        </a>{" "}
        by ana atanackovic
      </footer>
    </div>
  );
}
