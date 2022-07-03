import React from 'react';

// libraries
import { Paper, Typography, Grid, Box } from '@mui/material';
import { compiler } from 'markdown-to-jsx';
import { Link } from 'react-router-dom';

const MainFeaturedPost = (props) => {
  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        textAlign: 'left',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${props.img})`,
      }}
    >
      {<img style={{ display: 'none' }} src={props.img} alt={props.title} />}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
              sx={{
                color: '#fffffe',
              }}
            >
              {props.title}
            </Typography>
            <Typography variant="h5" sx={{ color: '#94a1b2', mb: 2 }} color="inherit">
              {compiler(props.content)}
            </Typography>
            <Link
              style={{
                color: '#7f5af0',
                textDecoration: 'none',
              }}
              to={`/${props.id}/article`}
            >
              Continue reading…
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MainFeaturedPost;
