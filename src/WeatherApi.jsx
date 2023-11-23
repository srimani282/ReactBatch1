
import React, { useState } from 'react';

const WeatherApi = () => {
  const [cityName, setCityName] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=78989872e7fd37cf7488c5b7a5012ad4`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleCityChange = (event) => {
    setCityName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter City Name:
          <input type="text" value={cityName} onChange={handleCityChange} />
        </label>
        <button type="submit">Get Weather</button>
      </form>

      {weatherData ? (
        <div>
          <h2>{weatherData.name}, {weatherData.sys.country}</h2>
          <p>Temperature: {weatherData.main.temp} °C</p>
          {/* Add more information as needed */}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default WeatherApi;
