import * as React from 'react';
import { CssBaseline, Grid, Typography } from '@mui/material';
import Sidebar from './Sidebar';
import SmallBlogCard from '../profile/SmallBlogCard';

const Trendings = () => {
  return (
    <>
      <CssBaseline />
      <Grid sx={{ mt: 5 }} container spacing={5}>
        <Grid item xs={12} md={8}>
          <Typography
            variant="h4"
            sx={{
              textAlign: 'left',
              fontSize: '2rem',
              fontWeight: 'bold',
              color: '#fffffe',
            }}
            gutterBottom
          >
            Trendings
          </Typography>
          <SmallBlogCard n={150} />
          <SmallBlogCard n={150} />
          <SmallBlogCard n={150} />
          <SmallBlogCard n={150} />
          <SmallBlogCard n={150} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Sidebar />
        </Grid>
      </Grid>
    </>
  );
};

export default Trendings;
