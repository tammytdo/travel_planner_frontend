import React from "react";
import {  Card } from "react-bootstrap";

const WeatherDayForecast = (props) => {
  return (
    <Card>
      <Card.Body>
        <Card.Text>{props.weatherDay.date}</Card.Text>
        <p>Min Temp: {props.weatherDay.min_temp}</p>
        <p>Max Temp: {props.weatherDay.max_temp}</p>
        <p>Description: {props.weatherDay.description}</p>
      </Card.Body>
    </Card>
  );
};

export default WeatherDayForecast;