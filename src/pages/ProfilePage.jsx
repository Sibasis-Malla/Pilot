import React from 'react';
import BlogCard from '../components/profile/BlogCard';
import UserCard from '../components/profile/ProfileCard';
import Grid from '@mui/material/Grid';

const ProfilePage = () => {
  return (
    <div>
      <UserCard />
      <Grid container spacing={4} sx={{ mt: 1, mb: 10 }}>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </Grid>
    </div>
  );
};

export default ProfilePage;
