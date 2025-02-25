import React from 'react'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const Ads = () => {
    const [opacities, setOpacities] = React.useState([])
    const [sliderRef] = useKeenSlider({
        loop: true,
        mode: "free",
        slides: { origin: "center", perView: 4, spacing: 10 },
        range: {
          min: -5,
          max: 5,
        },
        detailsChanged(s) {
            const new_opacities = s.track.details.slides.map((slide) => slide.portion)
            setOpacities(new_opacities)
          },
      })
    
      return (
        <>
            <h2 className='uppercase text-center text-purple-800 text-[3rem] z-10'> Lastest Update</h2>
        <div ref={sliderRef} className="keen-slider p-20 max-w-full">
        {[
          { id: 1, videoSrc: "video1.mp4", name: "Video 1", views: "1.2K" },
          { id: 2, videoSrc: "video2.mp4", name: "Video 2", views: "800" },
          { id: 3, videoSrc: "video3.mp4", name: "Video 3", views: "2.5K" },
          { id: 4, videoSrc: "video4.mp4", name: "Video 4", views: "3.1K" },
          { id: 5, videoSrc: "video5.mp4", name: "Video 5", views: "4.0K" },
          { id: 6, videoSrc: "video6.mp4", name: "Video 6", views: "5.7K" },
        ].map((item) => (
          <div
            key={item.id}
            className="keen-slider__slide h-full bg-purple-500 text-white text-center flex flex-col justify-between p-2 relative"
          >
            {/* Viewers Count */}
            <span className="absolute z-30 top-2 left-2 bg-black/50 text-white px-2 py-1 text-sm rounded">
              👁 {item.views}
            </span>
      
            {/* Video */}
            <video
              src={item.videoSrc}
              className="w-full h-full object-cover rounded-lg"
              controls
            />
      
            {/* Video Name */}
            <p className="text-lg mt-2">{item.name}</p>
          </div>
        ))}
      </div>
        </>
      
      )
}

export default Ads