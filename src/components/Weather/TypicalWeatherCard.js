// TypicalWeatherCard.js
import React from "react";
import { Card } from "react-bootstrap";

const TypicalWeatherCard = (props) => {
  return (
    <Card>
      <Card.Text>{props.typicalWeather}</Card.Text>
    </Card>
  );
};

export default TypicalWeatherCard;
