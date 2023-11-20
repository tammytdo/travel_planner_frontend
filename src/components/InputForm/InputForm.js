import React from "react";
import { Form, Button, Container } from "react-bootstrap";

const InputForm = (props) => {
  return (
    <Container>
      <Form onSubmit={props.handleFormSubmit}>
        <Form.Group controlId="user-city">
          <Form.Label>Enter a City: </Form.Label>
          <Form.Control
            type="text"
            name="city"
            placeholder="city"
            defaultValue={props.city}
            onChange={props.handleInputChange}
          />
        </Form.Group>

        {/* Add a bootstrap Dropdown to the months */}
        <Form.Group controlId="select-month">
          <Form.Label>Travel Month: </Form.Label>
          <Form.Control
            as="select"
            name="month"
            defaultValue={props.month}
            onChange={props.handleInputChange}
          >
            <option defaultValue="" disabled>
              Select a month
            </option>
            {props.months.map((month, idx) => (
              <option key={idx} defaultValue={month}>
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
