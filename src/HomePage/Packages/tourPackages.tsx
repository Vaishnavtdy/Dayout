import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './tourPackages.css';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import dummy from '../assets/couple.jpg'
interface DayPackage {
    numberOfDays: number;
    amount: string;
  }
  
  interface TourPackage {
    name: string;
    rate: string;
    description: string;
    imageUrl: string;
    tripOutline: string;
    tripInstruction: string;
    tripIncludes: string;
    daysPackages: DayPackage[];
  }
  

const TourPackages: React.FC = () => {
  const fontSizeIncrement = 2;
  const [data, setData] = useState<TourPackage[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4561/api/tour-packages');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container-fluid">
      <h1 className="heading">OUR PACKEGES</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={dummy} alt={`slide_image_${index + 1}`} />
            {/* <img src={item.imageUrl} alt={`slide_image_${index + 1}`} /> */}
            <div className="slide-overlay">
            <h1 style={{ fontSize: `${fontSizeIncrement}2px` }}>{item.name}</h1>
      <p style={{ fontSize: `${fontSizeIncrement}1px` }}>{item.rate}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TourPackages;
