import React from "react";
import { Container } from "react-bootstrap";
import WeatherModel from "./WeatherModel";

const WeatherCard = (props) => {
  return (
    <Container>
      {props.upcomingWeather.map((weatherDay, idx) => {
        return (
          <WeatherModel
            key={`WeatherDayForecast-${idx}`}
            weatherDay={weatherDay}
          />
        );
      })}
    </Container>
  );
};

export default WeatherCard;
