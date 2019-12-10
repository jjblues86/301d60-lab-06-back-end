'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;

// Load ENV
require('dotenv').config();

app.use(cors());

//Routes
app.get('/', (request, response) => {
  response.send('What up, fam!');
});

app.get('/location', getLocation);
app.get('/weather', getWeather);

//Handlers
function getLocation(request, response){
  const locationData = searchLatToLng(request.query.data || 'Lynnwood, WA, USA');
  response.send(locationData);
}

function getWeather(request, response){
  const weatherData = searchWeather(request.query.data || 'Lynnwood, WA, USA');
  response.send(weatherData);

}

//Constructors
function Location(location){
  this.formatted_address = location.formatted_address;
  this.latitude = location.geometry.location.lat;
  this.longitude = location.geometry.location.lng;
}

//Search for data
function searchLatToLng(query){
  const geoData = require('./data/geo.json');
  const location = new Location(geoData.results[0]);
  return location;
}

function searchWeather(query){{
  let darkSkyData = require('./data/darksky.json');
  console.log(darkSkyData);
}}

app.listen(PORT, () => {
  console.log(`app running on PORT: ${PORT}`);
});
