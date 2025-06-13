import { useEffect, useState } from 'react'
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
        `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}`
      )
      if (!response.ok) throw new Error('City not found')
      const data = await response.json()
      setWeather(data)
      setCity(data.location.name)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchWeather(city)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (city.trim() === '') return
    fetchWeather(city)
  }

  // feature to get weather by geolocation--> will use the browser's geolocation API to get the user's current location
  const handleGeoLocation = () => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported')
      return
    }
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
      <h3>Welcome to Weather Reporter!</h3>
      <h5>Get accurate, Real time Weather</h5>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={e => setCity(e.target.value)}
          placeholder="Enter city"
        />
        <button type="submit">Search</button>
        <button type="button" onClick={handleGeoLocation}>
          Use My Location
        </button>
      </form>

      {loading && <div className="spinner"></div>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weather && (
        <div>
          <h4>Weather in {weather.location.name}, {weather.location.country}</h4>

          <p>Local Time: {weather.location.localtime}</p>
          <p>Temperature: {weather.current.temp_c}°C</p>
          <p>Feels Like: {weather.current.feelslike_c}°C</p>
          <p>Weather Condition: {weather.current.condition.text}</p>
            <img src={weather.current.condition.icon} alt={weather.current.condition.text} />
          <p>Humidity: {weather.current.humidity}%</p>
          <p>Wind Speed: {weather.current.wind_kph}kph</p>
          <p>Wind Direction: {weather.current.wind_dir}</p>
          <p>UV index: {weather.current.uv}</p>
        </div>
      )}
    </div>
    </>
    )
}

export default App
