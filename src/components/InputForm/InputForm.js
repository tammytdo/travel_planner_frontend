import React from "react";
import { Form, Button, Container, Dropdown } from "react-bootstrap";

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

        <Form.Group controlId="select-month">
          <Form.Label>Travel Month: </Form.Label>
          <Dropdown>
            <Dropdown.Toggle variant="secondary">
              {props.month || "Select a month"}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {props.months.map((monthSelected, idx) => (
                <Dropdown.Item
                  key={`month-${idx}`}
                  onClick={() =>
                    props.handleInputChange({
                      target: { name: "month", value: monthSelected },
                    })
                  }
                >
                  {monthSelected}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Form.Group>
        <Button type="submit">Search</Button>
      </Form>
    </Container>
  );
};

export default InputForm;
