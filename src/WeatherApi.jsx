import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const WeatherApi = () => {
  const [cityName, setCityName] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [searchError, setSearchError] = useState(false);
  const [graphData, setGraphData] = useState([]);
  const [position, setPosition] = useState([0, 0]);

  const mapRef = useRef();

  useEffect(() => {
    fetchData();
  }, [cityName]);

  const fetchData = async () => {
    try {
      // If cityName is empty, display loading message
      if (!cityName) {
        setWeatherData(null);
        setSearchError(false);
        return;
      }

      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=78989872e7fd37cf7488c5b7a5012ad4`);
      if (!response.ok) {
        throw new Error('City not found');
      }

      const data = await response.json();
      setWeatherData(data);
      setSearchError(false);

      const cityCoordinates = [data.coord.lat, data.coord.lon];
      setPosition(cityCoordinates);

      // Center the map on the city coordinates and adjust the zoom level
      mapRef.current.setView(cityCoordinates, 10); // Adjust the zoom level as needed
    } catch (error) {
      console.error('Error fetching data:', error);
      setWeatherData(null);
      setSearchError(true);
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
    <div style={{ display: 'flex' }}>
      {/* Left side - Table */}
      <div style={{ flex: 1, padding: '20px' }}>
        <form onSubmit={handleSubmit}>
          <label>
            Enter City Name:
            <input type="text" value={cityName} onChange={handleCityChange} />
          </label>
          <button type="submit">Get Weather</button>
        </form>

        {searchError ? (
          <div>Search not found. Please check the city name and try again.</div>
        ) : weatherData ? (
          <div>
            <h2>{weatherData.name}, {weatherData.sys.country}</h2>
            <p>Temperature: {weatherData.main.temp} °C</p>

            {/* Additional Information Table */}
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Parameter</TableCell>
                    <TableCell>Value</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Feels Like</TableCell>
                    <TableCell>{weatherData.main.feels_like}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Min Temperature</TableCell>
                    <TableCell>{weatherData.main.temp_min}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Max Temperature</TableCell>
                    <TableCell>{weatherData.main.temp_max}</TableCell>
                  </TableRow>
                  {/* Add more rows for other parameters */}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        ) : (
          // Display "Loading..." when cityName is empty
          cityName ? <div>Loading...</div> : null
        )}
      </div>

      {/* Right side - Map */}
      <div style={{ flex: 1, padding: '20px' }}>
        <div style={{ border: '2px solid #ccc', borderRadius: '5px', overflow: 'hidden' }}>
          <MapContainer center={position} zoom={10} style={{ height: '300px', width: '300%' }} ref={mapRef}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {graphData.map((dataPoint, index) => (
              <Marker key={index} position={[dataPoint.lat, dataPoint.lon]}>
                <Popup>{`Temperature: ${dataPoint.tmp.toFixed(2)} °C`}</Popup>
              </Marker>
            ))}
            {weatherData && (
              <Marker position={position}>
                <Popup>
                  <div>
                    <h3>{weatherData.name}, {weatherData.sys.country}</h3>
                    <p>Min Temperature: {weatherData.main.temp_min} °C</p>
                    <p>Max Temperature: {weatherData.main.temp_max} °C</p>
                  </div>
                </Popup>
              </Marker>
            )}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default WeatherApi;

