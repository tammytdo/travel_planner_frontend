import React from "react";
import { Card } from "react-bootstrap";

const AttractionModel = (props) => {
  return (
    <Card key={`attractions-${props.idx}`}>
      <Card.Body>
        <Card.Title>{props.attractionName}</Card.Title>
        <Card.Text>{props.attractionAddress}</Card.Text>
        <Card.Text>{props.attractionRating}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default AttractionModel;
