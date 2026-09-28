import { useState, useEffect } from 'react'
import './App.css'
import Search_Bar from './components/Search_Bar.jsx'
import Weather_Card from './components/Weather_Card.jsx'
import Search_History from './components/Search_History.jsx'
import Weather_Forecast from './components/Weather_Forecast.jsx'

function App() {
  const [searchCity, setSearchCity] = useState('')
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [searchHistory, setSearchHistory] = useState(() => {
    const saved = localStorage.getItem('searchHistory')
    return saved ? JSON.parse(saved) : []
  })

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
    setSearchHistory((prev) => {
      const filtered = prev.filter((item) => item.toLowerCase() !== city.toLowerCase())
      const updated = [city, ...filtered].slice(0, 5)
      return updated
    })
  }

  const handleSelectHistory = (city) => {
    setSearchCity(city)
  }

  useEffect(() => {
    if (searchCity) {
      fetchWeather(searchCity)
    }
  }, [searchCity])

  useEffect(() => {
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory))
  }, [searchHistory])

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

      <Search_History history={searchHistory} onSelect={handleSelectHistory} />

      <div className="weather_container">
        {loading && (
          <div className="state_loading">
            <p className="state_message">Loading weather data...</p>
          </div>
        )}
        {error && (
          <div className="state_error">
            <p className="state_message error">{error}</p>
          </div>
        )}
        {!loading && !error && !weatherData && (
          <div className="state_initial">
            <p className="state_message">Search for a city to see the weather</p>
          </div>
        )}
        {!loading && !error && weatherData && (
          <Weather_Card data={weatherData} />
        )}
      </div>

      {weatherData && <Weather_Forecast daily={weatherData.daily} />}

    </div>
  )
}

export default App
