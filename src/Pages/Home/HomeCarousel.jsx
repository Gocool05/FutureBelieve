import React from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react' // import from 'keen-slider/react.es' for to get an ES module



const HomeCarousel = () => {
    const [opacities, setOpacities] = React.useState([])
    const [sliderRef, instanceRef] = useKeenSlider(
        {
          slideChanged() {
            console.log('slide changed')
          },
          detailsChanged(s) {
            const new_opacities = s.track.details.slides.map((slide) => slide.portion)
            setOpacities(new_opacities)
          },
        },
        [
          // add plugins here
        ]
      )

  return (
<div ref={sliderRef} className="keen-slider top-0 absolute h-screen">
  <div className="keen-slider__slide relative">
    {/* Image */}
    <img className="object-cover w-full h-full" src="https://wallpapers.com/images/hd/black-and-purple-background-59cafmgzv7dbcv3x.jpg" alt="" />

    {/* Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-70"></div>

    {/* Centered Text */}
    <div className='absolute inset-0 flex flex-col items-center text-center uppercase justify-center'>
    <h2 className=" text-white text-[4.5rem]  font-bold z-10">
      Promote Your Videos to Millions<br/> of students</h2>

      <h3 className='text-purple-600 text-2xl opacity-40 font-bold z-10'>Get More Views On Your Video, Sign up now and Get Seen</h3>
    </div>
  </div>
  <div className="keen-slider__slide relative">
    {/* Image */}
    <img className="object-cover w-full h-full" src="https://wallpapers.com/images/hd/black-and-purple-background-59cafmgzv7dbcv3x.jpg" alt="" />

    {/* Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-70"></div>

    {/* Centered Text */}
    <div className='absolute inset-0 flex flex-col items-center text-center uppercase justify-center'>
    <h2 className=" text-white text-[4.5rem]  font-bold z-10">
      Promote Your Videos to Millions<br/> of students</h2>

      <h3 className='text-purple-600 text-2xl opacity-40 font-bold z-10'>Get More Views On Your Video, Sign up now and Get Seen</h3>
    </div>
  </div>
</div>

  )
}

export default HomeCarousel