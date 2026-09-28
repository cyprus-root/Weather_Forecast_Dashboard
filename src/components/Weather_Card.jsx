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

function Weather_Card({ data, unit }) {
  const { name, country, current } = data
  const weatherInfo = weatherCodeMap[current.weather_code] || { icon: '❓', label: 'Unknown' }

  const convertTemp = (temp) => {
    if (unit === 'F') {
      return Math.round((temp * 9 / 5) + 32)
    }
    return Math.round(temp)
  }

  return (
    <div className="weather_card">
      <div className="weather_main">
        <div className="weather_icon">{weatherInfo.icon}</div>
        <div>
          <div className="weather_city">{name}, {country}</div>
          <div className="weather_temp">{convertTemp(current.temperature_2m)}°{unit}</div>
          <div className="weather_condition">{weatherInfo.label}</div>
        </div>
      </div>
      <div className="weather_details">
        <div className="detail_item">
          <span className="detail_label">Humidity</span>
          <span>{current.relative_humidity_2m}%</span>
        </div>
        <div className="detail_item">
          <span className="detail_label">Feels Like</span>
          <span>{convertTemp(current.apparent_temperature)}°{unit}</span>
        </div>
        <div className="detail_item">
          <span className="detail_label">Wind Speed</span>
          <span>{current.wind_speed_10m} km/h</span>
        </div>
        <div className="detail_item">
          <span className="detail_label">Pressure</span>
          <span>{current.surface_pressure} hPa</span>
        </div>
      </div>
    </div>
  )
}

export default Weather_Card
