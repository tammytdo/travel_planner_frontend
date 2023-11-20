import React from "react";
import { Container } from "react-bootstrap";
import WeatherDayForecast from "./WeatherDayForecast"

const WeatherCard = (props) => {
  return (
  <Container> 
    {props.upcomingWeather.map((weatherDay, idx) => {
      return (
       <WeatherDayForecast index={`WeatherDayForecast-${idx}`} weatherDay={weatherDay}/>
      );
    })}
  </Container>
  )
};

export default WeatherCard;
