import React, { useState } from "react";
import tedx from "../assets/news_ted-33207.webp";
import graphic from "../assets/graphic-32261-removebg-preview.png";
import cxo from "../assets/cxo-33141.png";
import hTimes from "../assets/hindustan-times-33144.png";
import theHindu from "../assets/the-hindu-33146.png";
import economicsTime from "../assets/economic-times-33143.png";
import TimeOfIndia from "../assets/the-times-of-india-33147.png";
import money from "../assets/money-control-33145.png";

export const Spotlight = () => {
    const [showVideo , setShowVideo ] = useState(false);

  return (
    <>
      <div className=" md:px-36 px-5 py-10 md:h-[700px] bg-[#FFF6F3] flex flex-col justify-center  relative">
        <div className={` ${ showVideo ? "absolute" : "hidden" } md:h-[700px] sm:right-0 right-0 h-full bg-[#16161691] z-[2] p-10 w-screen flex justify-center items-center`} onClick={()=>setShowVideo(!showVideo)}>
        <iframe width="600" height="400" className="rounded-2xl"  src="https://www.youtube.com/embed/KnGfIXDNNNk?si=JMPYreVsxpD-P7Ff" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div>
            <img src={graphic} alt="" className="absolute h-48 w-48 z-[1] top-0 right-[300px] hidden md:flex"  />
        </div>
        <div >
            <p className="text-xl font-semibold mb-10  ">
            👉 Coding Ninjas in spotlight 
            </p>
        </div>
        {/* <div class="bg-pink-50  border border-red-600"> */}
          <div class="sm:my-5 md:my-0 my-3  grid grid-cols-1 md:grid-cols-3 gap-6 ">
            <div class="bg-white  rounded-lg shadow-md flex flex-col items-center md:col-span-1">
              <img src={tedx} alt="Speaker" class="sm:w-[750px] sm:h-[350px] md:h-[355px] h-[300px] cursor-pointer" onClick={()=>setShowVideo(!showVideo)}  />
            </div>
            <div class="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div class="bg-white p-2 rounded-lg shadow-md flex flex-col justify-center items-center">
               <img src={cxo} alt="" className="h-20" />
                <p class="text-gray-600 text-xs">
                  Coding Ninjas Unconventional Approach Upskills 1L Students,
                  Yields 2.2x Salary Increase
                </p>
              </div>
              <div class="bg-white p-2 rounded-lg shadow-md flex flex-col justify-center items-center">
                <img src={hTimes} alt="" className="h-20"/>
                <p class="text-gray-600 text-xs">
                  Sustainable development through upskilling: India's
                  engineering renaissance
                </p>
              </div>
              <div class="bg-white p-2 rounded-lg shadow-md flex flex-col justify-center items-center">
                <img src={theHindu} alt="" className="h-20" />
                <p class="text-gray-600 text-xs">
                  Women in tech earn 7% more than men on average but men snag
                  the highest salaries
                </p>
              </div>
              <div class="bg-white p-2 rounded-lg shadow-md flex flex-col justify-center items-center">
                <img src={economicsTime} alt="" className="h-20" />
                <p class="text-gray-600 text-xs">
                  'Bootcamps' make tech grads more employable
                </p>
              </div>
              <div class="bg-white p-2 rounded-lg shadow-md flex flex-col justify-center items-center">
                <img src={TimeOfIndia} alt="" className="h-20" />
                <p class="text-gray-600 text-xs">
                  Young professionals must embrace continuous upskilling
                </p>
              </div>
              <div class="bg-white p-2 rounded-lg shadow-md flex flex-col justify-center items-center">
                <img src={money} alt="" className="h-20" />
                <p class="text-gray-600 text-xs">
                  Generative AI courses in demand as more Indians flock to
                  upskilling platforms
                </p>
              </div>
            </div>
          </div>
        {/* </div> */}
      </div>
    </>
  );
};
