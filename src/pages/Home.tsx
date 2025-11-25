import React, { useState } from "react";
import WeatherCard from "../components/WeatherCard";
import { getWeatherByCity } from "../services/weatherService";
import { useSearchHistory } from "../hooks/useSearchHistory";
import type { WeatherData } from "../types/WeatherData";
import axios from "axios";

const Home: React.FC = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState("");
  const { history, addToHistory } = useSearchHistory();

  const handleSearch = async () => {
    if (!city) return;
    setError("");

    try {
      const data = await getWeatherByCity(city);
      setWeather({
        city: data.name,
        temp: data.main.temp,
        description: data.weather[0].description,
        humidity: data.main.humidity,
      });
      addToHistory(city);
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 404) {
          setError("Cidade não encontrada, verifique o nome e tente novamente.");
        } else {
          setError("Não foi possível obter o clima. Tente novamente mais tarde.");
        }
      } else {
        setError("Erro inesperado.");
      }
      setWeather(null);
    }
  };

  return (
    <div className="pageContainer homeContainer">
      <div className="searchBox">
        <input
          type="text"
          placeholder="Digite a cidade"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>

      {error && <p className="error-message">{error}</p>}

      {weather && (
        <div className="weather-display" style={{ width: "100%", marginTop: "15px" }}>
          <WeatherCard
            city={weather.city}
            temp={weather.temp}
            description={weather.description}
            humidity={weather.humidity}
          />
        </div>
      )}

      {history.length > 0 && (
        <div className="history" style={{ marginTop: "15px" }}>
          {history.map((item) => (
            <button
              key={item}
              onClick={() => {
                setCity(item);
                handleSearch();
              }}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
