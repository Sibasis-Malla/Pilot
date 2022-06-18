import React from 'react';
import MainFeaturedPost from '../components/home/MainFeaturedPost';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Trendings from '../components/home/Trendings';
import { Container } from '@mui/material';

const HomePage = () => {
  return (
    <Container maxWidth="lg" sx={{ my: 10, mt: 9 }}>
      <Carousel autoPlay={true} infiniteLoop={true} showStatus={false}>
        <MainFeaturedPost />
        <MainFeaturedPost />
        <MainFeaturedPost />
      </Carousel>
      <Trendings />
    </Container>
  );
};

export default HomePage;
