import "./App.css";
import React, { useState } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import axios from "axios";
import sampleResponse from "./sampleResponse.json";

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
    errorMsg: "",
    attractions: [],
    restaurants: [],
    typical_weather: "",
    upcoming_weather: [],
  });

  const handleInputChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    setUserFormData({
      ...userFormData,
      [name]: value,
    });
  };

  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   fetchData();
  //   console.log(e);
  // };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if (userFormData.city && userFormData.month) {
        // Instead of making an actual API call, use the imported sampleResponse
        setUserFormData({
          ...userFormData,
          attractions: sampleResponse.attractions,
          restaurants: sampleResponse.restaurants,
          typical_weather: sampleResponse.typical_weather,
          upcoming_weather: sampleResponse.upcoming_weather,
        });
      } else {
        console.error("City and month are required");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // const fetchData = async () => {
  //   try {
  //     if (userFormData.city && userFormData.month) {
  //       const apiEndpoint = `http://localhost:5000/getCityData?user_destination=${userFormData.city}&month=${userFormData.month}`;

  //       const response = await axios.get(apiEndpoint);

  //       setUserFormData({
  //         ...userFormData,
  //         attractions: response.data.attractions,
  //         restaurants: response.data.restaurants,
  //         typical_weather: response.data.typical_weather,
  //         upcoming_weather: response.data.upcoming_weather,
  //       });
  //     } else {
  //       console.error("City and month are required");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  console.log("userFormData:", userFormData);

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

      <Container>
        <p id='typical_weather'>{userFormData.typical_weather}</p>
      </Container>

      <Container>
        {userFormData.upcoming_weather.map((weatherDay, idx) => (
          <Card id='upcoming_weather' key={`weatherDay-${idx}`}>
            <Card.Body>
              <Card.Text>{weatherDay.date}</Card.Text>
              <p>Min Temp: {weatherDay.min_temp}</p>
              <p>Max Temp: {weatherDay.max_temp}</p>
              <p>Description: {weatherDay.description}</p>
            </Card.Body>
          </Card>
        ))}
      </Container>

      <Container>
        {userFormData.attractions.map((attraction, idx) => {
          const [attractionName, attractionRating] = attraction.split(": "); 
          return (
            <Card id='attractions' key={`attraction-${idx}`}>
              <Card.Body>
                <Card.Title>{attractionName}</Card.Title>
                <Card.Text>{attractionRating}</Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </Container>

      <Container>
        {userFormData.restaurants.map((restaurant, idx) => {
          const [restaurantName, restaurantRating] = restaurant.split(": "); 
          return (
            <Card id='restaurants' key={`restaurant-${idx}`}>
              <Card.Body>
                <Card.Title>{restaurantName}</Card.Title>
                <Card.Text>{restaurantRating}</Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </Container>
    </div>
  );
}

export default App;
