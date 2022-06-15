import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { Typography, Button } from '@mui/material';

function Sidebar() {
  return (
    <Grid item xs={12} md={4}>
      <Paper
        elevation={0}
        sx={{
          p: 2,
          bgcolor: 'grey.200',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Typography variant="h6" fontWeight={700} gutterBottom>
          About the Author
        </Typography>
        <img
          style={{
            width: '50%',
            height: 'auto',
            borderRadius: '50%',
            marginTop: 5,
          }}
          src="https://res.cloudinary.com/tedxnitrourkela/image/upload/v1643281545/team/technical/Sambit_Sankalp_omdbgy.png"
          alt="user photo"
        />
        <Typography variant="h5" fontWeight={700} sx={{ mt: 2 }}>
          Sambit Sankalp
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          sx={{ mt: 2, width: '100%', justifyContent: 'center' }}
        >
          <Button variant="contained">Follow</Button>
          <Button variant="outlined">Subscribe</Button>
        </Stack>
        <Typography sx={{ mt: 2, px: 1 }}>
          Etiam porta sem malesuada magna mollis euismod. Cras mattis
          consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla
          sed consectetur.
        </Typography>
      </Paper>
    </Grid>
  );
}

export default Sidebar;
