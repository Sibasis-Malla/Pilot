import React, { useState, useEffect } from 'react';
import BlogCard from '../components/profile/BlogCard';
import UserCard from '../components/profile/ProfileCard';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { getPublications } from '../Lens/query';
import { useParams } from 'react-router-dom';
const ProfilePage = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    handlePub();
  }, []);
  const handlePub = async () => {
    const obj = {
      profileId: id,
      publicationTypes: ['POST'],
      limit: 10,
    };
    const res = await getPublications(obj);
    setData(res.data.publications.items);
    //console.log(res.data.publications.items[0].metadata.content);
  };

  return (
    <div>
      <UserCard />
      {/* <Typography
        variant="h4"
        sx={{ mt: 10, fontWeight: 700, color: '#fffffe' }}
      >
        Popular Blogs
      </Typography>
      <Grid container spacing={3} sx={{ mt: 1, mb: 10 }}>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </Grid> */}
      <Typography
        variant="h4"
        sx={{ mt: 10, fontWeight: 700, color: '#fffffe' }}
      >
        All Blogs
      </Typography>
      <Grid container spacing={3} sx={{ mt: 1, mb: 10 }}>
        {data &&
          data.map((obj) => {
            const { metadata, id, createdAt } = obj;
            const date = new Date(createdAt);
            //console.log(id);
            //console.log(metadata.media[0].original.url);
            return (
              <BlogCard
                title={metadata.name}
                content={metadata.content}
                img={metadata.media[0].original.url}
                date={String(date).slice(3, 10)}
                key={id}
                id={id}
              />
            );
          })}
      </Grid>
    </div>
  );
};

export default ProfilePage;
