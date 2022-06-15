import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Main from './Main';
import Sidebar from './Sidebar';

export default function Blog() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="From the firehose" />
            <Sidebar />
          </Grid>
        </main>
      </Container>
    </>
  );
}
