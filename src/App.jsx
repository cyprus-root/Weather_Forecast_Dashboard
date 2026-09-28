import { useState } from 'react'
import './App.css'
import Search_Bar from './components/Search_Bar.jsx'

function App() {
  const [searchCity, setSearchCity] = useState('')

  const handleSearch = (city) => {
    setSearchCity(city)
  }

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
        <p className="state_message">
          {searchCity ? `Searching for: ${searchCity}` : 'Search for a city to see the weather'}
        </p>
      </div>

      <div className="forecast_container">
        <h3 className="forecast_title">5-Day Forecast</h3>
        <div className="forecast_list"></div>
      </div>

    </div>
  )
}

export default App
