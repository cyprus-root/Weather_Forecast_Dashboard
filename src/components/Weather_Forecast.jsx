const weatherCodeMap = {
  0: { icon: '☀️', label: 'Clear Sky' },
  1: { icon: '🌤️', label: 'Mainly Clear' },
  2: { icon: '⛅', label: 'Partly Cloudy' },
  3: { icon: '☁️', label: 'Overcast' },
  45: { icon: '🌫️', label: 'Fog' },
  48: { icon: '🌫️', label: 'Rime Fog' },
  51: { icon: '🌦️', label: 'Light Drizzle' },
  53: { icon: '🌦️', label: 'Drizzle' },
  55: { icon: '🌧️', label: 'Heavy Drizzle' },
  61: { icon: '🌧️', label: 'Light Rain' },
  63: { icon: '🌧️', label: 'Rain' },
  65: { icon: '🌧️', label: 'Heavy Rain' },
  66: { icon: '🌧️', label: 'Freezing Rain' },
  67: { icon: '🌧️', label: 'Heavy Freezing Rain' },
  71: { icon: '🌨️', label: 'Light Snow' },
  73: { icon: '❄️', label: 'Snow' },
  75: { icon: '❄️', label: 'Heavy Snow' },
  77: { icon: '🌨️', label: 'Snow Grains' },
  80: { icon: '🌦️', label: 'Light Showers' },
  81: { icon: '🌧️', label: 'Showers' },
  82: { icon: '⛈️', label: 'Heavy Showers' },
  85: { icon: '🌨️', label: 'Snow Showers' },
  86: { icon: '🌨️', label: 'Heavy Snow Showers' },
  95: { icon: '⛈️', label: 'Thunderstorm' },
  96: { icon: '⛈️', label: 'Thunderstorm with Hail' },
  99: { icon: '⛈️', label: 'Thunderstorm with Heavy Hail' },
}

function Weather_Forecast({ daily }) {
  const formatDate = (dateStr) => {
    const date = new Date(dateStr)
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return `${days[date.getDay()]} ${months[date.getMonth()]} ${date.getDate()}`
  }

  return (
    <div className="forecast_container">
      <h3 className="forecast_title">5-Day Forecast</h3>
      <div className="forecast_list">
        {daily.time.map((time, index) => {
          const weatherInfo = weatherCodeMap[daily.weather_code[index]] || { icon: '❓', label: 'Unknown' }
          return (
            <div key={time} className="forecast_card">
              <div className="forecast_day">{formatDate(time)}</div>
              <div className="forecast_icon">{weatherInfo.icon}</div>
              <div className="forecast_temps">
                <span className="forecast_max">{daily.temperature_2m_max[index]}°</span>
                {' / '}
                <span className="forecast_min">{daily.temperature_2m_min[index]}°</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Weather_Forecast
