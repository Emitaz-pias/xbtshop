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
import CloseIcon from "@mui/icons-material/Close";
import logo from "../../images/logo.png";
import { Link as ScrollLink } from "react-scroll";

const Navbar = ({ onAgentClick }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const menuItems = [
    { title: "About us", href: "why1xbet" },
    { title: "Working with Us", href: "working-with-us" },
    { title: "Solutions", href: "solutions" },
    { title: "Contacts", href: "agent-form-section" },
    { title: "Cookie Policy", href: "cookie-policy", external: true },
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
            {!item.external ? (
              <ScrollLink
                to={item.href}
                smooth={true}
                duration={500}
                style={{ textDecoration: "none", cursor: "pointer" }}
                offset={-70}
                onClick={() => setMobileOpen(false)}
              >
                <ListItemText
                  primary={item.title}
                  primaryTypographyProps={{
                    fontSize: "0.95rem",
                    color: "#113264",
                    fontWeight: 500,
                  }}
                />
              </ScrollLink>
            ) : (
              <ListItemText
                primary={item.title}
                primaryTypographyProps={{
                  fontSize: "0.95rem",
                  color: "#113264",
                  fontWeight: 500,
                }}
              />
            )}
          </ListItem>
        ))}

        <Button
          fullWidth
          variant="contained"
          onClick={() => {
            onAgentClick();
            setMobileOpen(false);
          }}
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
    <AppBar position="static" sx={{ backgroundColor: "#113264", boxShadow: "none", py: 1 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Box component="img" src={logo} alt="logo" sx={{ height: 20 }} />

        {/* Desktop Menu */}
        <Stack
          direction="row"
          spacing={4}
          sx={{ alignItems: "center", display: { xs: "none", md: "flex" } }}
        >
          {menuItems.map((item, index) =>
            !item.external ? (
              <ScrollLink
                key={index}
                to={item.href}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
                style={{ color: "#d0d5e2", cursor: "pointer", textDecoration: "none" }}
              >
                <Typography variant="body2" sx={{ "&:hover": { color: "#3ba4ff" } }}>
                  {item.title}
                </Typography>
              </ScrollLink>
            ) : (
              <Typography
                key={index}
                variant="body2"
                sx={{
                  color: "#d0d5e2",
                  cursor: "pointer",
                  "&:hover": { color: "#3ba4ff" },
                }}
                onClick={() => (window.location.href = "/cookie-policy")}
              >
                {item.title}
              </Typography>
            )
          )}

          <Button
            variant="contained"
            onClick={onAgentClick}
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

        {/* Mobile Animated Icon */}
        <IconButton
          sx={{ display: { xs: "block", md: "none" }, color: mobileOpen ? '#fff' : '#fff', zIndex: 1301 }}
          onClick={handleDrawerToggle}
        >
          <Box sx={{ transition: '0.3s', color: '#000000', transform: mobileOpen ? 'rotate(180deg)' : 'none' }}>
            {mobileOpen ? <CloseIcon sx={{ color: '#000000' }} /> : <MenuIcon sx={{ color: '#fff' }} />}
          </Box>
        </IconButton>
      </Toolbar>

      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
