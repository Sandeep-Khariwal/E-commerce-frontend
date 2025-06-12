import React, { useEffect } from "react";

// import Swiper core and required modules
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import '../HeroSection/HeroSection.css';

import axios from "axios";

import slide1_img from "../assets/slide1.png";
import slide2_img from "../assets/slide2.png";
import slide3_img from "../assets/Slide3.png";
import slide4_img from "../assets/slide4.png";

import Card from "../Card/Card";
import Navbar from "../Navbar/Navbar";

const HeroSection = () => {
  const getData = async () => {
    const data = await axios
      .get("https://fakestoreapi.com/products")
      .then((response) => response.data);

    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
     <Navbar/>
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{
        delay: 5000,
      }}
    >
      <SwiperSlide><div className='slide1'>

      <Navbar/>

      </div></SwiperSlide>
      <SwiperSlide><div className='slide3'></div></SwiperSlide>
      <SwiperSlide><div className='slide4'></div></SwiperSlide>
    </Swiper>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 5000,
        }}
        className="swip"
      >
        <SwiperSlide>
          <div className="slide1">
            <div className="section-left">
              <div className="heading">#Big Fashion Sale</div>
              <div className="hero-description">Limited Time Offer ! </div>
              <div className="hero-description2">Up to 50% OFF !</div>
              <div className="quote">Redefine Your Everyday Style</div>
            </div>
            <div className="section-right">
              <img src={slide1_img} alt="" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide2">
            <div className="section-left">
              <div className="heading">#Big Perfume Sale</div>
              <div className="hero-description">Limited Time Offer ! </div>
              <div className="hero-description2">Up to 80% OFF !</div>
              <div className="quote">Redefine Your Everyday Fragrance</div>
            </div>
            <div className="section-right">
              <img src={slide2_img} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide3">
            <div className="section-left">
              <div className="heading">#Big Kids Toys Sale</div>
              <div className="hero-description">Limited Time Offer ! </div>
              <div className="hero-description2">Up to 60% OFF !</div>
              <div className="quote">Redefine Your Everyday Kid toys</div>
            </div>
            <div className="section-right">
              <img src={slide3_img} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide4">
            <div className="section-left">
              <div className="heading">#Big Grocery Sale</div>
              <div className="hero-description">Limited Time Offer ! </div>
              <div className="hero-description2">Up to 40% OFF !</div>
              <div className="quote">Redefine Your Everyday Food</div>
            </div>
            <div className="section-right">
              <img src={slide4_img} alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div>
        <Card />
      </div>
    </>
  );
};

export default HeroSection;
