function WeatherCard({ weather }) {
    return (
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
    )
}

export default WeatherCard
