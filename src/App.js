import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by{" "}
          <a
            href="www.linkedin.com/in/nolizwe-masondo-736b38248"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nolizwe Masondo
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/nolizwemas/weather-react-app.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://rad-sprinkles-aa26b4.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}