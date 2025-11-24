import React, { useState } from "react";
import WeatherCard from "../components/WeatherCard";
import { getWeatherByCity } from "../services/weatherService";
import { useSearchHistory } from "../hooks/useSearchHistory";

const Home: React.FC = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<any>(null);
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
    } catch (err: any) {
      if (err.response && err.response.status === 404) {
        setError("Cidade não encontrada, verifique o nome e tente novamente.");
      } else {
        setError("Não foi possível obter o clima. Tente novamente mais tarde.");
      }
      setWeather(null);
    }
  };

  return (
    <div className="pageContainer homeContainer">

      {/* FORM para permitir Enter */}
      <form
        className="searchBox"
        onSubmit={(e) => {
          e.preventDefault(); // evita reload
          handleSearch();
        }}
      >
        <input
          type="text"
          placeholder="Digite a cidade"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>

      {error && <p className="error-message">{error}</p>}

      {weather && (
        <WeatherCard
          city={weather.city}
          temp={weather.temp}
          description={weather.description}
          humidity={weather.humidity}
        />
      )}

      {history.length > 0 && (
        <div className="history">
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
