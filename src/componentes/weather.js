import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = ({ capital }) => {
  const [dataWeather, setDataWeather] = useState({})
  const api_Key = process.env.REACT_APP_API_KEY

  useEffect(() => {
    console.log('Effect');
    axios.get(`http://api.weatherstack.com/current?access_key=${api_Key}&query=${capital}`)
      .then(response => {
        console.log('Then');
        const { temperature, weather_icons, wind_speed, wind_dir } = response.data.current
        setDataWeather({ temperature, weather_icons, wind_speed, wind_dir })
      })
  }, [api_Key, capital])

  return (
    <div>
      <h3>Weather in {capital}</h3>
      <div>
        <b>Temperature: </b> {dataWeather.temperature} celcius
      </div>
      <img src={dataWeather.weather_icons} alt="" />
      <div>
        <b>Wind: </b> {dataWeather.wind_speed} direction {dataWeather.wind_dir}
      </div>
    </div>
  )
}

export default Weather