import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';
import Navbar from './Navbar';

export default function Marginals({ children }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#d4d8f0',
      }}
    >
      <CssBaseline />
      <Navbar />
      <Container maxWidth="lg" sx={{ my: 10 }}>
        {children}
      </Container>

      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          textAlign: 'center',
          backgroundColor: '#232946',
        }}
      >
        <Typography
          variant="body1"
          style={{ color: '#b8c1ec' }}
        >
          Made with ❤ by Team StarFox
        </Typography>
      </Box>
    </Box>
  );
}
