import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageSlider = ({ imageUrls }) => {
  return (
    <div>
      <Carousel
        showArrows={true}
        showIndicators={true}
        infiniteLoop={true}
        dynamicHeight={false}
        autoPlay={true}
      >
        {imageUrls.map((url) => (
          <img
            loading="lazy"
            srcSet={url}
            className="w-full object-contain aspect-[2.94] max-md:max-w-full"
          />
        ))}
      </Carousel>
    </div>
  );
};

export default ImageSlider;
