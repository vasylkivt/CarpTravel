import Image from "next/image";

import imageGallery1 from "../public/assets/gallery/1.jpeg";
import imageGallery2 from "../public/assets/gallery/2.jpeg";
import imageGallery3 from "../public/assets/gallery/3.jpeg";
import SwiperGallery from "./SwiperGallery";

export const gallery = [
  { id: imageGallery1.src, src: imageGallery1, alt: "lake in the forest" },
  {
    id: imageGallery2.src,
    src: imageGallery2,
    alt: "house by the river in the forest",
  },
  { id: imageGallery3.src, src: imageGallery3, alt: "mountain range" },
];

const Gallery = () => {
  return (
    <>
      <h2 className="uppercase mb-[24px] tablet:mb-[66px] desktop:mb-[15px]  tablet:max-desktop:text-center text-[40px] tablet:text-[67px] desktop:[98px] leading-[1.4] tablet:leading-[normal] tracking-[-1.6px] tablet:tracking-[-2.68px] desktop:tracking-[-3.92px]">
        <span className="font-thin">OUR</span>{" "}
        <span className="font-medium">GALLERY</span>
      </h2>

      <div className="flex gap-[24px] tablet:hidden">
        {gallery.map(({ src, alt, id }) => (
          <Image
            key={id}
            alt={alt}
            src={src}
            placeholder="blur"
            quality={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ))}
      </div>
      <div className="hidden tablet:block">
        <SwiperGallery />
      </div>
    </>
  );
};
export default Gallery;
