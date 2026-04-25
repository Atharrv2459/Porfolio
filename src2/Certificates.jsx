import java from "./Certificates/Java.jpg";
import dsa from "./Certificates/Dsa.jpg";
import oracle1 from "./Certificates/Oracle1.jpg";
import oracle2 from "./Certificates/Oracle2.jpg";
import oracle3 from "./Certificates/Oracle3.jpg";
import oracle4 from "./Certificates/Oracle4.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const images = [java, dsa, oracle1, oracle2, oracle3, oracle4];

const ImageSlider = () => {
  return (
    <section id="certifications" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Certifications
          </h2>
          <p className="hidden text-sm text-slate-400 md:block">
            Swipe or use arrows to navigate.
          </p>
        </div>

        <div className="mt-8">
          <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={20}
              slidesPerView={1}
              loop
              className="rounded-xl"
            >
              {images.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt={`Certification ${index + 1}`}
                    className="w-full h-auto rounded-xl"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
