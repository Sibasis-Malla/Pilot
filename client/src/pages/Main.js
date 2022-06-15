import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

function Main(props) {
  const { title } = props;

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        '& .markdown': {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      This blog post shows a few different types of content that are supported
      and styled with Material styles. Basic typography, images, and code are
      all supported. You can extend these by modifying Markdown.js. Cum sociis
      natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
      vestibulum. Sed posuere consectetur est at lobortis. Cras mattis
      consectetur purus sit amet fermentum. Curabitur blandit tempus porttitor.
      Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id
      nibh ultricies vehicula ut id elit. Etiam porta sem malesuada magna mollis
      euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia
      bibendum nulla sed consectetur.
      <p>
        This blog post shows a few different types of content that are supported
        and styled with Material styles. Basic typography, images, and code are
        all supported. You can extend these by modifying Markdown.js. Cum sociis
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
        vestibulum. Sed posuere consectetur est at lobortis. Cras mattis
        consectetur purus sit amet fermentum. Curabitur blandit tempus
        porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam
        id dolor id nibh ultricies vehicula ut id elit. Etiam porta sem
        malesuada magna mollis euismod. Cras mattis consectetur purus sit amet
        fermentum. Aenean lacinia bibendum nulla sed consectetur.
      </p>
      <p>
        This blog post shows a few different types of content that are supported
        and styled with Material styles. Basic typography, images, and code are
        all supported. You can extend these by modifying Markdown.js. Cum sociis
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
        vestibulum. Sed posuere consectetur est at lobortis. Cras mattis
        consectetur purus sit amet fermentum. Curabitur blandit tempus
        porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam
        id dolor id nibh ultricies vehicula ut id elit. Etiam porta sem
        malesuada magna mollis euismod. Cras mattis consectetur purus sit amet
        fermentum. Aenean lacinia bibendum nulla sed consectetur.
      </p>
    </Grid>
  );
}

export default Main;
