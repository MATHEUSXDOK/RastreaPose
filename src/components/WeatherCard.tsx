import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import "../styles/global.css"; // importa o global.css

interface WeatherCardProps {
  city: string;
  temp: number;
  description: string;
  humidity: number;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ city, temp, description, humidity }) => {
  return (
    <Card className="weather-card">
      <CardContent>
        <Typography className="city">{city}</Typography>
        <Typography className="temp">{temp}°C</Typography>
        <Typography className="description">{description}</Typography>
        <Typography className="humidity">{humidity}💧</Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
