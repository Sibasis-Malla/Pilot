import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

const img = 'https://source.unsplash.com/random';

function MainFeaturedPost() {
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
        backgroundImage: `url(${img})`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={img} alt="Post Title" />}
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
              Title of a longer featured blog post
            </Typography>
            <Typography
              variant="h5"
              sx={{ color: '#94a1b2' }}
              color="inherit"
              paragraph
            >
              Multiple lines of text that form the lede, informing new readers
              quickly and efficiently about what's most interesting in this
              post's contents.
            </Typography>
            <Link
              variant="subtitle1"
              sx={{ color: '#7f5af0', textDecoration: 'none' }}
              href="/article"
            >
              Continue reading…
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default MainFeaturedPost;
