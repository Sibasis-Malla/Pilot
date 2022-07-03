import React, { useState, useEffect } from 'react';

// libraries
import { Typography, Container, Grid } from '@mui/material';
import { Link, useParams } from 'react-router-dom';

// components
import BlogCard from '../components/profile/BlogCard';
import UserCard from '../components/profile/ProfileCard';

// lens queries
import { getPublications } from '../Lens/query';

const ProfilePage = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  const handlePub = async () => {
    const obj = {
      profileId: id,
      publicationTypes: ['POST'],
      limit: 10,
    };
    const res = await getPublications(obj);
    setData(res.data.publications.items);
  };

  useEffect(() => {
    handlePub();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <UserCard />
      <Container maxWidth="lg" sx={{ my: 10, mt: 9 }}>
        <Typography variant="h4" sx={{ mt: 10, fontWeight: 700, color: '#fffffe' }}>
          All Blogs
        </Typography>
        <Grid container spacing={3} sx={{ mt: 1, mb: 10 }}>
          {data.length !== 0 ? (
            data.map((obj) => {
              const { metadata, id, createdAt } = obj;
              const date = new Date(createdAt);
              //console.log(id);
              //console.log(metadata.media[0].original.url);
              return (
                <BlogCard
                  title={metadata && metadata.name}
                  content={metadata && metadata.content}
                  img={metadata && metadata.media[0] && metadata.media[0].original.url}
                  date={String(date).slice(3, 10)}
                  key={id}
                  id={id}
                />
              );
            })
          ) : (
            <div style={{ marginLeft: '25px' }}>
              <Typography variant="h6" sx={{ color: '#94a1b2' }}>
                Write you blogs in{' '}
                <Link to={`/${id}/article/create`}>
                  <span style={{ color: '#7f5af0', textDecoration: 'underline' }}>text editor</span>
                </Link>
                .
              </Typography>
            </div>
          )}
        </Grid>
      </Container>
    </>
  );
};

export default ProfilePage;
