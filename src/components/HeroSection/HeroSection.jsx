import React, { useState } from "react";
import { Box, Typography, Button, Stack, Modal, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
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
            spacing={2}
            sx={{ mt: 5, justifyContent: "space-between", width: "100%" }}
          >
            {apps.map((item, i) => (
              <Stack
                key={i}
                alignItems="center"
                justifyContent="center"
                spacing={0.8}
                sx={{
                  borderRadius: "12px",
                  backgroundColor: "#fff",
                  p: "0.8em 1em",
                  width: "33%",
                  boxShadow: "0 4px 12px rgba(59, 164, 255, 0.15)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  "&:hover": {
                    boxShadow: "0 8px 20px rgba(59, 164, 255, 0.25)",
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={item.img}
                  alt={item.label}
                  sx={{
                    width: 36,
                    height: 36,
                    objectFit: "contain",
                    filter:
                      "brightness(0) saturate(100%) invert(35%) sepia(50%) saturate(1000%) hue-rotate(190deg) brightness(90%) contrast(85%)",
                  }}
                />
                <Typography
                  sx={{ fontSize: "12px", color: "#6b95ff", textAlign: "center", fontWeight: 900 }}
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
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          pt: { xs: 2, md: 8 }
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 700,
            mx: "auto",
            backgroundColor: "#fff",
            borderRadius: "16px",
            outline: "none",
            position: "relative",
            boxShadow: "0 20px 60px rgba(10, 26, 59, 0.3)",
            border: "2px solid #0a1a3b",
            overflow: "hidden",
            animation: "slideUp 0.3s ease-out",
            "@keyframes slideUp": {
              "0%": {
                opacity: 0,
                transform: "translateY(30px)",
              },
              "100%": {
                opacity: 1,
                transform: "translateY(0)",
              },
            },
          }}
        >
          {/* Close Button */}
          <IconButton
            onClick={() => setOpen(false)}
            sx={{
              position: "absolute",
              right: 16,
              top: 16,
              backgroundColor: "#0a1a3b",
              color: "#fff",
              zIndex: 10,
              "&:hover": {
                backgroundColor: "#1a2a4b",
              },
            }}
            size="small"
          >
            <CloseIcon />
          </IconButton>

          {/* Form Content */}
          <Box sx={{ p: { xs: 2, md: 4 } }}>
            <AgentFormSection />
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default HeroSection;
