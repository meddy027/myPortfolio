import React from 'react';
import { Data } from './Data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/swiper.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './ref.css';

const Ref = () => {
  return (
    <div className='reference_content'>
      <h2 className="section__title">Reviews</h2>
    <div className='testimonials'>
      <Swiper
        direction="horizontal"
        grabCursor={true}
        loop={true}
        spaceBetween={24}
        pagination={{
            clickable: true
        }}
        navigation={true}

        breakpoints={{
            576: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 48,
            }
        }}
        modules={[Pagination,Navigation]}
        className="ref_container"
      >
        {Data.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide className="ref_card" key={id}>
              <img src={image} alt="" className="ref_img" />
              <h3 className="ref_name">{title}</h3>
              <p className="ref_desc">{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
     
    </div>
   
    </div>
    
  );
};

export default Ref;
