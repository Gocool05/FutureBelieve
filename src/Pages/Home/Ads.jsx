import React from 'react'
import Slider from "react-slick";

const Ads = () => {

  var settings = {
    infinite: true,
    gap:10,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
         
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
<>
<h2 className='text-6xl md:text-7xl font-bold mb-5 text-center text-purple-800 overflow-hidden'>Upcoming Ads</h2>
<div className='justify-center items-center flex overflow-x-hidden'>

<div className='max-w-6xl'>
<Slider {...settings} className='py-10 '>
  {[
          { id: 1, videoSrc: "sample.mp4", name: "Video 1", views: "1.2K" },
          { id: 2, videoSrc: "sample.mp4", name: "Video 2", views: "800" },
          { id: 3, videoSrc: "sample.mp4", name: "Video 3", views: "2.5K" },
          { id: 4, videoSrc: "sample.mp4", name: "Video 4", views: "3.1K" },
          { id: 5, videoSrc: "sample.mp4", name: "Video 5", views: "4.0K" },
          { id: 6, videoSrc: "sample.mp4", name: "Video 6", views: "5.7K" },
        ].map((item) => (
          <div
            key={item.id}
            className=" w-full flex gap-5 relative   text-white text-center  px-4"
          >
            {/* Viewers Count */}
            <span className="absolute z-50 top-3 left-4 bg-purple-800 text-white font-semibold px-2 py-1 text-sm rounded">
              👁 {item.views}
            </span>
      
            {/* Video */}
            <video
              src={item.videoSrc}
              className="w-full h-auto object-cover rounded-t-xl"
              autoPlay
              muted
            />
      
            {/* Video Name */}
            <p className="text-lg rounded-b-xl bg-purple-800 py-1">{item.name}</p>
          </div>
        ))}
  </Slider>
</div>
</div>
</>
  )
}

export default Ads
