import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import "./styles/global.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="menuContainer">
        <AppBar
          position="static"
          color="transparent"
          elevation={0}
          sx={{
            borderRadius: "12px",
            width: "480px",
            padding: "0 25px",
            backgroundColor: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(6px)",
            border: "1px solid rgba(255,255,255,0.25)",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
          }}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "center", gap: "30px", minHeight: "55px" }}>
            <Link to="/" className="appTitle">RastreaPose</Link>
            <div className="navLinks">
              <Link to="/sobre">Sobre</Link>
              <Link to="/contato">Contato</Link>
            </div>
          </Toolbar>
        </AppBar>
      </div>
      <div className="pageWrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
