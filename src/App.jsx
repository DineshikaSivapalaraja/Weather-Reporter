import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchWeather = async() => {
      setLoading(true)
      try {
        const apiKey = import.meta.env.VITE_WEATHER_API_KEY
        // const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${process.env.VITE_WEATHER_API_KEY}&q=Colombo`)
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Colombo`)
        if (!response.ok) throw new Error('Network response was not ok')
        const data = await response.json()
        setWeather(data)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    fetchWeather()
  }, [])
  return (
    <>
    <div>
      <h3>Welcome to Weather Reporter!</h3>
      <h5>Get accurate, Real time Weather</h5>
      <h4>Weather in Colombo</h4>
      {loading && <p>Loading..</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weather && (
        <div>
          <p>Local Time: {weather.location.localtime}</p>
          <p>Temperature: {weather.current.temp_c}°C</p>
          <p>Feels Like: {weather.current.feelslike_c}°C</p>
          <p>Weather Condition: {weather.current.condition.text}</p>
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
