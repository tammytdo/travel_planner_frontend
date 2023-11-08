import "./App.css";
import React, { useState } from "react";
import { Form, Button, Container, Dropdown } from "react-bootstrap";

function App() {
  const [userFormData, setUserFormData] = useState({
    city: "",
    month: "",
    months: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]
  });

  const handleInputChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    setUserFormData({
      ...userFormData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
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
              <option value="" disabled>Select a month</option>
              {userFormData.months.map((month, idx) => (
                <option key={idx}>{month}</option>
              ))}
            </Form.Control>
          </Form.Group>
          <Button type="submit">Search</Button>
        </Form>
      </Container>
    </div>
  );
}

export default App;
