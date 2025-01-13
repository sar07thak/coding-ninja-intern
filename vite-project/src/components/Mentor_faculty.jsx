import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import mock from "../assets/mock-interview-32171.webp";
import profile from "../assets/profile-review-32172.webp";
import project from "../assets/project-guidance-32173.webp";
// import video from "../assets/video.mp4"
import { Mentor_faculty2 } from "./Mentor_faculty2";
// import { RightSlider } from "./RightSlider";
gsap.registerPlugin(ScrollTrigger);

export const Mentor_faculty = () => {
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
        className="progress-bar border-l-2 z-[7] border-orange-500 absolute md:left-[251px]"
        ref={boxRef}
      ></div>
      <div className=" md:px-56 md:py-10 relative z-[-1]">
        <div className="track z-[1] h-full absolute top-0 left-[10px] md:left-[251px] border-gray-500 border-l-2 md:border-dotted border-none "></div>

        <div className="h-[600px] md:px-10 py-16 relative ">
          <h1 className="text-xl font-semibold">👉 1:1 Mentorship sessions</h1>
          <p className="px-7 mb-16 text-[#222]">
            Personalised guidance to prepare you for your interview needs{" "}
          </p>
          <div className="flex md:flex-row flex-col h-72 gap-5 md:px-5 md:py-1">
            <div className="flex flex-col relative items-center md:w-[800px] border rounded-2xl  shadow-lg  ">
              <img src={mock} alt="" className="absolute w-full h-1/2" />
              <div className=" mt-36 h-32 flex flex-col justify-center items-start">
                <h1 className="text-sm font-semibold mt-5 px-3">Mock interview</h1>
                <p className="text-sm text-gray-700 px-3">
                  Nail coding assessments and technical hallenges
                </p>
                <p className="text-sm text-gray-700 px-3">
                  Gain insights into problem-solving and algorithmic thinking
                </p>
              </div>
            </div>
            <div className=" flex flex-col relative items-center md:w-[800px] rounded-2xl  shadow-lg ">
              <img src={profile} alt="" className="absolute w-full h-1/2 z-[-1]" />
              <div className=" mt-36 h-32 flex flex-col justify-center items-start ">
                <h1 className="text-sm font-semibold mt-5 px-3">Profile review </h1>
                <p className="text-sm text-gray-700 px-3">
                  Get your profile & resume reviewed by industry leaders{" "}
                </p>
                <p className="text-sm text-gray-700 px-3">
                  Focus on different aspects of your job search{" "}
                </p>
              </div>
            </div>
            <div className=" flex flex-col relative rounded-2xl  shadow-lg items-center md:w-[800px] ">
              <img src={project} alt="" className="absolute w-full h-1/2 z-[-1] " />
              <div className="mt-36 h-32 flex flex-col justify-center items-start ">
                <h1 className="text-sm font-semibold px-3">Project guidance </h1>
                <p className="text-sm text-gray-700 px-3 ">
                  Career counselling with industry experts{" "}
                </p>
                <p className="text-sm text-gray-700 px-3 ">
                  Get assistance on how to build real time projects{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
