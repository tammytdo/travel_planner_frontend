// import React, { useEffect } from 'react';

// const MapComponent = () => {
//   useEffect(() => {
//     // Load Google Maps API
//     const script = document.createElement('script');
//     script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCExpuRFhA810ioh648AC0ab53bsbpGeE8&callback=initMap`;
//     script.defer = true;
//     document.head.appendChild(script);

//     window.initMap = () => {
//       // Initialize map centered around Seattle
//       const seattle = { lat: 47.6062, lng: -122.3321 };
//       const map = new window.google.maps.Map(document.getElementById('map'), {
//         center: seattle,
//         zoom: 12,
//       });

//       // Fetch attractions and restaurants data (replace this with your actual API calls)
//       fetchAttractionsData(seattle, map);
//       fetchRestaurantsData(seattle, map);
//     };
//   }, []);

//   const fetchAttractionsData = (location, map) => {
//     // Simulated data for attractions in Seattle
//     const attractions = [
//       { name: 'Space Needle', latitude: 47.6205, longitude: -122.3493 },
//       { name: 'Pike Place Market', latitude: 47.6097, longitude: -122.3422 },
//       // Add more attractions...
//     ];

//     // Display attractions markers
//     attractions.forEach((attraction) => {
//       new window.google.maps.Marker({
//         position: { lat: attraction.latitude, lng: attraction.longitude },
//         map: map,
//         title: attraction.name,
//       });
//     });
//   };

//   const fetchRestaurantsData = (location, map) => {
//     // Simulated data for restaurants in Seattle
//     const restaurants = [
//       { name: 'The Pink Door', latitude: 47.6098, longitude: -122.3421 },
//       { name: 'Serious Pie', latitude: 47.6123, longitude: -122.3405 },
//       // Add more restaurants...
//     ];

//     // Display restaurants markers
//     restaurants.forEach((restaurant) => {
//       new window.google.maps.Marker({
//         position: { lat: restaurant.latitude, lng: restaurant.longitude },
//         map: map,
//         title: restaurant.name,
//       });
//     });
//   };

//   return <div id="map" style={{ height: '400px', width: '100%' }} />;
// };

// export default MapComponent;
