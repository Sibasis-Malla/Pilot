import React, { useState, useEffect } from 'react';

// libraries
import { Container } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';

// components
import MainFeaturedPost from '../components/home/MainFeaturedPost';
import Trendings from '../components/home/Trendings';

// lens queries
import { getPublications } from '../Lens/query';

// css
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const HomePage = () => {
  const [data, setData] = useState([]);

  const handlePub = async () => {
    const obj = {
      profileId: '0x2d5b',
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
    <Container maxWidth="lg" sx={{ my: 10, mt: 9 }}>
      <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showStatus={false}>
        {data &&
          data.map((obj) => {
            const { metadata, id } = obj;
            return (
              <MainFeaturedPost
                content={String(metadata.content).slice(0, 80)}
                title={metadata.name}
                img={metadata.media[0].original.url}
                key={id}
                id={id}
              />
            );
          })}
      </Carousel>
      <Trendings />
    </Container>
  );
};

export default HomePage;
