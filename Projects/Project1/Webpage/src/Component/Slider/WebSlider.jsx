import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './WebSlider.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function WebSlider() {
    return (
        <>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><img src="https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/09/hero-section-bg.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://images.pexels.com/photos/5409710/pexels-photo-5409710.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://images.pexels.com/photos/5409755/pexels-photo-5409755.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>

            </Swiper>
        </>
    );
}
