import React from 'react';
import { Box } from '@mui/material';
import Navbar from './Navbar';

const Header = () => {
  return (
    <Box  sx={{ position: 'relative',  maxWidth: '100vw', }}>
      <Navbar />
      <Box />
    </Box>
  );
};

export default Header;