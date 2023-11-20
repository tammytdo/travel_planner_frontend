import React from 'react';
import { Card } from 'react-bootstrap';

const AttractionsCard = ({ attraction }) => {
  const [attractionName, attractionRating] = attraction.split(': ');
  return (
    <Card>
      <Card.Body>
        <Card.Title>{attractionName}</Card.Title>
        <Card.Text>{attractionRating}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default AttractionsCard;
