import React, { useEffect, useRef } from "react";
import heart from "../assets/frame-1000003333-1-32217.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const PageAfterLearningModel = () => {
  const boxRef = useRef(null);
  const textRef = useRef([]);

  useEffect(() => {
    const mm = gsap.matchMedia();

    // Define animation for all screen sizes
    mm.add("(min-width: 778px)", () => {
      gsap.to(boxRef.current, {
        scrollTrigger: {
          trigger: boxRef.current, // Element that triggers the animation
          start: "top 60%", // Start when the top of the element is 60% down the viewport
          end: "top 0", // End when the top of the element is at the top of the viewport
          scrub: 1, // Smooth scrubbing
          markers: false, // Disable debugging markers
        },
        height: "78%", // Moves the element 400px down
        duration: 10,
        ease: "power1.in",
      });

      // Animate text elements
      textRef.current.forEach((ref) => {
        gsap.fromTo(
          ref,
          { y: 50, opacity: 0.7 }, // Start position
          {
            scrollTrigger: {
              trigger: ref,
              start: "top 80%", // Start when the top of the text is 80% down the viewport
              end: "top 30%", // End when the top of the text is 30% down the viewport
              scrub: true, // Smooth scrubbing
              markers: false, // Disable debugging markers
              onEnter: () => gsap.to(ref, { color: "#FFC147" }), // Change color to orange on enter
              onLeave: () => gsap.to(ref, { color: "#2D2D2D" }), // Revert color on leave
              onEnterBack: () => gsap.to(ref, { color: "#FFC147" }), // Change color to orange on enter back
              onLeaveBack: () => gsap.to(ref, { color: "#2D2D2D" }), // Revert color on leave back
            },
            y: 0, // End position
            opacity: 1, // End visible
            duration: 1,
          }
        );
      });
    });

    // Define animation for mobile view
    mm.add("(max-width: 777px)", () => {
      gsap.to(boxRef.current, {
        scrollTrigger: {
          trigger: boxRef.current, // Element that triggers the animation
          start: "top 60%", // Start when the top of the element is 60% down the viewport
          end: "top 0", // End when the top of the element is at the top of the viewport
          scrub: 1, // Smooth scrubbing
          markers: false, // Disable debugging markers
        },
        height: "100%", // Adjust height for mobile
        duration: 10,
        ease: "power1.in",
      });

      // Animate text elements
      textRef.current.forEach((ref) => {
        gsap.fromTo(
          ref,
          { y: 30, opacity: 0.7 }, // Start position for mobile
          {
            scrollTrigger: {
              trigger: ref,
              start: "top 80%", // Start when the top of the text is 80% down the viewport
              end: "top 30%", // End when the top of the text is 30% down the viewport
              scrub: true, // Smooth scrubbing
              markers: false, // Disable debugging markers
              onEnter: () => gsap.to(ref, { color: "#FFC147" }), // Change color to orange on enter
              onLeave: () => gsap.to(ref, { color: "#2D2D2D" }), // Revert color on leave
              onEnterBack: () => gsap.to(ref, { color: "#FFC147" }), // Change color to orange on enter back
              onLeaveBack: () => gsap.to(ref, { color: "#2D2D2D" }), // Revert color on leave back
            },
            y: 0, // End position
            opacity: 1, // End visible
            duration: 1,
          }
        );
      });
    });
  }, []);

  return (
    <>
      <div
        className="progress-bar border-l-2 z-[7] border-[#FFC147] hidden md:flex absolute md:left-[251px]"
        ref={boxRef}
      ></div>
      <div className=" bg-[#141414] relative z-[-1] flex flex-col item-center md:py-10 md:px-56 ">
        <div className="track z-[1] h-[100%] absolute top-0 left-[10px] md:left-[250px] border-gray-700 border-l-2 md:border-dotted border-none "></div>
        <div className="flex text-white items-center text-lg gap-5 md:mb-8 mt-6 ">
          {/* <img src={heart} alt="" className='h-10 w-10 rounded-xl absolute z-[-20]' /> */}
          <p className="ml-8">👉 Always available when you get stuck </p>
        </div>
        <div className="text-[#2D2D2D] w-full flex flex-col justify-center md:gap-10 gap-5 px-32 py-6 text-while-scroll">
          <p
            className="md:text-5xl sm:text-4xl text-xl font-bold"
            ref={(el) => (textRef.current[0] = el)}
          >
            Resolve doubts any time through chat, voice notes or calling.{" "}
          </p>
          <p
            className="md:text-5xl sm:text-4xl text-xl font-bold"
            ref={(el) => (textRef.current[1] = el)}
          >
            500+ dedicated Teaching Assistants to resolve your doubts quickly.
          </p>
          <p
            className="md:text-5xl sm:text-4xl text-xl  font-bold"
            ref={(el) => (textRef.current[2] = el)}
          >
            5/5 rating for 90% doubt resolutions.
          </p>
        </div>
      </div>
    </>
  );
};
