import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import sampleResponse from "./sampleResponse.json"; // for testing
import InputForm from "./components/InputForm/InputForm";
import { Container, Row, Col } from "react-bootstrap"; // Importing Container, Row, Col from React Bootstrap
import TypicalWeatherCard from "./components/Weather/TypicalWeatherCard";
import Map from "./components/Map/Map";
import WeatherCard from "./components/Weather/WeatherCard";
import AttractionCard from "./components/Attractions/AttractionCard";
import RestaurantCard from "./components/Restaurants/RestaurantCard";

const apiKeyGoogle = process.env.REACT_APP_GOOGLE_API_KEY;

function App() {
  const [formData, setFormData] = useState({
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
  const [cityData, setCityData] = useState({
    city: "Seattle", // Seattle for testing
    month: "",
    lat: "",
    lon: "",
    response: {},
    errorMsg: "",
    typicalWeather: "",
    attractions: [],
    restaurants: [],
    upcomingWeather: [],
    mapUrl: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCityData({
      ...cityData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  const fetchData = async () => {
    if (cityData.city && cityData.month) {
      const apiEndpoint = `http://localhost:5000/getCityData?user_destination=${cityData.city}&month=${cityData.month}`;
      const response = await axios.get(apiEndpoint);

      setCityData({
        ...cityData,
        lat: response.data.lat,
        lon: response.data.lon,
        attractions: response.data.attractions,
        restaurants: response.data.restaurants,
        typicalWeather: response.data.typical_weather,
        upcomingWeather: response.data.upcoming_weather,
        mapUrl: `https://www.google.com/maps/embed/v1/view?key=${apiKeyGoogle}&center=${response.data.lat},${response.data.lon}&zoom=15`,
      });
    }
  };

  return (
    <Container className="App">
      <Row>
        <Col>
          <InputForm
            city={cityData.city}
            month={cityData.month}
            months={formData.months}
            handleInputChange={handleInputChange}
            handleFormSubmit={handleFormSubmit}
          />
        </Col>
      </Row>
      {cityData.response && (
        <Row>
          <Col>
            <TypicalWeatherCard typicalWeather={cityData.typicalWeather} />
          </Col>
          <Col>
            <WeatherCard upcomingWeather={cityData.upcomingWeather} />
          </Col>
        </Row>
      )}
      {cityData.response && (
        <Row>
          <Col>
            <AttractionCard attractions={cityData.attractions} />
          </Col>
          <Col>
            <RestaurantCard restaurants={cityData.restaurants} />
          </Col>
        </Row>
      )}
      {cityData.response && (
        <Row>
          <Col>
            <Map mapUrl={cityData.mapUrl} />
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default App;
