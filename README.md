# Weather Forecast Dashboard

A simple React single-page application that displays current weather and a 5-day forecast for any searched city using the Open-Meteo API.

## Features

- Search for a city and view live weather data
- Provides city suggestions while typing to help users select the intended location
- Uses IP-based approximate location on the first visit and defaults to Kathmandu if the location cannot be detected
- Display current temperature, condition, humidity, feels-like, wind speed, and pressure
- 5-day weather forecast with daily max/min temperatures
- Search history saved in localStorage (last 5 searches)
- Click a previous search to quickly look up that city again
- Dark mode toggle
- °C / °F temperature unit toggle
- Loading and error states
- Responsive layout for desktop and mobile

## Technologies

- React (functional components)
- JavaScript (ES6+)
- CSS3 (Flexbox/Grid)
- Open-Meteo API (geocoding + weather forecast)

## Setup

```bash
npm install
npm run dev
```

Then open http://localhost:5173 in your browser.


## Known Limitations

- Weather icons are emoji-based, not professional SVG icons
- Search history is limited to 5 recent cities
- Open-Meteo attribution is not displayed in the UI
