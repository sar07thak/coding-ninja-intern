import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import  assets  from "../assets/logoCN.jpg"
import web from "../assets/web.jpg"
import data from '../assets/data.jpg'


export const Navbar = () => {
  const [dropJob, setDropJob] = useState(false);
  const [dropCerti , setDropCerti ] = useState(false);

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
               <img src={assets} alt="" className=" h-10 w-56" />
            </h1>

            <div className="relative ">
              <button onMouseOver={toggleJobDropdown} className="hidden md:flex items-center  p-2 rounded-lg hover:bg-slate-300 font-semibold text-lg ">
                Job Bootcamps 
                <div className=" text-2xl font-light">
                <MdKeyboardArrowDown />
                </div>
              </button>
              {dropJob && (
                <div className="absolute left-0 mt-4 h-54 px-7 py-4 w-[400px] bg-white border rounded-b-2xl shadow-lg z-10">
                  <h1 className="text-xl  ">For Graduates</h1>
                  <div className="flex flex-col justify-center gap-2 py-2">
                  <div className="flex p-2 gap-5  hover:bg-gray-200 rounded-lg">
                    <img src={web} alt="" className="h-14" />
                    <div>
                    <h1 className="text-xl font-bold text-[#222]">Full stack Web Developer</h1>
                    <p className="text-lg text-indigo-500 ">certified by coding ninja</p>
                    </div>
                  </div>
                  <hr />
                  <div className="flex gap-5  hover:bg-gray-200 rounded-lg p-2">
                    <img src={data} alt="" className="h-14" />
                    <div>
                    <h1 className="text-xl font-bold text-[#222]">Data Analytics</h1>
                    <p className="text-lg text-indigo-500">certified by coding ninja</p>
                    </div>
                  </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="relative">
              <button onMouseOver={toggleCertiDropdown} className="hidden md:flex items-center p-2 rounded-lg hover:bg-slate-300 font-semibold text-lg">
                IIT Certifications <MdKeyboardArrowDown />
              </button>
              {dropCerti && (
                <div className="absolute left-0 mt-4 w-[400px] h-48 bg-white border rounded shadow-lg z-10">
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Certification 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Certification 2
                  </a>
                </div>
              )}
            </div>
          </div>
          <div>
            <button className="bg-orange-500 text-white px-7 py-3 rounded-lg hover:bg-orange-400">
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
