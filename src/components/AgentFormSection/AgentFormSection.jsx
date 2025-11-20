import React, { useState } from "react";
import { Box, TextField, Button, MenuItem, Typography } from "@mui/material";

export default function AgentFormSection() {
  const [formData, setFormData] = useState({
    country: "country",
    region: "region",
    city: "city",
    firstName: "",
    email: "",
    phone: "",
    method: "method",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Box id="agent-form-section"
      sx={{
        width: "100%",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: { xs: '60vh', md: 'auto' },
        py: { xs: 4, md: 0 },
      }}
    >
      <Box
        sx={{
          width: { xs: '100%', md: '70%' },
          backgroundColor: "transparent",
        }}
      >
        <Typography sx={{ fontSize: 24, fontWeight: 700, mb: 3, color: "#0a1a3b", textAlign: 'center' }}>
          Become an Agent
        </Typography>

        {/* Row 1: Country + Region */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, mb: 2.5 }}>
          <TextField 
            select 
            fullWidth 
            size="small" 
            name="country"
            value={formData.country}
            onChange={handleChange}
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#0a1a3b",
                  borderWidth: "1.5px"
                },
                "&:hover fieldset": {
                  borderColor: "#0a1a3b"
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#0a1a3b"
                }
              },
              "& .MuiInputBase-input": {
                color: formData.country === "country" ? "rgba(10, 26, 59, 0.7)" : "#0a1a3b"
              }
            }}
          >
            <MenuItem value="country" sx={{ color: "rgba(10, 26, 59, 0.7)" }}>Country</MenuItem>
            <MenuItem value="bd">Bangladesh</MenuItem>
            <MenuItem value="in">India</MenuItem>
            <MenuItem value="pk">Pakistan</MenuItem>
          </TextField>

          <TextField 
            select 
            fullWidth 
            size="small" 
            name="region"
            value={formData.region}
            onChange={handleChange}
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#0a1a3b",
                  borderWidth: "1.5px"
                },
                "&:hover fieldset": {
                  borderColor: "#0a1a3b"
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#0a1a3b"
                }
              },
              "& .MuiInputBase-input": {
                color: formData.region === "region" ? "rgba(10, 26, 59, 0.7)" : "#0a1a3b"
              }
            }}
          >
            <MenuItem value="region" sx={{ color: "rgba(10, 26, 59, 0.7)" }}>Region</MenuItem>
            <MenuItem value="dhaka">Dhaka</MenuItem>
            <MenuItem value="chittagong">Chittagong</MenuItem>
          </TextField>
        </Box>

        {/* Row 2: City + First Name */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, mb: 2.5 }}>
          <TextField 
            select 
            fullWidth 
            size="small" 
            name="city"
            value={formData.city}
            onChange={handleChange}
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#0a1a3b",
                  borderWidth: "1.5px"
                },
                "&:hover fieldset": {
                  borderColor: "#0a1a3b"
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#0a1a3b"
                }
              },
              "& .MuiInputBase-input": {
                color: formData.city === "city" ? "rgba(10, 26, 59, 0.7)" : "#0a1a3b"
              }
            }}
          >
            <MenuItem value="city" sx={{ color: "rgba(10, 26, 59, 0.7)" }}>City</MenuItem>
            <MenuItem value="dhaka_city">Dhaka City</MenuItem>
            <MenuItem value="ctg_city">Chittagong City</MenuItem>
          </TextField>

          <TextField 
            fullWidth 
            size="small" 
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#0a1a3b",
                  borderWidth: "1.5px"
                },
                "&:hover fieldset": {
                  borderColor: "#0a1a3b"
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#0a1a3b"
                }
              },
              "& .MuiInputBase-input::placeholder": {
                color: "#0a1a3b",
                opacity: 0.7
              }
            }}
          />
        </Box>

        {/* Row 3: Email + Phone */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, mb: 2.5 }}>
          <TextField 
            fullWidth 
            size="small" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            type="email"
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#0a1a3b",
                  borderWidth: "1.5px"
                },
                "&:hover fieldset": {
                  borderColor: "#0a1a3b"
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#0a1a3b"
                }
              },
              "& .MuiInputBase-input::placeholder": {
                color: "#0a1a3b",
                opacity: 0.7
              }
            }}
          />

          <TextField 
            fullWidth 
            size="small" 
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#0a1a3b",
                  borderWidth: "1.5px"
                },
                "&:hover fieldset": {
                  borderColor: "#0a1a3b"
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#0a1a3b"
                }
              },
              "& .MuiInputBase-input::placeholder": {
                color: "#0a1a3b",
                opacity: 0.7
              }
            }}
          />
        </Box>

        {/* Row 4: Method of Contact (Full width) */}
        <TextField
          select
          fullWidth
          size="small"
          name="method"
          value={formData.method}
          onChange={handleChange}
          variant="outlined"
          sx={{ 
            mb: 2.5,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#0a1a3b",
                borderWidth: "1.5px"
              },
              "&:hover fieldset": {
                borderColor: "#0a1a3b"
              },
              "&.Mui-focused fieldset": {
                borderColor: "#0a1a3b"
              }
            },
            "& .MuiInputBase-input": {
              color: formData.method === "method" ? "rgba(10, 26, 59, 0.7)" : "#0a1a3b"
            }
          }}
        >
          <MenuItem value="method" sx={{ color: "rgba(10, 26, 59, 0.7)" }}>Method of Contact</MenuItem>
          <MenuItem value="email">Email</MenuItem>
          <MenuItem value="phone">Phone</MenuItem>
          <MenuItem value="telegram">Telegram</MenuItem>
        </TextField>

        {/* Row 5: Your Message */}
        <TextField
          fullWidth
          size="small"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          multiline
          rows={3}
          variant="outlined"
          sx={{ 
            mb: 3,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#0a1a3b",
                borderWidth: "1.5px"
              },
              "&:hover fieldset": {
                borderColor: "#0a1a3b"
              },
              "&.Mui-focused fieldset": {
                borderColor: "#0a1a3b"
              }
            },
            "& .MuiInputBase-input::placeholder": {
              color: "#0a1a3b",
              opacity: 0.7
            }
          }}
        />

        <Button
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: "#00853a",
            fontWeight: 700,
            textTransform: "none",
            fontSize: 15,
            py: 1,
            "&:hover": { backgroundColor: "#1a2a4b" },
          }}
        >
          SEND
        </Button>
      </Box>
    </Box>
  );
}
