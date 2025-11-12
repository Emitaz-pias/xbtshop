// src/components/AgentFormSection.jsx
import React from "react";
import {
  Box,
  Grid,
  TextField,
  MenuItem,
  Button,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";

const AgentFormSection = () => {
  const isSmall = useMediaQuery("(max-width:900px)");

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #052659 0%, #0b2a59 100%)",
        py: { xs: 8, md: 12 },
        px: { xs: 3, md: 8 },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        spacing={6}
        alignItems="center"
        justifyContent="center"
        maxWidth="1200px"
      >
        {/* Left - Form */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Box
              sx={{
                background:
                  "rgba(255, 255, 255, 0.08)",
                borderRadius: "16px",
                backdropFilter: "blur(10px)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                p: { xs: 4, md: 5 },
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <Typography
                variant="h4"
                textAlign="center"
                mb={3}
                fontWeight={700}
                color="#6CD44E"
              >
                Become a 1xBet Agent
              </Typography>

              <Typography
                variant="body1"
                textAlign="center"
                color="rgba(255,255,255,0.8)"
                mb={4}
              >
                Fill out the form below to start your partnership journey with 1xBet.
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    select
                    label="Country"
                    fullWidth
                    size="small"
                    SelectProps={{ displayEmpty: true }}
                    sx={{
                      "& .MuiInputBase-root": { color: "#fff" },
                      "& .MuiInputLabel-root": { color: "#ccc" },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#6CD44E",
                      },
                    }}
                  >
                    <MenuItem value="">Select Country</MenuItem>
                    <MenuItem value="Bangladesh">Bangladesh</MenuItem>
                    <MenuItem value="India">India</MenuItem>
                    <MenuItem value="Pakistan">Pakistan</MenuItem>
                  </TextField>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    select
                    label="Region"
                    fullWidth
                    size="small"
                    SelectProps={{ displayEmpty: true }}
                    sx={{
                      "& .MuiInputBase-root": { color: "#fff" },
                      "& .MuiInputLabel-root": { color: "#ccc" },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#6CD44E",
                      },
                    }}
                  >
                    <MenuItem value="">Select Region</MenuItem>
                    <MenuItem value="Dhaka">Dhaka</MenuItem>
                    <MenuItem value="Chittagong">Chittagong</MenuItem>
                    <MenuItem value="Sylhet">Sylhet</MenuItem>
                  </TextField>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    label="City"
                    fullWidth
                    size="small"
                    InputLabelProps={{ style: { color: "#ccc" } }}
                    InputProps={{ style: { color: "#fff" } }}
                    sx={{
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#6CD44E",
                      },
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Full name"
                    fullWidth
                    size="small"
                    InputLabelProps={{ style: { color: "#ccc" } }}
                    InputProps={{ style: { color: "#fff" } }}
                    sx={{
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#6CD44E",
                      },
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Email address"
                    type="email"
                    fullWidth
                    size="small"
                    InputLabelProps={{ style: { color: "#ccc" } }}
                    InputProps={{ style: { color: "#fff" } }}
                    sx={{
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#6CD44E",
                      },
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Phone number"
                    fullWidth
                    size="small"
                    placeholder="+880"
                    InputLabelProps={{ style: { color: "#ccc" } }}
                    InputProps={{ style: { color: "#fff" } }}
                    sx={{
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#6CD44E",
                      },
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    select
                    label="Preferred contact method"
                    fullWidth
                    size="small"
                    SelectProps={{ displayEmpty: true }}
                    sx={{
                      "& .MuiInputBase-root": { color: "#fff" },
                      "& .MuiInputLabel-root": { color: "#ccc" },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#6CD44E",
                      },
                    }}
                  >
                    <MenuItem value="email">E-mail</MenuItem>
                    <MenuItem value="phone">Phone</MenuItem>
                    <MenuItem value="telegram">Telegram</MenuItem>
                  </TextField>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    label="Your message"
                    multiline
                    rows={3}
                    fullWidth
                    size="small"
                    InputLabelProps={{ style: { color: "#ccc" } }}
                    InputProps={{ style: { color: "#fff" } }}
                    sx={{
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#6CD44E",
                      },
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Box
                    sx={{
                      backgroundColor: "rgba(255,255,255,0.1)",
                      borderRadius: "8px",
                      height: "78px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#bbb",
                      fontSize: "14px",
                    }}
                  >
                    reCAPTCHA placeholder
                  </Box>
                </Grid>

                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      backgroundColor: "#6CD44E",
                      color: "#000",
                      fontWeight: 700,
                      borderRadius: "10px",
                      py: 1.4,
                      fontSize: "1rem",
                      letterSpacing: "0.5px",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        backgroundColor: "#5ac13e",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    SEND
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </motion.div>
        </Grid>

        {/* Right - Contact Info */}
        <Grid
          item
          xs={12}
          md={6}
          textAlign={isSmall ? "center" : "left"}
          sx={{ color: "rgba(255,255,255,0.9)" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Typography variant="h4" mb={3} fontWeight={700} color="#6CD44E">
              Contact Information
            </Typography>
            <Typography variant="body1" mb={1.5}>
              <strong>Web:</strong> 1xbet.com
            </Typography>
            <Typography variant="body1" mb={1.5}>
              <strong>E-mail:</strong> retail@1xbet-team.com
            </Typography>
            <Typography variant="body1" mb={1.5}>
              <strong>Telegram:</strong> @Retail_team_Main
            </Typography>

            <Typography
              variant="body2"
              mt={4}
              color="rgba(255,255,255,0.7)"
              sx={{ maxWidth: "400px" }}
            >
              Our team will review your request and get back to you shortly.
              Join our growing network of agents and enjoy exclusive benefits.
            </Typography>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AgentFormSection;
