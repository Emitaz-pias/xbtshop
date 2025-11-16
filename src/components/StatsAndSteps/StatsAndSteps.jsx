import React from "react";
import { Box, Typography, Stack, Paper } from "@mui/material";
import { motion } from "framer-motion";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import HandshakeIcon from "@mui/icons-material/Handshake";
import PublicIcon from "@mui/icons-material/Public";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

const stats = [
  { icon: <EmojiEventsIcon sx={{ fontSize: 40, color: "#59c12e" }} />, value: "12", label: "years of experience" },
  { icon: <HandshakeIcon sx={{ fontSize: 40, color: "#59c12e" }} />, value: "50 000+", label: "agents" },
  { icon: <PublicIcon sx={{ fontSize: 40, color: "#59c12e" }} />, value: "40+", label: "countries" },
  { icon: <MonetizationOnIcon sx={{ fontSize: 40, color: "#59c12e" }} />, value: "Big", label: "payouts" },
];

const steps = [
  "Receive cash from a customer",
  "Make a deposit into the customer's account",
  "Receive your commission",
];

const StatsAndSteps = () => {
  return (
    <Box  sx={{ position: "relative",zIndex: 3, mt: { xs: -8, md: -12 } }}>
      {/* Overlapping White Box */}
      <Paper
        elevation={3}
        sx={{
          width: { xs: "92%", md: "80%" },
          mx: "auto",
          borderRadius: "20px",
          backgroundColor: "#fff",
          py: { xs: 4, md: 5 },
          px: { xs: 2, md: 6 },
          textAlign: "center",
          boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-around"
          alignItems="center"
          spacing={{ xs: 4, sm: 2, md: 4 }}
        >
          {stats.map((item, i) => (
            <Stack key={i} alignItems="center" spacing={1}>
              {item.icon}
              <Typography variant="h5" fontWeight={800} color="#0a1a3b">
                {item.value}
              </Typography>
              <Typography
                variant="body2"
                color="#3b4b68"
                sx={{ textTransform: "uppercase", fontWeight: 500 }}
              >
                {item.label}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Paper>

      {/* Section Below */}
      <Box
        sx={{
          backgroundColor: "#f3f6fb",
          pt: { xs: 10, md: 14 },
          pb: { xs: 8, md: 10 },
          color: "#0a1a3b",
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="center"
          alignItems="flex-start"
          spacing={6}
          sx={{
            maxWidth: 1100,
            mx: "auto",
            px: 2,
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {/* LEFT SIDE */}
          <Box flex={1}>
            <Typography
              variant="h4"
              sx={{ fontWeight: 700, mb: 2, color: "#0a1a3b" }}
            >
              A new way to make money!
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "#3b4b68",
                mb: 4,
                fontSize: { xs: "0.95rem", md: "1rem" },
                maxWidth: 500,
              }}
            >
              By becoming a 1xBet agent, you'll receive an additional source of
              unlimited income. The only thing that you need is a smartphone:
              accept money, top up customers' accounts, make withdrawals for
              customers and receive commission. This job is completely secure,
              and how much you earn is solely down to you! Grow and make money
              with 1xBet.
            </Typography>
          </Box>

          {/* RIGHT SIDE (Steps + vertical line) */}
          <Box flex={1} sx={{ position: "relative" }}>
            {/* Vertical line */}
           <Stack spacing={4} sx={{ pl: 6, position: "relative" }}>
  {steps.map((text, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true, amount: 0.4 }}
      style={{ position: "relative" }}
    >
      {/* Step Card */}
      <Paper
        elevation={1}
        sx={{
          p: 2,
          borderRadius: 2,
          color: "#0a1a3b",
          fontWeight: 500,
          display: "flex",
          alignItems: "center",
          gap: 2,
          backgroundColor: "#fff",
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: 28,
            height: 28,
            borderRadius: "50%",
            backgroundColor: "#3ba4ff",
            color: "#fff",
            fontWeight: 700,
            fontSize: "0.9rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          {index + 1}
        </Box>
        {text}
      </Paper>

      {/* Blue vertical line between steps */}
      {index !== steps.length - 1 && (
        <Box
          sx={{
            position: "absolute",
            left: 27,
            top: "100%",
            height: 32,
            width: "2px",
            backgroundColor: "#3ba4ff",
            mx: "auto",
          }}
        />
      )}
    </motion.div>
  ))}
</Stack>

           
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default StatsAndSteps;
