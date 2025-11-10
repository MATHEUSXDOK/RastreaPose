import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import "../styles/global.css"; // importa o global.css

interface WeatherCardProps {
  city: string;
  temp: number;
  description: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ city, temp, description }) => {
  return (
    <Card className="weather-card">
      <CardContent>
        <Typography className="city">{city}</Typography>
        <Typography className="temp">{temp}°C</Typography>
        <Typography className="description">{description}</Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
