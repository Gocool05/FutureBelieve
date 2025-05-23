import React from 'react'

const Hero = () => {

  return (
    <>
    <div data-aos="flip-up" className="flex h-full py-20 justify-center items-center  overflow-x-hidden">
    <div className="text-center max-w-6xl mx-2 md:mx-10">
        <p className="my-3 text-sm  uppercase">We Future Believe</p>
        <h2 className=" text-6xl md:text-7xl font-bold mb-5 text-purple-800  ">
        A Few Words About Us
        </h2>
        <div>
            <p className="max-w-2xl mx-auto my-2 text-base text-gray-500 md:leading-relaxed md:text-xl ">
            We've been creating strong brands for both socially and environmentally conscious companies, thus creating a strong footprint for our clients.
            </p>
        </div>
    </div>
</div>



     <section  className="relative bg-gradient-to-br from-blue-900 to-purple-800 text-white overflow-hidden">
     <div className="absolute inset-0 bg-black opacity-90"></div>
            <div className="absolute inset-0 bg-cover bg-center opacity-30 rotate-180" style={{backgroundImage:"url(/BG.jpg)"}} >
            </div>
            
            <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between">
       
                    <div className="w-full md:w-1/2 mb-12 md:mb-0" data-aos="fade-up-right">
                        {/* <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight"> Innovate.<br>Transform.<br>Succeed. </h1> */}
                        <p className="text-xl mb-8 text-gray-300">Empowering businesses with cutting-edge solutions for a digital future.</p>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <a href="#" className="bg-white text-blue-900 font-semibold px-8 py-3 rounded-full hover:bg-blue-100 transition duration-300 text-center">Download Now</a>
                            <a href="/about-us" className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-blue-900 transition duration-300 text-center">Learn More</a>
                        </div>
                    </div>
                    
              
                    <div className="w-full md:w-1/2 md:pl-12" data-aos="fade-up-left">
                        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-2xl">
                            <h2 className="text-2xl text-purple-500 font-semibold mb-6">Why FutureBelieve?</h2>
                            <ul className="space-y-4">
                                <li className="flex items-center">
                                    <svg className="w-6 h-6 mr-3 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                    <span>We have over 1,00,000+ students in our app</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-6 h-6 mr-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                                    <span>The most effective and secured video branding advertising solution</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-6 h-6 mr-3 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>
                                    <span>Creating Strong Brands Online</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
           
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
                </svg>
            </div>
        </section>



<section className="overflow-x-hidden text-gray-700 body-font" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
  <h3 className="flex justify-center text-6xl md:text-7xl font-bold  text-purple-800">
    Why Us?
  </h3>
  <div className="container px-5 py-12 mx-auto">
    <div className="flex flex-wrap text-center justify-center">

    <div className="p-4 md:w-1/4 sm:w-1/2" data-aos="zoom-out-right">
        <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div className="flex justify-center">
            <img src="https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp" className="w-32 mb-3 filter grayscale invert invert-20 drop-shadow-xl"/>
          </div>
          <h2 className="title-font font-regular text-2xl text-purple-900 font-semibold">1,00,000+ students</h2>
        </div>
      </div>


      <div className="p-4 md:w-1/4 sm:w-1/2" data-aos="zoom-out-up">
        <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div className="flex justify-center">
            <img  src="https://image3.jdomni.in/banner/13062021/16/7E/7E/5A9920439E52EF309F27B43EEB_1623568010437.png?output-format=webp" className="w-32 mb-3 filter grayscale invert invert-20 drop-shadow-xl "/>
          </div>
          <h2 className="title-font font-regular text-2xl text-purple-900 font-semibold">Short Time Income</h2>
        </div>
      </div>


      <div className="p-4 md:w-1/4 sm:w-1/2" data-aos="zoom-out-down">
        <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div className="flex justify-center">
            <img src="https://image2.jdomni.in/banner/13062021/3E/57/E8/1D6E23DD7E12571705CAC761E7_1623567977295.png?output-format=webp" className="w-32 mb-3 filter grayscale invert invert-20 drop-shadow-xl"/>
          </div>
          <h2 className="title-font font-regular text-2xl text-purple-900 font-semibold">Earn Money</h2>
        </div>
      </div>


      <div className="p-4 md:w-1/4 sm:w-1/2" data-aos="zoom-out-left">
        <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div className="flex justify-center">
            <img src="https://image3.jdomni.in/banner/13062021/58/97/7C/E53960D1295621EFCB5B13F335_1623567851299.png?output-format=webp" className="w-32 mb-3 filter grayscale invert invert-20 drop-shadow-xl"/>
          </div>
          <h2 className="title-font font-regular text-2xl text-purple-900 font-semibold">Affordable Products</h2>
        </div>
      </div>

    </div>
  </div>
</section>
</>
  )
}

export default Hero