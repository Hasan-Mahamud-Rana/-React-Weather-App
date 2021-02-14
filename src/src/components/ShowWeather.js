import React, { useState, useEffect } from 'react';

import weatherData from '../api/weather';
import SearchCity from './SearchCity';

import Loader from './Loader';

const ShowWeather = () => {

  const [data, setData] = useState(null)
  const [searchTerm, setSearchTerm] = useState('Dhaka')

  useEffect(() => {

    const getWeatherData = async () => {

      const res = await weatherData.get('/weather', {
        params: {
          q: searchTerm,
          units: 'metric'
        }
      });

      setData(res.data)

    }

    getWeatherData();

  }, [searchTerm])

  return (
    <>
      <SearchCity setSearchTerm={setSearchTerm} />
      {data ? data.main.temp : <Loader />}
    </>
  )

}

export default ShowWeather;
