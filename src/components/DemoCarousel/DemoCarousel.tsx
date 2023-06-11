import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import MainPage from '../MainPage/MainPage';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const DemoCarousel = () => {
    return (
        <Carousel showStatus={false} showThumbs={false}>
            <MainPage />
            <MainPage />
            <MainPage />
        </Carousel>
    );
};

export default DemoCarousel;
