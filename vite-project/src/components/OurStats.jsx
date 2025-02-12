import React, { useEffect, useRef } from "react";
import { SiTicktick } from "react-icons/si";
import newCn from "../assets/newCn.jpg";
import { RxCross1 } from "react-icons/rx";
import { RiCheckFill } from "react-icons/ri";
import logoCN from "../assets/newCn2.png";
import { MdOutlineElectricBolt } from "react-icons/md";
// import { gsap } from "gsap";
import { FaBolt } from "react-icons/fa";

export const OurStats = () => {
  

  return (
    <>
      <p className="text-xl text-blue-600 font-bold text-center mb-5">
        The Coding Ninjas Advantage
      </p>
      <div className="flex items-center justify-center p-5 md:p-0">
        <div className="w-full md:w-[80%]  border-gray-600 border  rounded-3xl">
          <div className="grid grid-cols-5 grid-rows-5  ">
            <div className="col-span-2 flex items-center bg-[#15181A] py-8 rounded-tl-3xl"></div>

            <div className=" flex justify-center items-center gap-9 bg-[#15181A]  py-8 ">
              <img src={newCn} alt="" className="rounded-full w-10 h-10" />
            </div>
            <div className="flex justify-center items-center bg-[#15181A] text-gray-500 py-8 ">
              Free Resources
            </div>
            <div className="flex justify-center items-center bg-[#15181A] text-gray-500 py-8 rounded-tr-3xl">
              Other Courses
            </div>

            <div className="col-span-2 flex justify-center items-center bg-[#141414] text-[#E3E3E3]  text-sm p-5 md:p-0  ">
              structured + problem solving basedtext
            </div>

            <div className="flex justify-center items-center bg-[#141414] ">
              <SiTicktick className="text-green-500 text-xl mr-2" />
            </div>

            <div className="flex justify-center items-center bg-[#141414] ">
              <RxCross1 className="text-xl text-gray-500" />
            </div>
            <div className="flex justify-center items-center bg-[#141414]">
              <RiCheckFill className="text-xl text-gray-500" />
            </div>
            <div className="col-span-2 flex justify-center items-center bg-[#15181A] text-sm p-5 md:p-0 ">
              Fastest 1:1 doubt solving support
            </div>
            <div className="flex justify-center items-center bg-[#15181A] ">
              <SiTicktick className="text-green-500 text-xl mr-2" />
            </div>
            <div className="flex justify-center items-center bg-[#15181A] ">
              <RxCross1 className="text-xl text-gray-500" />
            </div>
            <div className="flex justify-center items-center bg-[#15181A] ">
              <RxCross1 className="text-xl text-gray-500" />
            </div>
            <div className="col-span-2 flex justify-center items-center bg-[#141414] text-[#E3E3E3]  text-sm p-5 md:p-0">
              Integerated prep platform
            </div>
            <div className="flex justify-center items-center bg-[#141414] ">
              <SiTicktick className="text-green-500 text-xl mr-2" />
            </div>
            <div className="flex justify-center items-center bg-[#141414]">
              <RxCross1 className="text-xl text-gray-500" />
            </div>
            <div className="flex justify-center items-center bg-[#141414] ">
              <RxCross1 className="text-xl text-gray-500" />
            </div>
            <div className="col-span-2 flex justify-center items-center bg-[#15181A] text-[#E3E3E3] text-sm p-5 md:p-0 ">
              Profiles highlighted on Naukri
            </div>
            <div className="flex justify-center items-center bg-[#15181A] ">
              <SiTicktick className="text-green-500 text-xl mr-2" />
            </div>
            <div className="flex justify-center items-center bg-[#15181A] ">
              <RxCross1 className="text-xl text-gray-500" />
            </div>
            <div className="flex justify-center items-center bg-[#15181A] ">
              <RxCross1 className="text-xl text-gray-500" />
            </div>
          </div>
          <div className="bg-[#14181B] p-5 rounded-b-3xl flex flex-col justify-center progress-bar">
            {/* progress-bar-content */}
            <div className="flex justify-between items-center gap-12 px-1 md:px-5 mt-20">
              <img src={logoCN} alt="" className="md:h-10 h-5 sm:h-7 w-40 sm:w-36 md:w-60 " />
              <p
                className="flex items-center md:gap-3 gap-1  text-sm  font-semibold text-transparent bg-clip-text 
              bg-gradient-to-r from-pink-600 via-orange-500 to-yellow-500
              animate-gradient-text"
                style={{
                  backgroundImage:
                    "linear-gradient(105deg,#75b469,#efce74,#fb833f,#fecc4f,#fb11e0,#fe732b,#0149ff,#01a3ff,#3e85fe,#883eec,#75b469)",
                  backgroundSize: "200% 200%",
                }}
              >
                Your dream role, faster and with confidence
                <span>
                  <FaBolt className="text-teal-500 " />
                </span>
              </p>
            </div>
            {/* progress-bar-1st */}
            <div className="md:px-5 px-1 py-2 ">
              <div className="w-full h-1  bg-gray-600 rounded-full ">
                <div
                className="w-full h-1 bg-nav-gradient "
                ></div>
              </div>
            </div>
            {/* progress-bar-content */}
            <div className="flex justify-between items-center px-1 md:px-5">
              <div className="text-3xl text-gray-100 font-semibold">Others</div>
              <div>Average role,under-confident</div>
            </div>
            {/* progress-bar-2 */}
            <div className="px-1 md:px-5 py-2 ">
              <div className="w-full h-1  bg-gray-600 rounded-full">
                <div
                className="w-[60%] h-1 bg-custom-gradient "
                >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
