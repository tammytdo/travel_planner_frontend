import React from "react";
import { Container } from "react-bootstrap";
import AttractionModel from "./AttractionsModel";

const AttractionsCard = (props) => {
  return (
    <Container>
      {props.attractions.map((attraction, idx) => {
        return (
          <AttractionModel
            key={idx}
            attractionName={attraction.name}
            attractionAddress={attraction.address}
            attractionRating={attraction.rating}
          />
        );
      })}
    </Container>
  );
};

export default AttractionsCard;
