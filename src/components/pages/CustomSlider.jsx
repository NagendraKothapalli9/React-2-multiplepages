import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../App.css';



import React from 'react'
import { Box } from '@mui/material';

const CustomSlider = ({items,settings}) => {
  return (
    <Box>
<Swiper 
        spaceBetween={0}
        centeredSlides={true}
        slidesPerView={1}
        // autoplay={{
        //   delay: 3000, 
        //   disableOnInteraction: false, 
        // }}
        pagination={{
          clickable: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="swiper1"
        {...settings}
        style={{
          "--swiper-navigation-size": "18px",
         height:'250px',
         objectFit:'fill'
        }}

      >
        {items.map((item) =>(  
        <SwiperSlide>
         <img src= {item.src}  width={'70%'} height={'auto'} style={{marginLeft: '50px'}} alt='brand'/>
        </SwiperSlide>

        ) )}
      </Swiper>
    </Box>
  )
}

export default CustomSlider
