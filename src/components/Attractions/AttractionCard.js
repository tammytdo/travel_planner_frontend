import React from "react";
import { Container } from "react-bootstrap";
import AttractionModel from './AttractionsModel';

const AttractionsCard = (props) => {
  return (
    <Container>
      {props.attractions.map((attraction, idx) => {
        const [attractionName, attractionRating] = attraction.split(": ");
        return (
          <AttractionModel key={idx} attractionName={attractionName} attractionRating={attractionRating}/>
        );
      })}
    </Container>
  );
};

export default AttractionsCard;
