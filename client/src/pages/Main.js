import * as React from 'react';

// libraries
import { Divider, Stack, Grid, Typography } from '@mui/material';
import { compiler } from 'markdown-to-jsx';

const Main = (props) => {
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
      <Typography variant="h3" fontWeight={700} sx={{ color: '#fffffe' }} gutterBottom>
        {props.title}
      </Typography>
      <img style={{ width: '100%' }} src={props.img} alt={props.title} />
      <Stack
        direction="row"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          color: '#fffffe',
        }}
      >
        <Stack direction="row" spacing={1} sx={{ py: 1 }}></Stack>
        <Typography variant="body2" sx={{ py: 1 }}>
          {props.date}
        </Typography>
      </Stack>
      <Divider sx={{ backgroundColor: '#94a1b2' }} />
      {compiler(props.content)}
    </Grid>
  );
};

export default Main;
