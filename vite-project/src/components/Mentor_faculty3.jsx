import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Faculty } from "../Api/Faculty.js";
import Slider from "react-slick";

gsap.registerPlugin(ScrollTrigger);

export const Mentor_faculty3 = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 778px)", () => {
      gsap.to(boxRef.current, {
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 60%",
          end: "top 0",
          scrub: 1,
          markers: false,
        },
        height: "100%",
        duration: 10,
        ease: "power1.in",
      });
    });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 800,
    slidesToShow: 3,
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
        },
      },
      {
        breakpoint: 600,
        dots: false,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        dots: false,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <>
      <div
        className="progress-bar border-l-2 z-[7] border-orange-500 absolute md:left-[250px]"
        ref={boxRef}
      ></div>
      <div className="px-56 py-10 relative z-[-1]  h-screen">
        <div className="track z-[1] h-full absolute top-0 left-[10px] md:left-[250px] border-gray-500 border-l-2 md:border-dotted border-none "></div>
        <div className="h-[500px] px-8 py-5 mt-44 text-xl font-semibold">
          <p>👉 Faculty that brings out the best in you</p>
          <div className=" my-5 p-5 h-[400px]">
            <Slider {...settings}>
              {Faculty.map((currentElement, index) => (
                <div key={index} className="mb-20 h-[350px] px-4 py-2">
                  <div className="shadow-xl flex flex-col rounded-2xl py-4 ">
                    <img
                      src={currentElement.profilephoto}
                      alt=""
                      className="h-24 w-24 m-auto"
                    />
                    <div className=" h-10 w-68 px-4 mt-2 flex flex-col justify-center items-center">
                      <p className="text-sm text-center ">
                        {currentElement.name}
                      </p>
                      <p className="text-xs text-center text-gray-600 font-semibold ">
                        {currentElement.work}
                      </p>
                    </div>
                    <div className="flex flex-row justify-center items-center overflow-x-auto mt-4 mb-4">
                      {currentElement.companyImage.map((companyImg, idx) => (
                        <div
                          key={idx}
                          className="w-10 mx-1 flex justify-center"
                        >
                          <img src={companyImg} alt="" className="h-10 w-10" />
                        </div>
                      ))}
                    </div>
                    <div className="text-[#88898A] text-center text-xs">
                      Teaches
                    </div>
                    <div className="mt-2 text-center text-xs text-[#222] font-semibold h-16 ">
                      {currentElement.Expertise}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};
