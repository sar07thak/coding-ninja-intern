import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import assets from "../assets/logoCN.jpg";
import web from "../assets/web.jpg";
import data from "../assets/data.jpg";
import goo from "../assets/g.png";
import naukri from "../assets/naukri.png";
import { IoCloseSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { Overlay } from "./Overlay";
// import { Login } from "./Login";

export const Navbar = () => {
  const [dropJob, setDropJob] = useState(false);
  const [dropCerti, setDropCerti] = useState(false);
  const [openlogin, setLogin] = useState(false);

  const toggleJobDropdown = () => {
    setDropJob(!dropJob);
  };

  const toggleCertiDropdown = () => {
    setDropCerti(!dropCerti);
  };
  return (
    <>
      <div className="fixed top-0 left-0 right-0 border-b h-20 text-gray-700 bg-white shadow-md">
        <div className="h-full flex justify-between items-center md:mx-60 px-4 md:px-10 ">
          <div className="flex items-center w-[65%] justify-between">
            <h1 className=" font-bold">
              <img src={assets} alt="" className=" h-10 lg:w-56 md:w-52   " />
            </h1>

            <div className="relative  " onMouseLeave={toggleJobDropdown}>
              <button
                onMouseOver={toggleJobDropdown}
                className="hidden md:flex items-center  p-2 rounded-lg hover:bg-[#F5F2EB] text-[#394871] font-semibold text-lg "
              >
                Job Bootcamps
                <div className=" text-2xl font-light">
                  <MdKeyboardArrowDown />
                </div>
              </button>
              {dropJob && (
                <div className="absolute left-0  h-54 px-7 py-4 w-[400px] bg-white border rounded-b-2xl shadow-lg z-10">
                  <h1 className="text-xl  ">For Graduates</h1>
                  <div className="flex flex-col justify-center gap-2 py-2">
                    <div className="flex p-2 gap-5  hover:bg-[#F5F2EB] rounded-lg">
                      <img src={web} alt="" className="h-14" />
                      <div>
                        <h1 className="text-xl font-bold text-[#222]">
                          Full stack Web Developer
                        </h1>
                        <p className="text-lg text-indigo-500 ">
                          certified by coding ninja
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div className="flex gap-5  hover:bg-[#F5F2EB] rounded-lg p-2">
                      <img src={data} alt="" className="h-14" />
                      <div>
                        <h1 className="text-xl font-bold text-[#222]">
                          Data Analytics
                        </h1>
                        <p className="text-lg text-indigo-500">
                          certified by coding ninja
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="relative" onMouseLeave={toggleCertiDropdown}>
              <button
                onMouseOver={toggleCertiDropdown}
                className="hidden md:flex items-center p-2 rounded-lg hover:bg-[#F5F2EB] text-[#394871] font-semibold text-lg"
              >
                IIT Certifications <MdKeyboardArrowDown />
              </button>
              {dropCerti && (
                <div className="absolute   w-[600px]  h-54 bg-white border rounded shadow-lg z-10">
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-[#F5F2EB]"
                  >
                    Certification 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-[#F5F2EB]"
                  >
                    Certification 2
                  </a>
                </div>
              )}
            </div>
          </div>
          <div>
            <button
              className="bg-orange-500 text-white px-7 py-3 rounded-lg hover:bg-orange-400"
              onClick={() => setLogin(!openlogin)}
            >
              Login
            </button>
            {openlogin && (
              <div className="border min-w-[430px] md:min-w-[500px] h-[900px] bg-white top-0 right-0 absolute px-8 py-4 z-10 ">
                <div className="flex justify-between text-gray-600 p-2">
                  <img src={assets} alt="" className="w-52" />
                  <div
                    className="flex justify-center items-center gap-2 "
                    onClick={() => setLogin(!openlogin)}
                  >
                    <div>Close</div>
                    <div className="text-2xl">
                      <IoCloseSharp />
                    </div>
                  </div>
                </div>
                <div className="text-xl font-semibold mt-16">Login with</div>
                <div className="mt-11">
                  <div className="w-full py-4 px-6 flex justify-center items-center gap-5 mb-5 border-2 border-black rounded-lg ">
                    <img src={goo} alt="" className="h-10 rounded-full" />
                    Google
                  </div>
                  <div className="w-full py-4 px-6 flex justify-center items-center gap-5 mb-5 border-2 border-black  rounded-lg">
                    <img src={naukri} alt="" className="h-10 rounded-full" />
                    Naukri
                  </div>
                </div>
                <div className="flex gap-3 mt-16">
                  <p>OR</p>
                  <div className=" flex justify-center items-center">
                    <div className="w-[320px] md:w-[380px] border-t-2"></div>
                  </div>
                </div>
                <div className="mt-8">
                  <p className="mb-5">Enter E-mail</p>
                  <input
                    className="w-full py-4 px-6 flex justify-center items-center gap-5 mb-5 border border-black rounded-lg active:border-slate-200 placeholder:text-gray-600"
                    placeholder="Enter email here"
                  />
                  <button className="w-full py-4 px-6 flex justify-center items-center gap-5 mb-5 border-2 bg-[#F1F2F2] text-[#353535]  rounded-lg">
                    Continue
                    <div className="text-gray-500 font-thin">
                      <FaArrowRight />
                    </div>
                  </button>
                </div>
              </div>
            )}
            {openlogin && <Overlay />}
          </div>
        </div>
      </div>
    </>
  );
};
