import React from "react";
import { Container, Card } from "react-bootstrap";

const RestaurantCard = (props) => {
    console.log("restaurants:", props.restaurants);

  return (
    <Container>
      {props.restaurants.map((restaurant, idx) => {
        const [restaurantName, restaurantRating] = restaurant.split(": ");
        return (
          <Card key={`restaurant-${idx}`}>
            <Card.Body>
              <Card.Title>{restaurantName}</Card.Title>
              <Card.Text>{restaurantRating}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </Container>
  );
};

export default RestaurantCard;
