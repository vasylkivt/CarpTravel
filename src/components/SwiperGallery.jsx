"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import { gallery } from "./Gallery";
import { useState } from "react";

const SwiperGallery = () => {
  const [activeImage, setActiveImage] = useState(gallery[0].id);
  return (
    <>
      <Swiper
        spaceBetween={24}
        slidesPerView={3}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {gallery.map(({ src, alt, id }) => (
          <SwiperSlide key={src.src}>
            <Image
              className={id === activeImage ? "" : ""}
              key={id}
              alt={alt}
              src={src}
              placeholder="blur"
              quality={100}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <span className="absolute">PREV</span>
      <span className="absolute">NEXT</span>
    </>
  );
};
export default SwiperGallery;
