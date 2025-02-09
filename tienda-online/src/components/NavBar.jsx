import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { blueGrey, indigo, lightBlue, teal } from '@mui/material/colors';
import {
  AppBar,
  Badge,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Usamos el contexto de autenticación
import { useCart } from "../context/CartContext";

function NavBar() {
  const { cartItems } = useCart();
  const { user, logout } = useAuth(); // Obtenemos el usuario logueado
  const [anchorEl, setAnchorEl] = useState(null);
  const col1 = teal[600];
  const col2 = indigo[400];

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget); // Establece el ancla para el menú
  };

  const handleMenuClose = () => {
    setAnchorEl(null); // Cierra el menú
  };

  const handleLogout = () => {
    logout(); // Cierra sesión
    handleMenuClose(); // Cierra el menú al cerrar sesión
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          ¡Bienvenido! Registre su compra
        </Typography>
        <Button color={col1} component={Link} to="/">
          Inicio
        </Button>
        <Button color={col1} component={Link} to="/productos">
          Productos
        </Button>
        <Button color={col1} component={Link} to="/carrito">
          <Badge badgeContent={cartItems.length} color={col1}>
            Carrito
          </Badge>
        </Button>

        {/* Mostrar el ícono de cuenta solo si el usuario está logueado */}
        <IconButton color={col2} onClick={handleMenuOpen}>
          <AccountCircleIcon />
        </IconButton>

        {/* Menú desplegable */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)} // Condición para abrir el menú
          onClose={handleMenuClose} // Cerrar el menú
        >
          {user ? (
            <>
              {/* Si el usuario está logueado, mostrar su nombre y "logueado" */}
              <MenuItem onClick={handleMenuClose}>
                Hola, {user.username}
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>Logueado</MenuItem>
              <MenuItem onClick={handleLogout}>Cerrar sesión</MenuItem>
            </>
          ) : (
            // Si no está logueado, mostrar las opciones de login y registro
            <>
              <MenuItem component={Link} to="/login" onClick={handleMenuClose}>
                Iniciar Sesión
              </MenuItem>
              <MenuItem
                component={Link}
                to="/register"
                onClick={handleMenuClose}
              >
                Registrarse
              </MenuItem>
            </>
          )}
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
