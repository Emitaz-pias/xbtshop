// src/components/HeroSection/HeroSection.js
import React from "react";
import { Box, Typography, Button ,Stack } from "@mui/material";
import heroImg from "../../images/hero-player.png";
import mobcash from "../../images/icon-mobileapp.svg";
import web from "../../images/icon-webepos.svg";
import shop from "../../images/icon-betshop.svg";

const HeroSection = () => {
  const apps = [
    { img: mobcash, label: "Mobcash app" },
    { img: web, label: "Web epos" },
    { img: shop, label: "Betshop" },
  ];

  return (
    <Box
      sx={{
        maxWidthwidth: "100%",
        minHeight: "90vh",
        backgroundColor: "#0a1a3b",
        backgroundImage: `url(${heroImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right center",
        backgroundSize: "contain",
        display: "flex",
        alignItems: "center",
        px: { xs: 2, md: 10 },
        color: "#fff",
      }}
    >
      <Box sx={{ maxWidth: "550px" }}>
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, lineHeight: 1.2 }}>
          Make money <br /> with{" "}
          <Typography
            component="span"
            variant="h3"
            sx={{ color: "#3ba4ff", fontWeight: 800 }}
          >
            1xBet
          </Typography>
        </Typography>

        <Typography variant="body1" sx={{ mb: 4, color: "#d0d5e2" }}>
          Join the agent program of 1xBet — the world leader in the betting
          industry — and get a new source of income.
        </Typography>

        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#59c12e",
              color: "#fff",
              fontWeight: 600,
              "&:hover": { backgroundColor: "#4ca726" },
            }}
          >
            Become an Agent
          </Button>

          <Button
            variant="outlined"
            sx={{
              borderColor: "#3ba4ff",
              color: "#3ba4ff",
              fontWeight: 600,
              "&:hover": { backgroundColor: "#3ba4ff", color: "#fff" },
            }}
          >
            How does it work?
          </Button>
        </Stack>

        <Stack direction="row" spacing={6} sx={{ mt: 6 }}>
          {apps.map((item, i) => (
            <Stack key={i} sx={{borderRadius:'1em',backgroundColor:'white',color:'blue'}} alignItems="center" justifyContent={'center'} padding={'1em'} spacing={1}>
              <Box component="img" src={item.img} alt={item.label} sx={{ maxWidth: 40, filter: 'brightness(0) saturate(100%) invert(35%) sepia(50%) saturate(1000%) hue-rotate(190deg) brightness(90%) contrast(85%)' }} />
              <Typography sx={{ fontSize: "14px", color: "#6b95ffff" }}>
                {item.label}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};
export default HeroSection;
