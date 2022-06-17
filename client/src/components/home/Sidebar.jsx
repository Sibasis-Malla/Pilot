import React from 'react';
import {
  CssBaseline,
  Grid,
  Container,
  Typography,
  Paper,
  Stack,
} from '@mui/material';
import SmallBlogCard from '../profile/SmallBlogCard';

const Sidebar = () => {
  const sections = [
    { title: 'Technology', url: '#' },
    { title: 'Design', url: '#' },
    { title: 'Culture', url: '#' },
    { title: 'Business', url: '#' },
    { title: 'Politics', url: '#' },
    { title: 'Opinion', url: '#' },
    { title: 'Science', url: '#' },
    { title: 'Health', url: '#' },
    { title: 'Style', url: '#' },
    { title: 'Travel', url: '#' },
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
        }}
      >
        <Typography
          variant="h4"
          sx={{ textAlign: 'left', fontSize: '2rem', fontWeight: 'bold' }}
          gutterBottom
        >
          Popular Genres
        </Typography>
        <Stack
          direction="row"
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          {sections.map(({ title, url }) => (
            <Typography
              variant="body1"
              sx={{
                backgroundColor: '#000',
                color: '#fff',
                py: 0.5,
                px: 2,
                mx: 0.5,
                my: 1,
                borderRadius: '20%',
              }}
            >
              {title}
            </Typography>
          ))}
        </Stack>
      </Paper>
      <Typography
        variant="h6"
        fontWeight={700}
        gutterBottom
        sx={{ textAlign: 'left', fontSize: '2rem', fontWeight: 'bold', mt: 8 }}
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