import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import sampleResponse from "./sampleResponse.json"; // for testing
import InputForm from "./components/InputForm/InputForm";
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
    // city: "",
    city: "Seattle", // Seattle for testing
    month: "",
    // month: "Select a month", // January for testing
    lat: "",
    lon: "",
    response: {},
    errorMsg: "",
    typicalWeather: "",
    attractions: [],
    restaurants: [],
    upcomingWeather: [],
    mapUrl: "",
    // typicalWeather: sampleResponse.typical_weather, // Sample for testing
    // upcomingWeather: sampleResponse.upcoming_weather, // Sample for testing
    // attractions: sampleResponse.attractions, // Sample for testing
    // restaurants: sampleResponse.restaurants, // Sample for testing
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCityData({
      ...cityData,
      [name]: value,
    });
  };

  // testing
  // const handleFormSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     if (cityData.city && cityData.month) {
  //       // Instead of making an actual API call, use the imported sampleResponse
  //       setCityData({
  //         ...cityData,
  //         response: sampleResponse,
  //         lat: sampleResponse.lat,
  //         lng: sampleResponse.lng,
  //         attractions: sampleResponse.attractions,
  //         restaurants: sampleResponse.restaurants,
  //         typicalWeather: sampleResponse.typical_weather,
  //         upcomingWeather: sampleResponse.upcoming_weather,
  //         mapUrl: `https://www.google.com/maps/embed/v1/view?key=${apiKeyGoogle}&center=${sampleResponse.lat},${sampleResponse.lng}&zoom=15`
  //       });
  //     } else {
  //       console.error("City and month are required");
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  // Live API call
  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  // Live API call
  const fetchData = async () => {
    try {
      if (cityData.city && cityData.month) {
        const apiEndpoint = `http://localhost:5000/getCityData?user_destination=${cityData.city}&month=${cityData.month}`;

        const response = await axios.get(apiEndpoint);
        console.log('response lat', response.data.lat)

        setCityData({
          ...cityData,
          lat: response.data.lat,
          lng: response.data.lng,
          attractions: response.data.attractions,
          restaurants: response.data.restaurants,
          typicalWeather: response.data.typical_weather,
          upcomingWeather: response.data.upcoming_weather,
          mapUrl: `https://www.google.com/maps/embed/v1/view?key=${apiKeyGoogle}&center=${response.data.lat},${response.data.lng}&zoom=15`,
        });
      } else {
        console.error("City and month are required");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="App">
      <InputForm
        city={cityData.city}
        month={cityData.month}
        months={formData.months}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
      />

      {cityData.response && (
        <div>
          <TypicalWeatherCard typicalWeather={cityData.typicalWeather} />
          <WeatherCard upcomingWeather={cityData.upcomingWeather} />
          {/* edit to get attraction description and image */}
          <AttractionCard attractions={cityData.attractions} />
          {/* edit to get top 10 restaurants within 30 miles and image */}
          <RestaurantCard restaurants={cityData.restaurants} />
          <Map mapUrl={cityData.mapUrl} />
        </div>
      )}
    </div>
  );
}

export default App;
