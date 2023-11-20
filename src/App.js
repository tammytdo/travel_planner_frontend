import "./App.css";
import React, { useState } from "react";
import axios from "axios";

import sampleResponse from "./sampleResponse.json";
import InputForm from "./components/InputForm/InputForm";
import TypicalWeatherCard from "./components/Weather/TypicalWeatherCard";
import WeatherCard from "./components/Weather/WeatherCard";
// import AttractionCard from './components/AttractionCards/AttractionCard';
import RestaurantCard from './components/Restaurants/RestaurantCard';

function App() {
  // edit name from userFormData to cityData
  const [userFormData, setUserFormData] = useState({
    city: "" || "Seattle", // Seattle for testing
    month: "" || "January", // January for testing
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
    typicalWeather: "" || "Sample typical weater", // Sample for testing
    attractions: [],
    // restaurants: [],
    restaurants: sampleResponse.restaurants, // Sample for testing
    // upcomingWeather: []
    upcomingWeather: sampleResponse.upcoming_weather // Sample for testing
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
          typicalWeather: sampleResponse.typicalWeather,
          upcomingWeather: sampleResponse.upcomingWeather,
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
  //         typicalWeather: response.data.typicalWeather,
  //         upcomingWeather: response.data.upcomingWeather,
  //       });
  //     } else {
  //       console.error("City and month are required");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // console.log("sampleResponse.upcoming_weather:", sampleResponse.upcoming_weather);

  return (
    <div className="App">
      {/* pass props? */}
      {/* <InputForm userFormData={userFormData} /> */}
      <TypicalWeatherCard typicalWeather={userFormData.typicalWeather} />
      <WeatherCard upcomingWeather={userFormData.upcomingWeather} />

      {/* <AttractionsCard/> */}
      <RestaurantCard restaurants={userFormData.restaurants}/>
    </div>
  );
}

export default App;
