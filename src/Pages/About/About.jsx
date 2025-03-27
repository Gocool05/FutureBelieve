import React from 'react'
import Team from './Team'

const About = () => {
  return (

    <>
    <div className="keen-slider__slide relative">
    {/* Image */}
    <img className="object-cover w-full h-[400px]" src="https://wallpapers.com/images/hd/black-and-purple-background-59cafmgzv7dbcv3x.jpg" alt="" />

    {/* Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-70"></div>

    {/* Centered Text */}
    <div className='absolute inset-0 flex flex-col items-center text-center uppercase justify-center'>
    <h2 className=" text-white text-5xl  font-bold z-10">
      About Us
      </h2>

      <h3 className='text-purple-600 text-2xl opacity-40 font-bold z-10'>Who Are We?</h3>
    </div>
  </div>


    {/* About Future Believe */}
    <div className="bg-purple-50 p-1 md:p-8">
      <div className="max-w-full mx-2 md:mx-20 text-gray-950 bg-white p-8 flex flex-col gap-10 rounded-lg shadow-md">
        <div className="flex flex-wrap justify-center  items-center">
          <div className="w-full md:w-1/2 mb-4 md:mb-0 md:order-2 bg-black">
            <img
              src="https://www.futurebelieve.in/assets/site/images/logo.svg"
              alt="Brand Video Network"
              className="w-full h-48 object-fill rounded-lg shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2 md:pr-4">
            <h1 className="text-3xl uppercase font-bold mb-4 text-purple-950 ">A Few Words About Us</h1>
            <p className="text-lg mb-4">
              We've been creating strong brands for both socially and environmentally conscious companies, thus creating a strong footprint for our clients.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <img
              src="https://www.inspirus.com/sites/g/files/jclxxe431/files/2023-12/Employee%20Engagement%20is%20an%20Essential%20Strategy%20for%20Business%20Success.webp"
              alt="Engagement"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-4">
            <h2 className="text-3xl uppercase font-bold text-purple-950 mb-4">The Brand is crowded.</h2>
            <p className="text-lg mb-4">
              Thousands of brand videos are uploaded every minute. How do you stand out from the crowd and get seen? Essentially how it works is we take your brand video and push it out through our powerful network. We have over 1,00,000+ students in our app where we will display your brand video to their real audience. Through Future Believe, you can target by age, standard, gender, location, and keywords.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center">
          <div className="w-full md:w-1/2 mb-4 md:mb-0 md:order-2">
            <img
              src="https://www.inspirus.com/sites/g/files/jclxxe431/files/2023-12/Employee%20Engagement%20is%20an%20Essential%20Strategy%20for%20Business%20Success.webp"
              alt="Future Believe"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2 md:pr-4">
            <h2 className="text-3xl uppercase font-bold text-purple-950 mb-4">We focus on engagement.</h2>
            <p className="text-lg mb-4">
              A view is when a real person watches a minimum of 30 seconds of your video. The app is designed where they cannot push or stop the videos until they complete. Thus, you only pay when a real person watches your video.
            </p>
            <p className="text-lg mb-4">
              We look forward to providing you with the most effective video branding advertising solution through our app.
            </p>
          </div>
        </div>
      </div>
      </div>
    
      {/* Team */}

      <Team/>

    </>
  )
}

export default About