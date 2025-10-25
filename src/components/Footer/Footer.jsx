import React from "react";
import { Box, Typography, Stack } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#08132c",
        py: 4,
        color: "#aeb7d2",
        textAlign: "center",
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} 1xBet Agent Program. All rights reserved.
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        spacing={3}
        sx={{ mt: 2, fontSize: "14px" }}
      >
        <Typography sx={{ cursor: "pointer" }}>Terms of Use</Typography>
        <Typography sx={{ cursor: "pointer" }}>Privacy Policy</Typography>
        <Typography sx={{ cursor: "pointer" }}>Cookies</Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
