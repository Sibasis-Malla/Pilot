import React from 'react';
import BlogCard from '../components/profile/BlogCard';
import UserCard from '../components/profile/ProfileCard';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const ProfilePage = () => {
  return (
    <div>
      <UserCard />
      {/* <Typography
        variant="h4"
        sx={{ mt: 10, fontWeight: 700, color: '#fffffe' }}
      >
        Popular Blogs
      </Typography>
      <Grid container spacing={3} sx={{ mt: 1, mb: 10 }}>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </Grid> */}
      <Typography
        variant="h4"
        sx={{ mt: 10, fontWeight: 700, color: '#fffffe' }}
      >
        All Blogs
      </Typography>
      <Grid container spacing={3} sx={{ mt: 1, mb: 10 }}>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </Grid>
    </div>
  );
};

export default ProfilePage;
