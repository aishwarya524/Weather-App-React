import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import '../weather/WeatherScreen.css'

const WeatherScreen = () => {
  const { name } = useParams()

  const [ weatherDetails, setWeatherDetails ] = useState()

  useEffect(() => {
    fetch(`http://api.weatherstack.com/current?access_key=30fb94ae4164aeb63dfdc0cbfa2ddc33&query=${name}`). 
            then((response) => {
              return response.json();
            }).
            then((data) => {
              return data;
            }
    ).then((apiWeatherDetails) => {
        setWeatherDetails(apiWeatherDetails)
        console.log(weatherDetails)
    }).catch((error) => {
      console.log(error)
    })
  }, [])
  return (
    <div>
        <div className='header'>Weather details</div>
        {weatherDetails && 
        <div>
        <div className='weather-image'>
          <img src={weatherDetails.current.weather_icons[0]} alt='flag'/>
        </div>
        <div className='text-container'>
          <div className='text'>{`Temperature : ${weatherDetails.current.temperature} °C`}</div>
          <div className='text'>{`Precipitation : ${weatherDetails.current.precip} %`}</div>
          <div className='text'>{`Wind Speed : ${weatherDetails.current.wind_speed} kmph`}</div>
        </div>
        </div>
        }
    </div>
  )
}

export default WeatherScreen