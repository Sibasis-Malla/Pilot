import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import {compiler} from 'markdown-to-jsx'

const img =
  'https://res.cloudinary.com/sambitsankalp/image/upload/v1655636634/hackathons/photo-1655372501819-4c1261a50c55_ktpdmj.jpg';

function MainFeaturedPost(props) {
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
              {props.title}
            </Typography>
            <Typography
              variant="h5"
              sx={{ color: '#94a1b2' }}
              color="inherit"
              paragraph
            >
               {compiler(props.content)}....
            </Typography>
            <Link
              variant="subtitle1"
              sx={{ color: '#7f5af0', textDecoration: 'none' }}
              href={`/${props.id}/article`}
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
