import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import WeatherCard from "../components/WeatherCard";
import Loader from "../components/Loader";
import { getWeatherByCity } from "../services/weatherService";

const Home: React.FC = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!city) return;
    setLoading(true);
    setError("");
    try {
      const data = await getWeatherByCity(city);
      setWeather({
        city: data.name,
        temp: data.main.temp,
        description: data.weather[0].description,
      });
    } catch (err: any) {
      if (err.response && err.response.status === 404) {
        setError("Cidade não encontrada, verifique o nome e tente novamente.");
      } else {
        setError("Não foi possível obter o clima. Tente novamente mais tarde.");
      }
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap="20px">
      <Box display="flex" gap="10px" width="100%" justifyContent="center">
        <TextField
          label="Digite a cidade"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Button variant="contained" onClick={handleSearch}>
          Buscar
        </Button>
      </Box>

      {loading && <Loader />}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {weather && (
        <WeatherCard
          city={weather.city}
          temp={weather.temp}
          description={weather.description}
        />
      )}
    </Box>
  );
};

export default Home;
