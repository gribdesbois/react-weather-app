import React from 'react'
import { Card } from 'semantic-ui-react'

const Weather = ({ weatherData }) => {
  const { name, main, sys, weather } = weatherData
  return (
    <Card>
      <Card.Content>
        <Card.Header className="header">{name}</Card.Header>
        <p>Temperature: {main.temp}</p>
        <p>Sunrise: {sys.sunrise}</p>
        <p>Sunset: {sys.sunset}</p>
        <p>Description: {weather[0].description}</p>
      </Card.Content>
    </Card>
  )
}

export default Weather
