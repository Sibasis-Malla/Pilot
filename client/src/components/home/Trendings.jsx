import * as React from 'react';
import { CssBaseline, Grid, Typography } from '@mui/material';
import Sidebar from './Sidebar';
import BlogCard from '../profile/BlogCard';
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
      <Typography
        variant="h4"
        sx={{
          textAlign: 'left',
          fontSize: '2rem',
          fontWeight: 'bold',
          mt: 3,
          color: '#fffffe',
        }}
      >
        Recent Articles
      </Typography>
      <Grid container spacing={3} sx={{ mt: 0.5, mb: 5 }}>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </Grid>
    </>
  );
};

export default Trendings;
