import React from "react";
import { Box, TextField, Button, MenuItem, Typography } from "@mui/material";

export default function AgentFormSection() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        py: 6,
        backgroundColor: "#0B1B33",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 650,
          backgroundColor: "white",
          borderRadius: 2,
          p: 4,
        }}
      >
        <Typography sx={{ fontSize: 24, fontWeight: 700, mb: 3 }}>
          Become an Agent
        </Typography>

        {/* Row 1: Country + Region */}
        <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
          <TextField select fullWidth size="small" label="Country">
            <MenuItem value="bd">Bangladesh</MenuItem>
            <MenuItem value="in">India</MenuItem>
            <MenuItem value="pk">Pakistan</MenuItem>
          </TextField>

          <TextField select fullWidth size="small" label="Region">
            <MenuItem value="dhaka">Dhaka</MenuItem>
            <MenuItem value="chittagong">Chittagong</MenuItem>
          </TextField>
        </Box>

        {/* Row 2: City + First Name */}
        <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
          <TextField select fullWidth size="small" label="City">
            <MenuItem value="dhaka_city">Dhaka City</MenuItem>
            <MenuItem value="ctg_city">Chittagong City</MenuItem>
          </TextField>

          <TextField fullWidth size="small" label="First Name" />
        </Box>

        {/* Row 3: Email + Phone */}
        <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
          <TextField fullWidth size="small" label="Email" type="email" />

          <Box sx={{ display: "flex", gap: 1, width: "50%" }}>
            <TextField select fullWidth size="small" label="Code">
              <MenuItem value="+880">+880</MenuItem>
              <MenuItem value="+91">+91</MenuItem>
            </TextField>

            <TextField fullWidth size="small" label="Phone" />
          </Box>
        </Box>

        {/* Row 4: Method of Contact (Full width) */}
        <TextField
          select
          fullWidth
          size="small"
          label="Method of Contact"
          sx={{ mb: 2 }}
        >
          <MenuItem value="email">Email</MenuItem>
          <MenuItem value="phone">Phone</MenuItem>
          <MenuItem value="telegram">Telegram</MenuItem>
        </TextField>

        {/* Row 5: Your Message */}
        <TextField
          fullWidth
          size="small"
          label="Your Message"
          multiline
          rows={4}
          sx={{ mb: 3 }}
        />

        {/* reCAPTCHA Placeholder */}
        <Box
          sx={{
            width: "100%",
            height: 78,
            backgroundColor: "#F9F9F9",
            border: "1px solid #E0E0E0",
            borderRadius: 1,
            mb: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 14,
            color: "#555",
          }}
        >
          reCAPTCHA placeholder
        </Box>

        <Button
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: "#00A046",
            fontWeight: 700,
            textTransform: "none",
            fontSize: 17,
            py: 1.2,
            "&:hover": { backgroundColor: "#00853A" },
          }}
        >
          SEND
        </Button>
      </Box>
    </Box>
  );
}
