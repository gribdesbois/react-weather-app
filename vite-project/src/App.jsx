import { useEffect, useState } from 'react'

import './App.css'
const { VITE_API_KEY } = import.meta.env

function App() {
  const [lat, setLat] = useState([])
  const [long, setLong] = useState([])

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
  }, [lat, long])

  console.log('Latitude is:', lat)
  console.log('Longitude is:', long)
  return <div className="App"></div>
}

export default App
