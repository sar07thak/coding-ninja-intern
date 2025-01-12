import React, { useEffect, useRef, useState } from "react";
import vector from "../assets/vector.png";
import { FaAnglesRight } from "react-icons/fa6";
import { Data } from "../Api/NonTech.js";
import { ProfilesData } from "../Api/ProfilesDataJson.js";
import kingbg from "../assets/frame-1000004191-32213-removebg-preview.png"
import fb from "../assets/bxl_facebook-circle-32144.jpg"
import go from "../assets/g.png";
import cn from "../assets/cnlogo-32874.png"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



export const Review = () => {
  const [activeSection, setActiveSection] = useState("nonTech");

  console.log(activeSection);

  const boxref = useRef(null)

  useEffect(()=>{
    const mm = gsap.matchMedia();

    // Define animation for laptop view
    mm.add("(min-width: 778px)", () => {
      gsap.to(boxref.current, {
        scrollTrigger: {
          trigger: boxref.current, // Element that triggers the animation
          start: "top 60%", // Start when the top of the element is 60% down the viewport
          end: "top 0", // End when the top of the element is at the top of the viewport
          scrub: 1, // Smooth scrubbing
          markers: false, // Disable debugging markers
        },
        height : "149%", // Moves the element 400px down
        // transformOrigin: "top",
        duration: 10 ,
        ease: "power1.in",
      });
    });

  },[])



  return (
    <div>
      <div className="progress-bar  border-l-2 z-[7] border-orange-500 absolute left-[10px] md:left-[250px] " ref={boxref}></div>
      <div className="relative z-[1] p-0 md:px-10   text-white w-full bg-[#141414] flex justify-center ">
        <div className="track z-[1] h-[98%] absolute left-[10px] md:left-[250px] border-gray-700 border-l-2 md:border-dotted border-none "></div>
        <div className=" w-full py-10 ">

          <div className="text-xl ml-5  md:ml-52 mb-10 font-semibold ">👉Stories from people like you</div>

          <div className="flex sm:gap-5   mb-10 justify-center">
            {/* NAVBAR CONTAIN THE OPTIONS */}
            <div
              className={`sm:rounded-2xl px-1 sm:px-5 py-1 md:text-sm text-xs text-center font-semibold cursor-pointer ${
                activeSection === "nonTech"
                  ? "bg-[#fff] text-black"
                  : "bg-[#1F1F1F] text-[#ADADAE]"
              }`}
              onClick={() => setActiveSection("nonTech")}
            >
              Non tech to tech
            </div>
            <div
              className={`sm:rounded-2xl px-1 sm:px-5 py-1 text-xs md:text-sm font-semibold text-center cursor-pointer ${
                activeSection === "service"
                  ? "bg-[#fff] text-black"
                  : "bg-[#1F1F1F] text-[#ADADAE]"
              }`}
              onClick={() => setActiveSection("service")}
            >
              Service to products
            </div>
            <div
              className={`sm:rounded-2xl px-1 sm:px-5 py-1 text-xs md:text-sm font-semibold text-center cursor-pointer ${
                activeSection === "tier"
                  ? "bg-[#fff] text-black"
                  : "bg-[#1F1F1F] text-[#ADADAE]"
              }`}
              onClick={() => setActiveSection("tier")}
            >
              teir 2/3 college
            </div>
            <div
              className={`sm:rounded-2xl px-1 sm:px-5 py-1 text-xs md:text-sm font-semibold text-center cursor-pointer ${
                activeSection === "job"
                  ? "bg-[#fff] text-black"
                  : "bg-[#1F1F1F] text-[#ADADAE]"
              }`}
              onClick={() => setActiveSection("job")}
            >
              job bootcamp
            </div>
            <div
              className={`sm:rounded-2xl px-1 sm:px-5 py-1 text-xs md:text-sm font-semibold text-center cursor-pointer ${
                activeSection === "course"
                  ? "bg-[#fff] text-black"
                  : "bg-[#1F1F1F] text-[#ADADAE]"
              }`}
              onClick={() => setActiveSection("course")}
            >
              Upskilling Courses
            </div>
          </div>

          <div
            className={` ${
              activeSection === "nonTech" ? "flex" : "hidden"
            } justify-center flex-col sm:flex-row  items-center gap-10 sm:gap-3 px-20 sm:px-1 py-10  NON-TECH`}
          >
            {/* NON-TECH */}
            {ProfilesData[0].NonTech.map((Element) => (
              <div
                className={`bg-[#1F1F1F] w-[310px] sm:w-[300px] md:w-[310px] relative  rounded-2xl flex flex-col gap-2 sm:gap-3 md:gap-2  h-[400px] items-center justify-between py-20 px-2`}
              >
                <img
                  src={vector}
                  alt=""
                  className="absolute h-20 w-20 left-2 top-0 "
                />
                <img
                  src={Element.img}
                  alt=""
                  className="h-20 w-20 absolute left-[120px] md:left-[120px] sm:left-[90px] top-[-30px]"
                />
                <div className="">
                <div className="text-[#838485] text-center text-sm">{Element.name}</div>
                <div className="text-[#838485] mb-5 text-center text-xs">{Element.work}</div>
                </div>
                <p className="text-sm  min-h-48 text-center p-1 ">{Element.content}</p>
                <div className=" flex justify-center items-center  text-sm md:text-md text-[#838485] gap-5  ">
                  <div>POst Coding Ninjas</div>
                  <div>
                    <FaAnglesRight />
                  </div>
                  <div>Coagent e Private ltd</div>
                </div>
              </div>
            ))}
          </div>

          <div
            className={` ${
              activeSection === "service" ? "flex" : "hidden"
            } justify-center flex-col sm:flex-row  items-center gap-10 sm:gap-3 px-20 sm:px-1 py-10  NON-TECH`}
          >
            {/* NON-TECH */}
            {ProfilesData[1].Services.map((Element) => (
              <div
                className={`bg-[#1F1F1F] w-[310px] sm:w-[300px] md:w-[310px] relative  rounded-2xl flex flex-col gap-2 sm:gap-3 md:gap-2  h-[400px] items-center justify-between py-20 px-2`}
              >
                <img
                  src={vector}
                  alt=""
                  className="absolute h-20 w-20 left-2 top-0 "
                />
                <img
                  src={Element.img}
                  alt=""
                  className="h-20 w-20 absolute left-[120px] md:left-[120px] sm:left-[90px] top-[-30px]"
                />
                <div className="">
                <div className="text-[#838485] text-center text-sm">{Element.name}</div>
                <div className="text-[#838485] mb-5 text-center text-xs">{Element.work}</div>
                </div>
                <p className="text-sm  min-h-48 text-center p-1 ">{Element.content}</p>
                <div className=" flex justify-center items-center  text-sm md:text-md text-[#838485] gap-5  ">
                  <div>POst Coding Ninjas</div>
                  <div>
                    <FaAnglesRight />
                  </div>
                  <div>Coagent e Private ltd</div>
                </div>
              </div>
            ))}
          </div>

          <div
            className={` ${
              activeSection === "tier" ? "flex" : "hidden"
            } justify-center flex-col sm:flex-row  items-center gap-10 sm:gap-3 px-20 sm:px-1 py-10  NON-TECH`}
          >
            {/* NON-TECH */}
            {ProfilesData[2].Tier.map((Element) => (
              <div
                className={`bg-[#1F1F1F] w-[310px] sm:w-[300px] md:w-[310px] relative  rounded-2xl flex flex-col gap-2 sm:gap-3 md:gap-2  h-[400px] items-center justify-between py-20 px-2`}
              >
                <img
                  src={vector}
                  alt=""
                  className="absolute h-20 w-20 left-2 top-0 "
                />
                <img
                  src={Element.img}
                  alt=""
                  className="h-20 w-20 absolute left-[120px] md:left-[120px] sm:left-[90px] top-[-30px]"
                />
                <div className="">
                <div className="text-[#838485] text-center text-sm">{Element.name}</div>
                <div className="text-[#838485] mb-5 text-center text-xs">{Element.work}</div>
                </div>
                <p className="text-sm  min-h-48 text-center p-1 ">{Element.content}</p>
                <div className=" flex justify-center items-center  text-sm md:text-md text-[#838485] gap-5  ">
                  <div>POst Coding Ninjas</div>
                  <div>
                    <FaAnglesRight />
                  </div>
                  <div>Coagent e Private ltd</div>
                </div>
              </div>
            ))}
          </div>

          <div
            className={` ${
              activeSection === "job" ? "flex" : "hidden"
            } justify-center flex-col sm:flex-row  items-center gap-10 sm:gap-3 px-20 sm:px-1 py-10  NON-TECH`}
          >
            {/* NON-TECH */}
            {ProfilesData[3].Job.map((Element) => (
              <div
                className={`bg-[#1F1F1F] w-[310px] sm:w-[300px] md:w-[310px] relative  rounded-2xl flex flex-col gap-2 sm:gap-3 md:gap-2  h-[400px] items-center justify-between py-20 px-2`}
              >
                <img
                  src={vector}
                  alt=""
                  className="absolute h-20 w-20 left-2 top-0 "
                />
                <img
                  src={Element.img}
                  alt=""
                  className="h-20 w-20 absolute left-[120px] md:left-[120px] sm:left-[90px] top-[-30px]"
                />
                <div className="">
                <div className="text-[#838485] text-center text-sm">{Element.name}</div>
                <div className="text-[#838485] mb-5 text-center text-xs">{Element.work}</div>
                </div>
                <p className="text-sm  min-h-48 text-center p-1 ">{Element.content}</p>
                <div className=" flex justify-center items-center  text-sm md:text-md text-[#838485] gap-5  ">
                  <div>POst Coding Ninjas</div>
                  <div>
                    <FaAnglesRight />
                  </div>
                  <div>Coagent e Private ltd</div>
                </div>
              </div>
            ))}
          </div>

          <div
            className={` ${
              activeSection === "course" ? "flex" : "hidden"
            } justify-center flex-col sm:flex-row  items-center gap-10 sm:gap-3 px-20 sm:px-1 py-10  NON-TECH`}
          >
            {/* NON-TECH */}
            {ProfilesData[4].Courses.map((Element) => (
              <div
                className={`bg-[#1F1F1F] w-[310px] sm:w-[300px] md:w-[310px] relative  rounded-2xl flex flex-col gap-2 sm:gap-3 md:gap-2  h-[400px] items-center justify-between py-20 px-2`}
              >
                <img
                  src={vector}
                  alt=""
                  className="absolute h-20 w-20 left-2 top-0 "
                />
                <img
                  src={Element.img}
                  alt=""
                  className="h-20 w-20 absolute left-[120px] md:left-[120px] sm:left-[90px] top-[-30px]"
                />
                <div className="">
                <div className="text-[#838485] text-center text-sm">{Element.name}</div>
                <div className="text-[#838485] mb-5 text-center text-xs">{Element.work}</div>
                </div>
                <p className="text-sm  min-h-48 text-center p-1 ">{Element.content}</p>
                <div className=" flex justify-center items-center  text-sm md:text-md text-[#838485] gap-5  ">
                  <div>POst Coding Ninjas</div>
                  <div>
                    <FaAnglesRight />
                  </div>
                  <div>Coagent e Private ltd</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-20 ">
            <button className="px-14 py-4 rounded-lg bg-orange-600 hover:bg-orange-400 font-semibold">
              Explore Offerings{" "}
            </button>
          </div>

          <div className="justify-center items-center  ">
            <div className="relative h-72 flex flex-col justify-center items-center">
            <img
                src={kingbg}
                alt=""
                className="absolute z-[-1] w-[990px] h-[110px] sm:h-[180px] md:h-[200px] md:left-56 top-10"
              />
                <p className="text-[#E3E3E3]   md:text-xl font-semibold  ">
                Trusted by learners
              </p>
              <p className="text-[#707071] text-xs text-center p-10  md:text-sm ">
                1,00,000+ Coding Ninjas alumni from 1,100+ companies & 4,400+
                colleges working in top product compaies{" "}
              </p>
              <div className="flex gap-2 md:gap-10 ">
              <div className="flex  gap-1 md:gap-2 ">
                  <img src={fb} alt="" className="rounded-full w-12 h-12 sm:w-10 sm:h-10 md:w-14 md:h-14" />
                  <div className="flex flex-col ">
                    <div className="text-sm sm:text-md md:text-lg font-semibold">4.9 ⭐</div>
                    <div className="text-[#707071] text-xs md:text-sm">700+ reviews</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <img src={go} alt="" className="round-full w-12 h-12 sm:w-10 sm:h-10 md:w-14 md:h-14" />
                  <div className="flex flex-col ">
                    <div className="text-sm sm:text-md md:text-lg font-semibold">4.7 ⭐</div>
                    <div className="text-[#707071] text-xs md:text-sm">2,300+ reviews</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <img src={cn} alt="" className="round-full w-12 h-12 sm:w-10 sm:h-10 md:w-14 md:h-14" />
                  <div className="flex flex-col ">
                    <div className="text-sm sm:text-md md:text-lg font-semibold">4.8 ⭐</div>
                    <div className="text-[#707071] text-xs md:text-sm">course ratings</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
