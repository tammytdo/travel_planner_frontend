import "./App.css";
import React, { useState } from "react";
import axios from "axios";

import sampleResponse from "./sampleResponse.json";
import InputForm from "./components/InputForm/InputForm";
import TypicalWeatherCard from "./components/Weather/TypicalWeatherCard";
import WeatherCard from "./components/Weather/WeatherCard";
import AttractionCard from "./components/Attractions/AttractionCard";
import RestaurantCard from "./components/Restaurants/RestaurantCard";

function App() {
  // edit name from userFormData to cityData
  const [userFormData, setUserFormData] = useState({
    // city: "",
    // month: "",
    city: "Seattle", // Seattle for testing
    month: "January", // January for testing
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
    e.preventDefault();

    const { name, value } = e.target;
    setUserFormData({
      ...userFormData,
      [name]: value,
    });
  };

  // testing
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if (userFormData.city && userFormData.month) {
        // Instead of making an actual API call, use the imported sampleResponse
        setUserFormData({
          ...userFormData,
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
  //     if (userFormData.city && userFormData.month) {
  //       const apiEndpoint = `http://localhost:5000/getCityData?user_destination=${userFormData.city}&month=${userFormData.month}`;

  //       const response = await axios.get(apiEndpoint);

  //       setUserFormData({
  //         ...userFormData,
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
        city={userFormData.city}
        month={userFormData.month}
        months={userFormData.months}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
      />

      {userFormData.response && (
        <div>
          <TypicalWeatherCard typicalWeather={userFormData.typicalWeather} />
          <WeatherCard upcomingWeather={userFormData.upcomingWeather} />
          <AttractionCard attractions={userFormData.attractions} />
          <RestaurantCard restaurants={userFormData.restaurants} />
        </div>
      )}
    </div>
  );
}

export default App;
