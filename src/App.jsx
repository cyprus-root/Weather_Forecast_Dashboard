import './App.css'

function App() {
  return (
    <div className="container">

      <header className="header">
        <h1 className="header_title">Weather Forecast Dashboard</h1>
        <div className="header_controls">
          <button className="toggle_btn">°C / °F</button>
          <button className="toggle_btn">Dark Mode</button>
        </div>
      </header>

      <div className="search_container">
        <input
          className="search_input"
          type="text"
          placeholder="Search for a city..."
        />
        <button className="search_btn">Search</button>
      </div>

      <div className="history_container">
        <h3 className="history_title">Recent Searches</h3>
        <div className="history_list"></div>
      </div>

      <div className="weather_container">
        <p className="state_message">Search for a city to see the weather</p>
      </div>

      <div className="forecast_container">
        <h3 className="forecast_title">5-Day Forecast</h3>
        <div className="forecast_list"></div>
      </div>

    </div>
  )
}

export default App
