import React from "react";
import { Card } from "react-bootstrap";

const RestaurantModel = (props) => {
  return (
    <Card key={`restaurant-${props.idx}`}>
    <Card.Body>
      <Card.Title>{props.restaurantName}</Card.Title>
      <Card.Text>{props.restaurantRating}</Card.Text>
    </Card.Body>
  </Card>
  )
}

export default RestaurantModel;