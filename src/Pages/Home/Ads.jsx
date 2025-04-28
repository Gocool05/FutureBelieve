import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import axios from 'axios';

const Ads = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const formData = new FormData();
        formData.append('process', 'videolist');

        const response = await axios.post(
          'https://www.futurebelieve.in/index.php/siteapi',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );

        // console.log("Raw response: ", response.data); 

        if (response.data) {
          const rawData = response.data;

          const videoArray = Object.keys(rawData)
            .filter((key) => !isNaN(key))
            .map((key) => {
              const item = rawData[key];
              return {
                id: key,
                video_link: item.video,
                name: item.title,
                views: item.watched_nos,
              };
            });

          setVideos(videoArray);
        } else {
          console.warn('Unexpected response format:', response.data);
        }
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);
  // console.log(videos,'Videos')

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <h2 className='text-6xl md:text-7xl font-bold mb-5 text-center text-purple-800 overflow-hidden'>
        Upcoming Ads
      </h2>
      <div className='justify-center items-center flex overflow-x-hidden'>
        <div className='max-w-6xl'>
          <Slider {...settings} className='py-10'>
            {videos?.map((item) => (
              <div
                key={item.id}
                className='w-full flex gap-5 relative text-white text-center px-4'
              >
                {/* {console.log(item,'items')} */}
                {/* Viewers Count */}
                <span className='absolute z-50 top-3 left-4 bg-purple-800 text-white font-semibold px-2 py-1 text-sm rounded'>
                  👁 {item?.views || '0'}
                </span>

                {/* Video */}
                <video
                  src={item?.video_link}
                  className='w-full h-auto object-cover rounded-t-xl'
                  autoPlay
                  muted
                  loop
                  controls
                />

                {/* Video Name */}
                <p className='text-lg rounded-b-xl bg-purple-800 py-1'>{item?.name || 'Video'}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Ads;
