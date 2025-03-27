import React from "react";
import DealerMap from "./DealerMap";

const Dealers = () => {
  return (
    <>
      <div className="keen-slider__slide relative">
        {/* Image */}
        <img
          className="object-cover w-full h-[400px]"
          src="https://wallpapers.com/images/hd/black-and-purple-background-59cafmgzv7dbcv3x.jpg"
          alt=""
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>

        {/* Centered Text */}
        <div className="absolute inset-0 flex flex-col items-center text-center uppercase justify-center">
          <h2 className=" text-white text-5xl  font-bold ">Dealers Page</h2>

          <h3 className="text-purple-600 text-2xl opacity-40 font-bold z-10">
            State wise dealers list in india
          </h3>
        </div>
      </div>

    <DealerMap/>

    </>
  );
};

export default Dealers;
