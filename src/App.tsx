import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const App: React.FC = () => {
  return (
    <Router>
      <Box display="flex" justifyContent="center" mt={3}>
        <AppBar position="static" color="primary" elevation={2} style={{ width: "fit-content", borderRadius: "8px" }}>
          <Toolbar style={{ justifyContent: "center", padding: "0 20px", minHeight: 50 }}>
            <Box display="flex" gap="20px" alignItems="center">
              <Typography variant="h6" component={Link} to="/" style={{ color: "white", textDecoration: "none" }}>
                RastreaPose
              </Typography>
              <Button color="inherit" component={Link} to="/">
                Home
              </Button>
              <Button color="inherit" component={Link} to="/about">
                About
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      <Box display="flex" justifyContent="center" mt={5}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Box>
    </Router>
  );
};

export default App;
