import React, { useEffect, useRef, useState } from "react";
import frame from "../assets/frame-body.jpg";
import { data } from "../Api/Profiles.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const SliderCompo = () => {

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    slidesToShow: 6,
    slidesToScroll: 1,
    pauseOnHover: true,
    swipeToSlide: true,
    centerMode: true,
    centerPadding: "30px",
  };



  return (
    <>
      <div className="w-full  bg-[#FFFFFF]">
        <div className="mt-16 w-full  h-[500px] px-24">
          <div className="font-bold text-xl text-center mb-10">Our Ninjas at top Companies</div>
          <div className="cursor-pointer ">
            <Slider {...settings}>
              {data.map((currentElement, index) => (
                <div key={index} className="flex flex-col w-20 justify-center items-center " >
                  <div className="m-2 p-5 rounded-2xl shadow-gray-300 shadow-2xl">
                  <img
                    src={currentElement.profilePhoto[0]}
                    alt={`Profile ${index + 1}`}
                    className="m-auto h-32 w-32"
                  />
                  <p className="font-semibold text-md text-center text-[#9A9B9C] ">{currentElement.college}</p>
                  <img
                    src={currentElement.companyPhoto[0]}
                    alt={`Company ${index + 1}`}
                    className=" h-28  w-28 m-auto"
                  />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="w-full">
          <img src={frame} alt="" />
        </div>
      </div>
    </>
  );
};
