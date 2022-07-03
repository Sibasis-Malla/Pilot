/*eslint-disable*/
import React, { useEffect, useState } from 'react';

// libraries
import { CssBaseline, Grid, Container } from '@mui/material';
import { useParams } from 'react-router-dom';

// components
import Main from './Main';
import Sidebar from './Sidebar';

// lens queries
import { getPublication } from '../Lens/query';

export default function Blog() {
  const [data, setData] = useState();
  const { pubId } = useParams();

  const handlePub = async () => {
    const res = await getPublication(pubId);
    setData(res.data.publication);
  };

  useEffect(() => {
    handlePub();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container maxWidth="lg" sx={{ my: 10, mt: 9 }}>
      <CssBaseline />
      <main>
        <Grid container spacing={5} sx={{ mt: 3 }}>
          {data && (
            <Main
              title={data.metadata.name}
              content={data.metadata.content}
              img={data.metadata.media[0].original.url}
              date={String(new Date(data.createdAt)).slice(3, 15)}
            />
          )}
          {data && (
            <Sidebar
              bio={data.profile.bio}
              name={data.profile.name}
              img={data.profile.picture.original.url}
              id={data.profile.id}
              pubId={pubId}
            />
          )}
        </Grid>
      </main>
    </Container>
  );
}
