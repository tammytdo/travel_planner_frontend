import "./App.css";
import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";

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
    ],
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
    fetchData();
    console.log(e);
  };

  const fetchData = async () => {
    try {
      if (userFormData.city && userFormData.month) {
        const apiEndpoint = `http://localhost:5000/getCityData?user_destination=${userFormData.city}&month=${userFormData.month}`;

        const response = await axios.get(apiEndpoint); 

        console.log(response.data);
      } else {
        console.error("City and month are required");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
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
    </div>
  );
}

export default App;
