require('dotenv').config();
const express = require('express');
const cors = require('cors');
const weather = require('./assets/weather.json');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

app.get('/weather', handleWeather);
app.use('*', (request, response) => response.status(404).send('page not found'));

function handleWeather(request, response) {
  let { searchQuery } = request.query;

  if (!searchQuery) {
    return response.status(400).send('Missing searchQuery parameter');
  }

  const city = weather.find(city => city.city_name.toLowerCase() === searchQuery.toLowerCase());

  if (!city) {
    return response.status(404).send('City not found');
  }

  try {
    const weatherArray = city.data.map(day => new Forecast(day));
    response.status(200).send(weatherArray);
  } catch (error) {
    errorHandler(error, response);
  }
}

function Forecast(day) {
  this.date = day.valid_date;
  this.description = day.weather.description;
}

function errorHandler(error, response) {
  console.error(error);
  response.status(500).send('Something went wrong');
}

app.listen(PORT, () => console.log(`listening on ${PORT}`));
