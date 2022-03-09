import React from 'react'
import { Button } from 'semantic-ui-react'
import TimeStamp from './TimeStamp'
import '../App.css'

const Weather = ({ weatherData }) => {
  const refresh = () => {
    window.location.reload()
  }
  const { name, main, sys, weather } = weatherData
  return (
    <div className="main">
      <div className="top">
        <div className="header flex">
          {name}
          <Button
            className="button"
            inverted
            color="blue"
            circular
            icon="refresh"
            onClick={refresh}
          />
        </div>

        <TimeStamp />
        <div className="flex">
          <p className="sunrise-sunset">
            Sunrise: {new Date(sys.sunrise * 1000).toLocaleTimeString('fr-FR')}
          </p>
          <p className="sunrise-sunset">
            Sunset: {new Date(sys.sunset * 1000).toLocaleTimeString('fr-FR')}
          </p>
        </div>
        <p className="description">Description: {weather[0].description}</p>
        <div className="flex">
          <p className="temp">Temperature: {main.temp} &deg;C</p>
          <p className="temp">Humidity: {weatherData.main.humidity} %</p>
        </div>
      </div>
    </div>
  )
}

export default Weather
