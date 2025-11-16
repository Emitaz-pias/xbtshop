import React, { useState } from "react";
import { Box, Typography, Button, Stack, Modal } from "@mui/material";
import heroImg from "../../images/hero-player.png";
import mobcash from "../../images/icon-mobileapp.svg";
import web from "../../images/icon-webepos.svg";
import shop from "../../images/icon-betshop.svg";
import AgentFormSection from "../AgentFormSection/AgentFormSection";

const HeroSection = () => {

  const [open, setOpen] = useState(false);

  const apps = [
    { img: mobcash, label: "Mobcash app" },
    { img: web, label: "Web epos" },
    { img: shop, label: "Betshop" },
  ];

  return (
    <>
      <Box
        sx={{
          maxWidth: "100%",
          minHeight: "90vh",
          backgroundColor: "#0a1a3b",
          backgroundImage: { xs: "none", md: `url(${heroImg})` },
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
          backgroundSize: "contain",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          px: { xs: 1, md: 10 },
          py: { xs: 8, md: 0 },
          color: "#fff",
        }}
      >
        <Box sx={{ maxWidth: { xs: "100%", md: "550px" } }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 2,
              lineHeight: 1.2,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            }}
          >
            Make money <br /> with{" "}
            <Typography
              component="span"
              sx={{
                color: "#3ba4ff",
                fontWeight: 800,
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              }}
            >
              1xBet
            </Typography>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 4,
              color: "#d0d5e2",
              fontSize: { xs: "0.95rem", sm: "1rem" },
            }}
          >
            Join the agent program of 1xBet — the world leader in the betting
            industry — and get a new source of income.
          </Typography>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Button
              variant="contained"
              onClick={() => setOpen(true)}
              sx={{
                backgroundColor: "#59c12e",
                color: "#fff",
                fontWeight: 600,
                px: 3,
                py: 1.2,
                width: { xs: "100%", sm: "auto" },
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
                px: 3,
                py: 1.2,
                width: { xs: "100%", sm: "auto" },
                "&:hover": { backgroundColor: "#3ba4ff", color: "#fff" },
              }}
            >
              How does it work?
            </Button>
          </Stack>

          {/* --- FIXED: icons same size, no distortion --- */}
          <Stack
            direction="row"
            spacing={1}
            sx={{ mt: 5, justifyContent: "space-between", width: "100%" }}
          >
            {apps.map((item, i) => (
              <Stack
                key={i}
                alignItems="center"
                justifyContent="center"
                spacing={1}
                sx={{
                  borderRadius: "1em",
                  backgroundColor: "#fff",
                  color: "blue",
                  p: "0.6em",
                  width: "33%",
                }}
              >
                <Box
                  component="img"
                  src={item.img}
                  alt={item.label}
                  sx={{
                    width: 32,
                    height: 32,
                    objectFit: "contain",
                    filter:
                      "brightness(0) saturate(100%) invert(35%) sepia(50%) saturate(1000%) hue-rotate(190deg) brightness(90%) contrast(85%)",
                  }}
                />
                <Typography
                  sx={{ fontSize: "14px", color: "#6b95ff", textAlign: "center" }}
                >
                  {item.label}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Box>
      </Box>

      {/* MODAL OPEN */}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 700,
            mx: "auto",
            mt: 5,
            p: 2,
            outline: "none",
          }}
        >
          <AgentFormSection />
        </Box>
      </Modal>
    </>
  );
};

export default HeroSection;
