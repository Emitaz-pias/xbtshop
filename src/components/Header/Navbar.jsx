import React from "react";
import { AppBar, Toolbar, Box, Button, Typography, Stack } from "@mui/material";
import logo from "../../images/logo.png";

const Navbar = () => {
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
        <Box component="img" src={logo} alt="logo" sx={{ height: 40 }} />

        <Stack direction="row" spacing={4} sx={{ alignItems: "center" }}>
          {["About us", "Working with Us", "Solutions", "Contacts", "Cookie Policy"].map(
            (item, index) => (
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
            )
          )}
        </Stack>

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
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
