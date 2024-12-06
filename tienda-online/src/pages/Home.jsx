import { Box, Typography } from "@mui/material";
import React from "react";

function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh", // Ocupa toda la altura de la pantalla
        textAlign: "center",
      }}
    >
      <Typography variant="h2" gutterBottom>
        TIENDA DE CALZADO DEPORTIVO
      </Typography>
      <img
        src="./tienda-icon.png"
        alt="Tienda Online Logo"
        style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }} // Ajustes de estilo para la imagen
      />
    </Box>
  );
}

export default Home;
