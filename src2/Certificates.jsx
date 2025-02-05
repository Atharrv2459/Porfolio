import java from "./Certificates/Java.jpg"
import dsa from "./Certificates/Dsa.jpg"
import oracle1 from "./Certificates/Oracle1.jpg"
import oracle2 from "./Certificates/Oracle2.jpg"
import oracle3 from "./Certificates/Oracle3.jpg"
import oracle4 from "./Certificates/Oracle4.jpg"




import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import basic Swiper styles
import "swiper/css/navigation"; // Navigation (arrows)
import "swiper/css/pagination"; // Pagination (dots)
import { Navigation, Pagination } from "swiper/modules";

// Array of images (Replace with your actual image URLs)
const images = [
  java,dsa,oracle1,oracle2,oracle3,oracle4]

const ImageSlider = () => {
  return (<div className="relative top-96">
    <div id="Certifications" className="text-center text-7xl text-yellow-400 relative top-72"> My certifications</div>    
    <div className="w-1/2 mx-auto relative top-96">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        className="rounded-lg shadow-lg"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Slide ${index}`} className="w-full h-auto rounded-lg" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  );
};

export default ImageSlider;
