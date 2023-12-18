import React from "react";
import { Container } from "react-bootstrap";
import RestaurantModel from "./RestaurantModel";

const RestaurantCard = (props) => {
  return (
    <Container>
      {props.restaurants.map((restaurant, idx) => {
        return (
          <RestaurantModel
            key={idx}
            restaurantName={restaurant.name}
            restaurantAddress={restaurant.address}
            restaurantRating={restaurant.rating}
          />
        );
      })}
    </Container>
  );
};

export default RestaurantCard;
