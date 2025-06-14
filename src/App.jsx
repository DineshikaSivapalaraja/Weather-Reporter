import { useEffect, useState } from 'react'
import WeatherCard from './components/WeatherCard'
import SearchBar from './components/SearchBar'
import Loader from './components/Loader'
import './App.css'

function App() {
  const [weather, setWeather] = useState(null)
  const [city, setCity] = useState('Colombo')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchWeather = async (cityName) => {
    setLoading(true)
    setError(null)
    try {
      const apiKey = import.meta.env.VITE_WEATHER_API_KEY
      // const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${process.env.VITE_WEATHER_API_KEY}&q=Colombo`)
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}`
      )
      if (!response.ok) throw new Error('City not found')
      const data = await response.json()
      setWeather(data)
      setCity(data.location.name)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchWeather(city)
  }, [])

  const handleSearch = (searchCity) => {
  if (searchCity.trim() === '') {
    setError('Please enter a city name.')
    return
  }
  fetchWeather(searchCity)
}

  // feature to get weather by geolocation--> will use the browser's geolocation API to get the user's current location
  const handleGeoLocation = () => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported')
      return
    }
    setLoading(true)
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        fetchWeather(`${latitude},${longitude}`)
      },
      (error) => {
        setError(error.message)
      }
    )
  }

  return (
    <>
    <div>
      <h2>Welcome to Weather Reporter!</h2>
      <h3>Get accurate, Real time Weather</h3>

      <SearchBar
        city={city}
        setCity={setCity}
        onSearch={handleSearch}
        onGeoLocation={handleGeoLocation}
      />

      {loading && <Loader />}

      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      {weather && !loading && !error && <WeatherCard weather={weather} />}
    </div>
    </>
    )
}

export default App
