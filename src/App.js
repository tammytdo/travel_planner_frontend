import "./App.css";
import React, { useState } from "react";
import axios from "axios";

import sampleResponse from "./sampleResponse.json"; // for testing
import InputForm from "./components/InputForm/InputForm";
import TypicalWeatherCard from "./components/Weather/TypicalWeatherCard";
import WeatherCard from "./components/Weather/WeatherCard";
import AttractionCard from "./components/Attractions/AttractionCard";
import RestaurantCard from "./components/Restaurants/RestaurantCard";
import Map from "./components/Map";

function App() {
  const [cityData, setUserFormData] = useState({
    // city: "",
    // month: "",
    city: "Seattle", // Seattle for testing
    month: "Select a month", // January for testing
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
    response: {},
    errorMsg: "",
    typicalWeather: "",
    attractions: [],
    restaurants: [],
    upcomingWeather: [],
    // typicalWeather: sampleResponse.typical_weather, // Sample for testing
    // upcomingWeather: sampleResponse.upcoming_weather, // Sample for testing
    // attractions: sampleResponse.attractions, // Sample for testing
    // restaurants: sampleResponse.restaurants, // Sample for testing
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserFormData({
      ...cityData,
      [name]: value,
    });
  };

  // testing
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if (cityData.city && cityData.month) {
        // Instead of making an actual API call, use the imported sampleResponse
        setUserFormData({
          ...cityData,
          response: sampleResponse,
          attractions: sampleResponse.attractions,
          restaurants: sampleResponse.restaurants,
          typicalWeather: sampleResponse.typical_weather,
          upcomingWeather: sampleResponse.upcoming_weather,
        });
      } else {
        console.error("City and month are required");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Live API call
  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   fetchData();
  // };

  // Live API call
  // const fetchData = async () => {
  //   try {
  //     if (cityData.city && cityData.month) {
  //       const apiEndpoint = `http://localhost:5000/getCityData?user_destination=${cityData.city}&month=${cityData.month}`;

  //       const response = await axios.get(apiEndpoint);

  //       setUserFormData({
  //         ...cityData,
  //         attractions: response.data.attractions,
  //         restaurants: response.data.restaurants,
  //         typicalWeather: response.data.typical_weather,
  //         upcomingWeather: response.data.upcoming_weather,
  //       });
  //     } else {
  //       console.error("City and month are required");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  return (
    <div className="App">
      <InputForm
        city={cityData.city}
        month={cityData.month}
        months={cityData.months}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
      />

      {cityData.response && (
        <div>
          <TypicalWeatherCard typicalWeather={cityData.typicalWeather} />
          <WeatherCard upcomingWeather={cityData.upcomingWeather} />
          <AttractionCard attractions={cityData.attractions} />
          <RestaurantCard restaurants={cityData.restaurants} />
          {/* <Map /> */}
        </div>
      )}
    </div>
  );
}

export default App;
