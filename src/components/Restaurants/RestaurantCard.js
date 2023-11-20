import React from "react";
import { Container } from "react-bootstrap";
import RestaurantModel from "./RestaurantModel";

const RestaurantCard = (props) => {
  return (
    <Container>
      {props.restaurants.map((restaurant, idx) => {
        const [restaurantName, restaurantRating] = restaurant.split(": ");
        return (
          <RestaurantModel
            key={idx}
            restaurantName={restaurantName}
            restaurantRating={restaurantRating}
          />
        );
      })}
    </Container>
  );
};

export default RestaurantCard;
