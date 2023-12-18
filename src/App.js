import React from "react";
import './App.css';
import WeatherSearch from "./WeatherSearch"; 

export default function App() {
  return (

    <div className="App">
      <div className="container">
      <h1>Weather</h1>
      <WeatherSearch />
    </div>
    </div>
  );
}
