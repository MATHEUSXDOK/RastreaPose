import axios from "axios";

const API_KEY = "85f61eac902c56086e75f16d3ef0b913";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const getWeatherByCity = async (city: string) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric",
        lang: "pt_br",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar clima:", error);
    throw error;
  }
};
