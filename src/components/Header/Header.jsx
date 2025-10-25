import React from 'react';
import { Box } from '@mui/material';
import Navbar from './Navbar';

const Header = () => {
  return (
    <Box sx={{ position: 'relative'}}>
      <Navbar />
      <Box />
    </Box>
  );
};

export default Header;