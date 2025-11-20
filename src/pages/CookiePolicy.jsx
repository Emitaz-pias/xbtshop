import React from 'react';
import { Box, Typography } from '@mui/material';

const CookiePolicy = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Cookie Policy
      </Typography>
      <Typography variant="body1">
        This is the Cookie Policy page. Here you can describe your cookie usage policies.
      </Typography>
    </Box>
  );
};

export default CookiePolicy;