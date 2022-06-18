import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Divider, Stack } from '@mui/material';

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
        color: '#94a1b2',
      }}
    >
      <Typography
        variant="h3"
        fontWeight={700}
        sx={{ color: '#fffffe' }}
        gutterBottom
      >
        {title}
      </Typography>
      <img
        style={{ width: '100%' }}
        src="https://res.cloudinary.com/sambitsankalp/image/upload/v1655063242/hackathons/creative-workplace-with-computer-monitor-empty-no-people-cabinet-vector-id1165699436_qdf5yf.jpg"
      />
      <Stack
        direction="row"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          color: '#fffffe',
        }}
      >
        <Stack direction="row" spacing={1} sx={{ py: 1 }}>
          <Typography variant="body2">Tech, Design, Business</Typography>
        </Stack>
        <Typography variant="body2" sx={{ py: 1 }}>
          16 Jun 2022
        </Typography>
      </Stack>
      <Divider sx={{ backgroundColor: '#94a1b2' }} />
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
