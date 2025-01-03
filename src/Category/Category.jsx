import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slide1 from '../../src/assets/home/slide1.jpg'
import slide2 from '../../src/assets/home/slide2.jpg'
import slide3 from '../../src/assets/home/slide3.jpg'
import slide4 from '../../src/assets/home/slide4.jpg'
import slide5 from '../../src/assets/home/slide5.jpg'
import SectionTitle from '../components/SectionTitle';

const Category = () => {
    return (
      <section>
        <SectionTitle 
        heading="Order Online"
        subHeading="From 11am to 1pm"
        ></SectionTitle>
        
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper mb-10"
        >
            <SwiperSlide>
                <img src={slide1} alt="" />
                <h2 className='text-4xl text-white text-center -mt-20 uppercase'>Salads</h2>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide2} alt="" />
                <h2 className='text-4xl text-white text-center -mt-20 uppercase'>pizza</h2>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide3} alt="" />
                <h2 className='text-4xl text-white text-center -mt-20 uppercase'>Soup</h2>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide4} alt="" />
                <h2 className='text-4xl text-white text-center -mt-20 uppercase'>Desserts</h2>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide5} alt="" />
                <h2 className='text-4xl text-white text-center -mt-20 uppercase'>Salads</h2>
            </SwiperSlide>
        </Swiper>
      </section>
    );
};

export default Category;