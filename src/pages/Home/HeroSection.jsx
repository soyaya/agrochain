import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    {
      id: 1,
      src: require('../../assets/constructfarm.jpg'),
      alt: "Slide 1",
      description: "Welcome to AgroChain!",
    },
    {
      id: 2,
      src: require('../../assets/fishs.jpg'),
      alt: "Slide 2",
      description: "Revolutionizing Agriculture with Technology.",
    },
    {
      id: 3,
      src: require('../../assets/train.jpg'),
      alt: "Slide 3",
      description: "Sustainability Meets Innovation.",
    },
  ];

  return (
    <div className="w-full h-screen bg-gray-100">
      <Slider {...settings} className="w-full h-full">
        {slides.map((slide) => (
          <div key={slide.id} className="relative">
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-screen object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-4xl md:text-6xl text-white font-bold text-center">
                {slide.description}
              </h1>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSection;
