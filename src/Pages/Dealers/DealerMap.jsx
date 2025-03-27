import React, { useState } from "react";

const countries = [
  {
    name: "India",
    image: "/Maps/india-map.jpg",
    states:[  
      { name: "Tamil Nadu", image: "/Maps/TN.jpg", districts:[
      { name: "Chennai",src:'/male.png', occupied: true, dealer: "ABC Traders",dob:"24-02-2001",contact:'88xxxx8872' },
      { name: "Coimbatore", occupied: false, dealer: null },
      { name: "Vellore",src:'/male.png', occupied: true, dealer: "ABC Traders",dob:"24-02-2001",contact:'88xxxx8872' },
    ]
  },
  { name: "Karnataka", image: "/Maps/KA.jpg", districts: [
      { name: "Bangalore", occupied: true, dealer: "XYZ Suppliers",dob:'24-02-2001',contact:'88xxxx8872' },
      { name: "Mysore", occupied: false, dealer: null },
    ]
  },
  { name: "Kerala", image: "/Maps/KL.jpg", districts: [
      { name: "Bangalore", occupied: true, dealer: "XYZ Suppliers",dob:'24-02-2001',contact:'88xxxx8872' },
      { name: "Mysore", occupied: false, dealer: null },
    ]
  },
  { name: "Telangana", image: "/Maps/TE.jpg", districts: [
      { name: "Bangalore", occupied: true, dealer: "XYZ Suppliers",dob:'24-02-2001',contact:'88xxxx8872' },
      { name: "Mysore", occupied: false, dealer: null },
    ]
  },
  { name: "Maharastra", image: "/Maps/MA.jpg", districts: [
      { name: "Bangalore", occupied: true, dealer: "XYZ Suppliers",dob:'24-02-2001',contact:'88xxxx8872' },
      { name: "Mysore", occupied: false, dealer: null },
    ]
  },
  { name: "Andhra Pradhesh", image: "/Maps/AP.jpg", districts: [
    { name: "Bangalore", occupied: true, dealer: "XYZ Suppliers",dob:'24-02-2001',contact:'88xxxx8872' },
    { name: "Mysore", occupied: false, dealer: null },
  ]
}
]
  },
  {
    name:'United ARAB EMIRATES',image:'/Maps/UAE.gif',
    
  },
  {
    name:'United States',image:'/Maps/US.gif',
    
  },
  {
    name:'China',image:'/Maps/china.gif',
    
  },

];

const DealerMap = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);

  return ( 
    <div className="p-4 relative  bg-purple-50" >
      {/* <h1 className="text-3xl bg-purple-600 p-3 text-white text-center uppercase font-bold mb-4">Dealers </h1> */}
      {/* Country Selection */}
      {!selectedCountry ? (
        <div className="flex flex-wrap gap-4 " >
          {countries.map((country) => (
            <div
              key={country.name}
              className="cursor-pointer shadow-lg p-3 h-full  rounded-lg border-2 border-b-4 border-r-4 border-purple-500 " 
              onClick={() => setSelectedCountry(country)}
            >
              <img
                src={country.image}
                alt={country.name}
                className="w-fit  md:max-h-96 h-full object-cover border-purple-500 border-2 rounded-lg shadow"
              />
              <p className="text-center p-2 text-xl text-purple-950 uppercase mt-2 font-bold">
                {country.name}
              </p>
            </div>
          ))}
        </div>
      ) : !selectedState ? (
        // State Selection
        <div>
          <button
            onClick={() => setSelectedCountry(null)}
            className="mb-4 px-4 py-2 bg-gray-300 rounded"
          >
            Back
          </button>
          <h2 className="text-3xl bg-purple-600 p-3 text-white text-center uppercase font-bold mb-4">
            {selectedCountry.name} - States
          </h2>
          <div className="flex flex-wrap gap-4">
            {selectedCountry.states.map((state) => (
              <div
                key={state.name}
                className="cursor-pointer shadow-lg p-3 h-full rounded-lg border-2 border-b-4 border-r-4 border-purple-500"
                onClick={() => setSelectedState(state)}
              >
                <img
                  src={state.image}
                  alt={state.name}
                  className="w-fit max-h-96 h-full border-purple-500 border-2 object-cover rounded-lg shadow"
                />
                <p className="text-center  p-2 text-purple-950 text-xl uppercase mt-2 font-bold">
                  {state.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // District Selection
        <div>
          <button
            onClick={() => setSelectedState(null)}
            className="mb-4 px-4 py-2 bg-gray-300 rounded"
          >
            Back
          </button>
          <h2 className="text-3xl bg-purple-700 p-3 text-white text-center uppercase font-bold mb-4">
            {selectedState.name} - Districts
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {selectedState.districts.map((district) => (
              <div
                key={district.name}
                className="border-b-4 border-r-4 border-2 border-purple-700 rounded-lg shadow-xl"
              >
                <h3 className="text-lg font-bold bg-purple-700 text-center text-white uppercase ">{district.name}</h3>
                {district.occupied ? (
                  <div className="p-3 ">         
                  <img
                  src={district.src}
                  alt={district.name}
                  className="mb-2 rounded h-24"
                />
                  <p className="text-purple-950 font-bold">Dealer Name: <span className="font-normal">{district.dealer}</span></p>
                  <p className="text-purple-950 font-bold">DOB: <span className="font-normal">{district.dob}</span></p>
                  <p className="text-purple-950 font-bold">Contact: <span className="font-normal">{district.contact}</span></p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center p-3 h-full w-full">
                     <img
                        src='/reg.png'
                        alt='Register to become a dealer'
                        className="mb-2 rounded h-36"
                      />
                  <button className="mt-2 px-4 py-2  bg-purple-800 text-white rounded">
                    Register
                  </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DealerMap;
