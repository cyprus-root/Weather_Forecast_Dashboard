# Weather Forecast Dashboard

A simple React single-page application that displays current weather and a 5-day forecast for any searched city using the Open-Meteo API.

## Features

- Search for a city and view live weather data
- Display current temperature, condition, humidity, feels-like, wind speed, and pressure
- 5-day weather forecast with daily max/min temperatures
- Search history saved in localStorage (last 5 searches)
- Click a previous search to quickly look up that city again
- Dark mode toggle
- °C / °F temperature unit toggle
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

## Screenshots

Screenshots will be added here after the application is fully tested.

## Known Limitations

- Weather icons are emoji-based, not professional SVG icons
- Search history is limited to 5 recent cities
- No geolocation support (city search only)
- Open-Meteo attribution is not displayed in the UI
