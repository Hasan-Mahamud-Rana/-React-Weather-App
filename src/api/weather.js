import axios from 'axios';

const weatherData = axios.create({

  baseURL: 'https://community-open-weather-map.p.rapidapi.com',
  headers: {
    'x-rapidapi-key': '6594b9fcfcmsh4aa8c6de69d9948p1c48a9jsn1309d165b0ae',
    'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
  }

});

export default weatherData;