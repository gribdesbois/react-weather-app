import { useEffect, useState } from 'react'
import axios from 'axios'

import './App.css'
const { VITE_API_KEY, VITE_API_URL } = import.meta.env

function App() {
  const [lat, setLat] = useState([])
  const [long, setLong] = useState([])
  const [data, setData] = useState(null)

  const getWeather = async () => {
    const url = `https://${VITE_API_URL}?lat=${lat}&lon=${long}&appid=${VITE_API_KEY}`

    try {
      const res = await axios.get(url)
      setData(res.data)
      console.log(res.data)
    } catch (err) {
      console.warn(`ERROR(${err?.code}): ${err?.message}`)
    }
  }

  useEffect(() => {
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

    getWeather()
  }, [lat, long])

  console.log('Latitude is:', lat)
  console.log('Longitude is:', long)
  return <div className="App"></div>
}

export default App
