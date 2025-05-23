import React from 'react'





const Contact = () => {

  const [name, setName] = React.useState('');
  const [emailId, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');



const handleSubmit = async (e) => {
  e.preventDefault();
  // console.log(name, emailId, message);

//   if (name && emailId && message) {
//     try {
//       // Normal POST request using axios
//       const res = await api.post('/api/contacts', {
//         data:{
//           Name: name,
//           Email: emailId,
//           Message: message,
//         }
//       });
//       toast.success('Your message has been sent successfully!');
//       setTimeout(()=>{
//         window.location.href='/';
//       },3000);
//     } catch (error) {
//       console.log(error);
//       // Handle error (e.g., show error message)
//       toast.error('Something went wrong, please try again later!');
//     }
//   } else {
//     toast.error('Please fill all the requipurple-700 fields');
//   }
};
  return (
<>
<div className="keen-slider__slide relative">
    {/* Image */}
    <img className="object-cover w-full h-[400px]" src="https://wallpapers.com/images/hd/black-and-purple-background-59cafmgzv7dbcv3x.jpg" alt="" />

    {/* Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-70"></div>

    {/* Centepurple-700 Text */}
    <div className='absolute inset-0 flex flex-col items-center text-center uppercase justify-center'>
    <h2 className=" text-white text-5xl  font-bold z-10">
    Contact Us
      </h2>

      <h3 className='text-purple-600 text-2xl opacity-40 font-bold z-10'>Get in touch with us</h3>
    </div>
  </div>
    <section className="" id="contact">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="flex items-stretch justify-center">
            <div className="grid md:grid-cols-2">
              <div className="h-full pr-6">
                <p className="mt-3 mb-12 text-lg text-justify sm:text-left text-black opacity-80 ">
                  At FutureBelieve, our contact support team is here to assist you
                  with any questions or planning needs. Reach out to us for
                  prompt and personalized service to ensure your event's
                  success.
                </p>
                <ul className="mb-6 md:mb-0">
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-purple-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#FFEEA9"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-bold leading-6 text-black">
                        Our Address
                      </h3>
                      <p className="text-purple-700 opacity-90">
                        242A, Arcot Rd, Vadapalani,
                      </p>
                      <p className="text-purple-700 opacity-90">
                        Chennai, Tamil Nadu 600026.<br/>(Near Vadapalani Post Office)
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-purple-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#FFEEA9"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                        <path d="M15 7a2 2 0 0 1 2 2"></path>
                        <path d="M15 3a6 6 0 0 1 6 6"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-bold leading-6 text-black">
                        Contact
                      </h3>
                      <p className="text-purple-700 opacity-90 ">
                        Mobile: (+91) 9xxxx xxxx0
                      </p>
                      <p className="text-purple-700 opacity-90 ">
                        Mail: Info@futurebelieve.com
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded  bg-purple-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#FFEEA9"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                        <path d="M12 7v5l3 3"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-bold leading-6 text-black">
                        Working hours
                      </h3>
                      <p className="text-purple-700 opacity-90 ">
                        Monday - Saturday: 10:00 AM - 8:30 PM
                      </p>
                      <p className="text-purple-700 opacity-90 ">
                        Sunday: 10:00 AM - 2:30 PM
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className=" h-fit max-w-6xl p-5 md:p-12" id="form">
                <h2 className="mb-4 text-2xl font-bold text-black">
                  Ready to Get Started?
                </h2>
                <form id="contactForm">
                  <div className="mb-6">
                    <div className="mx-0 mb-1 sm:mb-4">
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label
                          for="name"
                          className="pb-1 text-xs uppercase tracking-wider"
                        ></label>
                        <input
                          type="text"
                          id="name"
                          autocomplete="given-name"
                          placeholder="Your name"
                          className="mb-2 w-full caret-purple-700 bg-white rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-purple-700 sm:mb-0"
                          name="name"
                          onChange={(e)=>setName(e.target.value)}
                        />
                      </div>
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label
                          for="email"
                          className="pb-1 text-xs uppercase tracking-wider"
                        ></label>
                        <input
                          type="email"
                          placeholder="Your email address"
                          className="mb-2 w-full rounded-md border caret-purple-700 bg-white border-gray-400 py-2 pl-2 pr-4 shadow-md text-purple-700 sm:mb-0"
                          name="email"
                          onChange={(e) => setEmail(e.target.value)} 
                        />
                      </div>
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        for="textarea"
                        className="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <textarea
                        id="textarea"
                        name="textarea"
                        cols="30"
                        rows="5"
                        placeholder="Write your message..."
                        className="mb-2 w-full rounded-md border caret-purple-700  bg-white  py-2 pl-2 pr-4 shadow-md text-purple-700 sm:mb-0"
                        onChange={(e)=>setMessage(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                  <div className="text-center">
                    <button onClick={handleSubmit} className="SliderButton w-full text-white cursor-pointer uppercase bg-purple-800 px-4 py-1 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#6b21a8,-0.5rem_-0.5rem_#6b21a8] hover:bg-purple-50 hover:text-black transition">
                      Send message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3517.31623056104!2d80.21254447507785!3d13.050874787271807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267f622160271%3A0x3149fc03560d447!2sJGN%20Technologies!5e1!3m2!1sen!2sin!4v1740549447712!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ padding: "0px 40px 60px 40px" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      </>
  )
}

export default Contact