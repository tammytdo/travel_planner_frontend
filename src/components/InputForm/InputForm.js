import React from "react";
import { Form, Button, Container } from "react-bootstrap";

const InputForm = ({ userFormData, handleFormSubmit, handleInputChange }) => {
  return (
    <Container>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group controlId="user-city">
          <Form.Label>Enter a City: </Form.Label>
          <Form.Control
            type="text"
            name="city"
            placeholder="city"
            value={userFormData.city}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="select-month">
          <Form.Label>Travel Month: </Form.Label>
          <Form.Control
            as="select"
            name="month"
            value={userFormData.month}
            onChange={handleInputChange}
          >
            <option value="" disabled>
              Select a month
            </option>
            {userFormData.months.map((month, idx) => (
              <option key={idx} value={month}>
                {month}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Button type="submit">Search</Button>
      </Form>
    </Container>
  );
};

export default InputForm;
