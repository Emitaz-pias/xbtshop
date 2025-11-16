import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Typography,
  Stack,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../images/logo.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const menuItems = [
    "About us",
    "Working with Us",
    "Solutions",
    "Contacts",
    "Cookie Policy",
  ];

  const drawer = (
    <Box sx={{ width: 250, p: 2 }}>
      <List>
        {menuItems.map((item, i) => (
          <ListItem
            key={i}
            button
            sx={{
              "&:hover .MuiListItemText-primary": { color: "#3ba4ff" },
            }}
          >
            <ListItemText
              primary={item}
              primaryTypographyProps={{
                fontSize: "0.95rem",
                color: "#113264",
                fontWeight: 500,
              }}
            />
          </ListItem>
        ))}
        <Button
          fullWidth
          variant="contained"
          sx={{
            mt: 2,
            backgroundColor: "#59c12e",
            color: "#fff",
            fontWeight: 600,
            "&:hover": { backgroundColor: "#4ca726" },
          }}
        >
          Become an Agent
        </Button>
      </List>
    </Box>
  );

  return (
    <AppBar
      position="static"        
      sx={{
        backgroundColor: "#113264",
        boxShadow: "none",
        py: 1,       
        
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box component="img" src={logo} alt="logo" sx={{ height:20 }} />

        {/* Desktop Menu */}
        <Stack
        
          direction="row"
          spacing={4}
          sx={{
            alignItems: "center",
            display: { xs: "none", md: "flex" },
          
          }}
        >
          {menuItems.map((item, index) => (
            <Typography
              key={index}
              variant="body2"
              sx={{
                color: "#d0d5e2",
                cursor: "pointer",
                "&:hover": { color: "#3ba4ff" },
              }}
            >
              {item}
            </Typography>
          ))}

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#59c12e",
              color: "#fff",
              px: 3,
              fontWeight: 600,
              "&:hover": { backgroundColor: "#4ca726" },
            }}
          >
            Become an Agent
          </Button>
        </Stack>

        {/* Mobile Menu Icon */}
        <IconButton
          sx={{ display: { xs: "block", md: "none" }, color: "#fff" }}
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
