import React from 'react';
import { Typography, Paper, Stack, Avatar } from '@mui/material';
import SmallBlogCard from '../profile/SmallBlogCard';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const sections = [
    {
      name: 'Sambit Sankalp',
      link: '/profile',
      imageUrl:
        'https://res.cloudinary.com/tedxnitrourkela/image/upload/v1643281545/team/technical/Sambit_Sankalp_omdbgy.png',
      username: 'sambitsankalp',
    },
    {
      name: 'Sambit Sankalp',
      link: '/profile',
      imageUrl:
        'https://res.cloudinary.com/tedxnitrourkela/image/upload/v1643281545/team/technical/Sambit_Sankalp_omdbgy.png',
      username: 'sambitsankalp',
    },
    {
      name: 'Sambit Sankalp',
      link: '/profile',
      imageUrl:
        'https://res.cloudinary.com/tedxnitrourkela/image/upload/v1643281545/team/technical/Sambit_Sankalp_omdbgy.png',
      username: 'sambitsankalp',
    },
  
  ];
  return (
    <>
      <Paper
        elevation={0}
        sx={{
          p: 2,
          bgcolor: 'grey.200',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          textAlign: 'left',
          backgroundColor: '#242629',
        }}
      >
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
          Popular Pilots
        </Typography>
        <Stack
          direction="column"
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          {sections.map(({ name, link, imageUrl, username }) => (
            <Link style={{ textDecoration: 'none' }} to={link}>
              <Typography
                variant="body1"
                sx={{
                  color: '#fffffe',
                  py: 0.5,
                  px: 2,
                  mx: 0.5,
                  my: 1,
                  borderRadius: '10%',
                }}
              >
                <Stack direction="row" spacing={2}>
                  <Avatar alt={name} src={imageUrl} />
                  <Stack direction="column">
                    <Typography variant="body1" sx={{ color: '#fffffe' }}>
                      {name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#bababa' }}>
                      {username}
                    </Typography>
                  </Stack>
                </Stack>
              </Typography>
            </Link>
          ))}
        </Stack>
      </Paper>
      <Typography
        variant="h6"
        fontWeight={700}
        gutterBottom
        sx={{
          textAlign: 'left',
          fontSize: '2rem',
          fontWeight: 'bold',
          mt: 8,
          color: '#fffffe',
        }}
      >
        Subscribed
      </Typography>
      <SmallBlogCard n={35} />
      <SmallBlogCard n={35} />
      <SmallBlogCard n={35} />
    </>
  );
};

export default Sidebar;
