
// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import "./Swiper.css";


// import Swiper core and required modules
import SwiperCore, {
  Pagination,Navigation
} from 'swiper/core';
import { useEffect, useState } from "react";

// install Swiper modules
SwiperCore.use([Pagination,Navigation]);



const SwiperImg = ({photo}) =>{
  const [autoPhot, setAutoPhot] = useState(null)
  useEffect(() =>{
    if(photo){
      setAutoPhot(photo)
    }
  },[photo])
    return (
        <>
          <Swiper key='asdads' slidesPerView={3} spaceBetween={30} slidesPerGroup={3} loop={true} loopFillGroupWithBlank={true} pagination={{ "clickable": true}} navigation={true} className="mySwiper">
            {
              autoPhot && (
                <>
                  <SwiperSlide><img src={`${photo.img1}`} alt='IMG'/></SwiperSlide>
                  <SwiperSlide><img src={`${photo.img2}`} alt='IMG'/></SwiperSlide>
                  <SwiperSlide><img src={`${photo.img3}`} alt='IMG'/></SwiperSlide>
                  <SwiperSlide><img src={`${photo.img4}`} alt='IMG'/></SwiperSlide>
                  <SwiperSlide><img src={`${photo.img5}`} alt='IMG'/></SwiperSlide>
                  <SwiperSlide><img src={`${photo.img6}`} alt='IMG'/></SwiperSlide>
                </>
              )
            }
          </Swiper>
        </>
      )
}

export default SwiperImg