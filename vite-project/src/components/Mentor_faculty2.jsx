import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import wire from "../assets/wire.svg";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Mentor_faculty2 = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 778px)", () => {
      gsap.to(boxRef.current, {
        scrollTrigger: {
          trigger: boxRef.current, // Element that triggers the animation
          start: "top 60%", // Start when the top of the element is 60% down the viewport
          end: "top 0", // End when the top of the element is at the top of the viewport
          scrub: 1, // Smooth scrubbing
          markers: false, // Disable debugging markers
        },
        height: "90%", // Moves the element 400px down
        duration: 10,
        ease: "power1.in",
      });
    });
  }, []);

  return (
    <>
      <div
        className="progress-bar border-l-2 z-[7] border-orange-500 absolute md:left-[250px]"
        ref={boxRef}
      ></div>
      <div className="md:px-56 md:py-10 relative  mt-[460px] md:mt-0 z-[-1] h-[200px]">
        <div className="track z-[1] h-full  absolute top-0   md:left-[250px]  border-l-2 md:border-dotted border-none border-gray-500"></div>
        <img
          src={wire}
          alt=""
          className="absolute md:left-[250px] md:top-[-70px] top-[50px]"
        />
        <div className="h-32 flex justify-between px-10 relative ">
          <div className=" pl-14 md:pt-10 sm:pt-44 pt-48 ">
            <h1 className="md:text-xl text-2xl font-semibold">
              👉 Learn by doing
            </h1>
            <p className="md:px-7 px-10 md:text-sm text-gray-500">
              Interesting projects to help you standout to recruiters{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
