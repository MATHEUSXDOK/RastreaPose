import React from "react";
import { Typography } from "@mui/material";

const About: React.FC = () => {
  return (
    <div className="pageContainer">
      <Typography paragraph>
        RastreaPose é um aplicativo web desenvolvido para consultar o clima de qualquer cidade ao redor do mundo de forma rápida e prática. Ele utiliza a API do OpenWeatherMap para fornecer informações precisas sobre temperatura e condições do céu.
      </Typography>
      <Typography paragraph>
        O objetivo do RastreaPose é oferecer uma ferramenta simples e intuitiva, ideal para quem deseja acompanhar o clima na sua cidade ou em qualquer outro lugar.
      </Typography>
      <Typography paragraph>
        RastreaPose também serve como um projeto de aprendizado, permitindo explorar conceitos de React, TypeScript, consumo de APIs externas e boas práticas de desenvolvimento frontend.
      </Typography>
    </div>
  );
};

export default About;
