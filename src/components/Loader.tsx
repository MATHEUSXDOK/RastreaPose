import React from "react";
import { CircularProgress, Box } from "@mui/material";

const Loader: React.FC = () => (
  <Box display="flex" justifyContent="center" marginTop="20px">
    <CircularProgress />
  </Box>
);

export default Loader;
