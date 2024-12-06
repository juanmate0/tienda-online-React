import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        p: 3.5,
        backgroundColor: "white",
        color: "blue",
        textAlign: "center-right",
        position: "relative",
        bottom: 0,
        width: "100%",
        margin: 0,
        left: 0,
      }}
    >
      <Typography variant="body1" component="div">
        &copy; 2024 Tienda Online - Curso UNRAF
      </Typography>
      <Typography variant="subtitle" component="div">
        Todos los derechos reservados.
      </Typography>
      <Typography variant="subtitle-2" component="div">
        Juan Manera
      </Typography>
    </Box>
  );
}

export default Footer;
