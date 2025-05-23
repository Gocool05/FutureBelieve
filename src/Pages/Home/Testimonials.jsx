import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Testimonials = () => {


    const[test,setTest]= useState('');

    useEffect(()=>{
        const fetchTestimonials = async () =>{
            try {
                const formData = new FormData();
                formData.append('process', 'testimonials');
        
                const response = await axios.post(
                  'https://www.futurebelieve.in/index.php/siteapi',
                  formData,
                  {
                    headers: {
                      'Content-Type': 'multipart/form-data',
                    },
                  }
                );
        
                console.log("Raw response: ", response.data); 
                  setTest(response.data)
              } catch (error) {
                console.error('Error fetching videos:', error);
              }
            };
        
            fetchTestimonials();
          }, []);
        //   console.log(test,'Testimonial')

  return (
   <>
   <div className=" flex items-center justify-center ">
    <div className="w-full border-gray-200 px-5 py-16 md:py-24 text-gray-800">
        <div className="w-full max-w-6xl mx-auto">
            <div className=" text-center max-w-xl mx-auto" data-aos="zoom-in">
                <h1 className="text-6xl md:text-7xl font-bold mb-5 text-purple-800">What people <br/>are saying.</h1>
                <h3 className="text-xl mb-5 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                <div className="text-center mb-10">
                    <span className="inline-block w-1 h-1 rounded-full bg-purple-800 ml-1"></span>
                    <span className="inline-block w-3 h-1 rounded-full bg-purple-800 ml-1"></span>
                    <span className="inline-block w-40 h-1 rounded-full bg-purple-800"></span>
                    <span className="inline-block w-3 h-1 rounded-full bg-purple-800 ml-1"></span>
                    <span className="inline-block w-1 h-1 rounded-full bg-purple-800 ml-1"></span>
                </div>
            </div>
            <div className="-mx-3 md:flex items-start">

                <div className="px-3 md:w-1/3 ">

                    <div data-aos='fade-down-right'  className="border-l-8  border-purple-700 bg-purple-200 w-full mx-auto rounded-lg  border  p-5 text-gray-950 font-light mb-6 ">
                        <div className="w-full flex mb-4 items-center">
                            <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                <img src="/male.png" alt=""/>
                            </div>
                            <div className="flex-grow pl-3">
                                <h6 className="font-bold text-sm uppercase text-purple-700">Kenzie Edgar.</h6>
                            </div>
                        </div>
                        <div className="w-full">
                            <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-purple-900 mr-1">"</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti.<span className="text-lg leading-none italic font-bold text-purple-900 ml-1">"</span></p>
                        </div>
                    </div>

                    <div data-aos='fade-down-right' data-aos-delay="300" className="w-full mx-auto rounded-lg bg-purple-200 border border-l-8 border-purple-700 p-5 text-gray-950 font-light mb-6 ">
                        <div className="w-full flex mb-4 items-center">
                            <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                <img src="/female.png" alt=""/>
                            </div>
                            <div className="flex-grow pl-3">
                                <h6 className="font-bold text-sm uppercase text-purple-700">Stevie Tifft.</h6>
                            </div>
                        </div>
                        <div className="w-full">
                            <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-purple-900 mr-1">"</span>Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Dolore quod necessitatibus, labore sapiente, est, dignissimos ullam error ipsam sint quam tempora vel.<span className="text-lg leading-none italic font-bold text-purple-900 ml-1">"</span></p>
                        </div>
                    </div>

                </div>

                <div className="px-3 md:w-1/3">

                    <div data-aos='fade-down-right' data-aos-delay="100" className="w-full mx-auto rounded-lg bg-purple-200 border border-l-8 border-purple-700 p-5 text-gray-950 font-light mb-6">
                        <div className="w-full flex mb-4 items-center">
                            <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                <img src="/female.png" alt=""/>
                            </div>
                            <div className="flex-grow pl-3">
                                <h6 className="font-bold text-sm uppercase text-purple-700">Tommie Ewart.</h6>
                            </div>
                        </div>
                        <div className="w-full">
                            <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-purple-900 mr-1">"</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, obcaecati ullam excepturi dicta error deleniti sequi.<span className="text-lg leading-none italic font-bold text-purple-900 ml-1">"</span></p>
                        </div>
                    </div>

                    <div data-aos='fade-down-right' data-aos-delay="400" className="w-full mx-auto rounded-lg bg-purple-200 border border-l-8 border-purple-700 p-5 text-gray-950 font-light mb-6">
                        <div className="w-full flex mb-4 items-center">
                            <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                <img src="/male.png" alt=""/>
                            </div>
                            <div className="flex-grow pl-3">
                                <h6 className="font-bold text-sm uppercase text-purple-700">Charlie Howse.</h6>
                            </div>
                        </div>
                        <div className="w-full">
                            <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-purple-900 mr-1">"</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto inventore voluptatum nostrum atque, corrupti, vitae esse id accusamus dignissimos neque reprehenderit natus, hic sequi itaque dicta nisi voluptatem! Culpa, iusto.<span className="text-lg leading-none italic font-bold text-purple-900 ml-1">"</span></p>
                        </div>
                    </div>

                </div>

                <div className="px-3 md:w-1/3">

                    <div data-aos='fade-down-right' data-aos-delay="200" className="w-full mx-auto rounded-lg bg-purple-200 border border-l-8 border-purple-700 p-5 text-gray-950 font-light mb-6">
                        <div className="w-full flex mb-4 items-center">
                            <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                <img src="/male.png" alt=""/>
                            </div>
                            <div className="flex-grow pl-3">
                                <h6 className="font-bold text-sm uppercase text-purple-700">Nevada Herbertson.</h6>
                            </div>
                        </div>
                        <div className="w-full">
                            <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-purple-900 mr-1">"</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, voluptatem porro obcaecati dicta, quibusdam sunt ipsum, laboriosam nostrum facere exercitationem pariatur deserunt tempora molestiae assumenda nesciunt alias eius? Illo, autem!<span className="text-lg leading-none italic font-bold text-purple-900 ml-1">"</span></p>
                        </div>
                    </div>

                    <div data-aos='fade-down-right' data-aos-delay="500" className="w-full mx-auto rounded-lg bg-purple-200 border border-l-8 border-purple-700 p-5 text-gray-950 font-light mb-6">
                        <div className="w-full flex mb-4 items-center">
                            <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                <img src="/female.png" alt=""/>
                            </div>
                            <div className="flex-grow pl-3">
                                <h6 className="font-bold text-sm uppercase text-purple-700">Kris Stanton.</h6>
                            </div>
                        </div>
                        <div className="w-full">
                            <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-purple-900 mr-1">"</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto, explicabo, cupiditate quas totam!<span className="text-lg leading-none italic font-bold text-purple-900 ml-1">"</span></p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
</div>
   </>
  )
}

export default Testimonials