import React from 'react';
import { carouselData } from './data';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Class from './carousel.module.css';

export default function Carousele() {
  return (
    <div>
      <div className="relative w-full   shadow-xl overflow-hidden">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showIndicators={false}
          showThumbs={false}
        >
          {
            carouselData.map((item, index) => {
              return (
                <div key={index} className="relative h-[550px]">
                  <img src={item.image} alt="image"   className="w-full h-full object-cover "/>
                 
                  <div className="absolute bottom-20 left-108"> {/* Adjust position as needed */}
<p className="text-[30px] text-white font-bold">{item.text} </p>
</div>
                </div>
              );
            })
          }
        </Carousel>
      </div>
    </div>
  );
}