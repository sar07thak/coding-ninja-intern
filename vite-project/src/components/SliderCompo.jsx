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
    autoplaySpeed: 1000,
    speed: 800,
    slidesToShow: 6,
    slidesToScroll: 1,
    pauseOnHover: true,
    swipeToSlide: true,
    centerMode: true,
    centerPadding: "30px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        dots : false ,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        dots : false ,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2
        }
      }
    ]
  };



  return (
    <>
      <div className="w-full  bg-[#FFFFFF]">
        <div className="mt-16 w-full  h-[500px] md:px-24 p-0 ">
          <div className="font-bold text-xl text-center mb-10">Our Ninjas at top Companies</div>
          <div className="cursor-pointer relative ">
            <Slider {...settings}>
              {data.map((currentElement, index) => (
                <div key={index} className="flex flex-col w-20 h-72 justify-center items-center py-10 mb-20">
                  <div className="m-2 p-5 rounded-2xl shadow-gray-300 relative shadow-2xl h-60 border border-orange-300  ">
                  <img
                    src={currentElement.profilePhoto[0]}
                    alt={`Profile ${index + 1}`}
                    className="m-auto  h-32 w-32 absolute bottom-36 border shadow-2xl shadow-gray-200 rounded-full md:left-9 sm:left-11 left-28  "
                  />
                  <p className="mt-24 font-semibold text-md text-center text-[#9A9B9C]">{currentElement.college}</p>
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
