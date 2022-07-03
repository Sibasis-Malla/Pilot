import * as React from 'react';

// libraries
import { Typography, CssBaseline, Box } from '@mui/material';

// components
import Navbar from './Navbar';

const Marginals = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#16161a',
      }}
    >
      <CssBaseline />
      <Navbar />
      {children}

      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          textAlign: 'center',
          backgroundColor: '#242629',
        }}
      >
        <Typography variant="body1" style={{ color: '#fffffe' }}>
          Made with ❤ by Team StarFox
        </Typography>
      </Box>
    </Box>
  );
};

export default Marginals;
