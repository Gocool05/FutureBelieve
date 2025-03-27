import React from "react";
import Slider from "react-slick";

const HomeCarousel = () => {
  var settings = {
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    fade: true,
    swipeToSlide: true,
    cssEase: "linear",
  };

  const slides = [
    {
      id: 1,
      img: "/BG.jpg",
      title: "Promote Your Videos to Millions of Students",
      subtitle: "Get More Views On Your Video, Sign up now and Get Seen",
      logo: "/PlayStore Png.png",
    },
    {
      id: 2,
      img: "/BG.jpg",
      title: "Boost Your Video Reach Instantly",
      subtitle: "Join now and increase your visibility",
    },
  ];

  return (
    <>
      <div className="relative w-full overflow-x-hidden">
        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id} className="h-screen relative">
              {/* Background Image */}
              <img
                className="object-cover w-full h-full"
                src={slide.img}
                alt=""
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-70"></div>

              {/* Centered Text */}
              <div className="absolute inset-0 flex flex-col p-3 items-center text-center justify-center">
                <h2 className="text-white text-4xl md:text-[4rem] font-bold z-10 uppercase leading-tight md:leading-[4.5rem]">
                  {slide.title}
                </h2>
                <h3 className="text-purple-600 text-lg md:text-2xl opacity-40 font-bold z-10 leading-snug md:leading-8">
                  {slide.subtitle}
                </h3>
                {slide?.logo && (
                  <div className="">
                    <img
                      className="h-12 md:h-20"
                      src={slide.logo}
                      alt="Playstore Logo png"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default HomeCarousel;
