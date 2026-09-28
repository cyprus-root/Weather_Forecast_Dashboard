import { useState, useEffect } from 'react'
import './App.css'
import Search_Bar from './components/Search_Bar.jsx'

function App() {
  const [searchCity, setSearchCity] = useState('')
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchWeather = async (city) => {
    setLoading(true)
    setError('')
    setWeatherData(null)

    try {
      // Step 1: Geocoding - convert city name to coordinates
      const geoResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`
      )
      const geoData = await geoResponse.json()

      if (!geoData.results || geoData.results.length === 0) {
        setError('City not found. Please try another city.')
        setLoading(false)
        return
      }

      const { latitude, longitude, name, country } = geoData.results[0]

      // Step 2: Weather forecast - get current weather and 5-day forecast
      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,surface_pressure&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=5`
      )
      const weatherData = await weatherResponse.json()

      setWeatherData({
        name,
        country,
        current: weatherData.current,
        daily: weatherData.daily,
      })
    } catch (err) {
      setError('Failed to fetch weather data. Please check your connection.')
    }

    setLoading(false)
  }

  const handleSearch = (city) => {
    setSearchCity(city)
  }

  useEffect(() => {
    if (searchCity) {
      fetchWeather(searchCity)
    }
  }, [searchCity])

  return (
    <div className="container">

      <header className="header">
        <h1 className="header_title">Weather Forecast Dashboard</h1>
        <div className="header_controls">
          <button className="toggle_btn">°C / °F</button>
          <button className="toggle_btn">Dark Mode</button>
        </div>
      </header>

      <Search_Bar onSearch={handleSearch} />

      <div className="history_container">
        <h3 className="history_title">Recent Searches</h3>
        <div className="history_list"></div>
      </div>

      <div className="weather_container">
        {loading && <p className="state_message">Loading weather data...</p>}
        {error && <p className="state_message error">{error}</p>}
        {!loading && !error && !weatherData && (
          <p className="state_message">Search for a city to see the weather</p>
        )}
        {!loading && !error && weatherData && (
          <div>
            <p className="state_message">Weather data for {weatherData.name}, {weatherData.country}</p>
            <p className="state_message">Temperature: {weatherData.current.temperature_2m}°C</p>
          </div>
        )}
      </div>

      <div className="forecast_container">
        <h3 className="forecast_title">5-Day Forecast</h3>
        <div className="forecast_list"></div>
      </div>

    </div>
  )
}

export default App
