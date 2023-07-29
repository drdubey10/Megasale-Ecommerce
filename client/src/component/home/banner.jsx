import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { BannerData } from '../../constant/data';
import { styled } from '@mui/material';


const BannerImage = styled('img')(({theme})=>({
  height: '480px',
  width: '100%',
  [theme.breakpoints.down('md')]:{
    objectFit: 'cover',
    height: '180px'
    
  }
}));

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    autoplay: true,
    autoplaySpeed: 4000
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    autoplay: true,
    autoplaySpeed: 4000
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    autoplay: true,
    autoplaySpeed: 4000
  }
};



function Banner() {
  return (
    <Carousel responsive={responsive}
    swipeable={false}
    draggable={false}
    infinite={true}
    itemClass="carousel-item-padding-40-px"
    containerClass="carousel-container"
    dotListClass="custom-dot-list-style"
    autoPlay={true}
    autoPlaySpeed={4000}
    >
      {BannerData.map((data, index) => (
        <BannerImage src={data.url} key={index} alt={`Banner ${index}`} />
      ))}
    </Carousel>
  );
}

export default Banner;
