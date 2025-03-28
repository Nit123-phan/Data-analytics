import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { motion } from "framer-motion";

const images = [
  { src: "/img/ploy.png", name: "65010295 Natnichar Sampoonnachot"},
  { src: "/img/oak.png", name: "65010356 Tin Yamephan"},
  { src: "/img/petch.png", name: "65010556 Bovornpot Puangthong"},
  { src: "/img/chain.png", name: "65010659 Phongpon Wiwatsantiwong"},
];

export default function Carousel3D() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="carousel-container"
    >
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1.5}
        spaceBetween={20} 
        coverflowEffect={{
          rotate: 30, 
          stretch: 0,
          depth: 150,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1.2 }, // มือถือ
          768: { slidesPerView: 1.5 }, // Tablet
          1024: { slidesPerView: 2 }, // Desktop
        }}
        modules={[EffectCoverflow, Pagination]}
        className="swiper-container"
      >
        {/* ✅ ย้าย SwiperSlide มาไว้ภายใน Swiper */}
        {images.map((item, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className="image-card">
              <img src={item.src} alt={item.name} className="image" />
              <p className="image-title">{item.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}
