import React from 'react'

// import Swiper core and required modules
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../HeroSection/HeroSection.css';
import Navbar from '../Navbar/Navbar';

const HeroSection = () => {
  return (
    <>
     <Navbar />
    
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{
        delay: 5000,
      }}
    >
      <SwiperSlide><div className='slide1'>

      </div></SwiperSlide>
      <SwiperSlide><div className='slide2'>

      </div></SwiperSlide>
      <SwiperSlide><div className='slide3'></div></SwiperSlide>
      <SwiperSlide><div className='slide4'></div></SwiperSlide>
    </Swiper>
 </> );
};

export default HeroSection;
