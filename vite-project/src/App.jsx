import { useEffect, useState } from 'react'
import axios from 'axios'

import './App.css'
import Weather from './components/Weather'
const { VITE_API_KEY, VITE_API_URL } = import.meta.env

function App() {
  const [lat, setLat] = useState([])
  const [long, setLong] = useState([])
  const [data, setData] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  const getWeather = async () => {
    const url = `https://${VITE_API_URL}?lat=${lat}&lon=${long}&appid=${VITE_API_KEY}&units=metric&lang=en`

    try {
      const res = await axios.get(url)
      setData(res.data)
      console.log(res.data)
      setIsLoaded(true)
      setHasError(false)
    } catch (err) {
      console.warn(`ERROR(${err?.code}): ${err?.message}`)
      setHasError(true)
    }
  }

  useEffect(async () => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    }
    function error(err) {
      if (err) {
        console.warn(`ERROR(${err?.code}): ${err?.message}`)
      }
      return
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLat(position.coords.latitude)
        setLong(position.coords.longitude)
      },
      error(),
      options
    )
    if (lat && long) {
      try {
        await getWeather()
      } catch (err) {
        setHasError(true)
      }
    }
  }, [lat, long])

  if (hasError) return <div>Error ... </div>
  if (!isLoaded) return <div>Loading...</div>
  console.log('Latitude is:', lat)
  console.log('Longitude is:', long)
  if (isLoaded && !hasError) {
    return (
      <div className="App">
        <Weather weatherData={data} />
      </div>
    )
  }
}

export default App
