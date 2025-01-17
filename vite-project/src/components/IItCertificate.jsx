import React from "react";
import bgimage from "../assets/n3.jpg";
import iit1 from "../assets/pexels-pixabay-256490-1.jpg";
import iit2 from "../assets/pexels-pixabay-289737.jpg";
import iit3 from "../assets/pexels-pixabay-159740.jpg"
import { FaMeta } from "react-icons/fa6";
import { VscGithubInverted } from "react-icons/vsc";
import { VscGraph } from "react-icons/vsc";
import frame from "../assets/frame.jpg";
import { TbBrandCpp } from "react-icons/tb";
import { FaDatabase } from "react-icons/fa";
import { GiBreakingChain } from "react-icons/gi";
import { FaPython } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import pyramid from "../assets/background-pyramid.webp";

export const IItCertificate = () => {
  return (
    <>
      <div
        className="bg-[#FFFBF5] pb-20 relative bg-no-repeat top-[] "
      >
        
          <img src={pyramid} alt=""  className="absolute bottom-0"/>
        
        <div className="relative md:left-[260px] top-2 p-2 md:p-0 ">
          <div className="bg-[#745E39] w-40 text-center rounded-xl text-white text-sm p-1 mb-5">
            For graduates
          </div>

          <div className=" flex flex-col p-2 md:w-[300px] rounded-2xl mb-8  bg-[#222222e4]">
            <img
              src={iit1}
              alt=""
              className="shadow-md shadow-[#222] w-54 h-40 bg-cover rounded-2xl mb-12 relative"
            />
            {/* <div className="absolute bottom-[350px] md:bottom-[370px] left-8 bg-white w-10 h-10 rounded-xl">
              <img src={frame} alt="" className="rounded-lg" />
            </div> */}
            <div className="font-bold text-2xl mb-5 text-gray-300">
              PG Certification in Data Analytics
            </div>
            <div className="text-md font-semibold text-gray-300 mb-5">
              E&ICT Academy , IIT Guwahati
            </div>
            <div className="rounded-xl h-9 text-gray-700 p-2 flex justify-between bg-[#FEFEFE] items-center shadow-lg shadow-[#222] ">
              <div className="flex gap-2 text-xl">
                {" "}
                <VscGraph /> <FaMeta /> <VscGithubInverted />
              </div>
              <div className="font-semibold">6 months</div>
            </div>
          </div>

          <div className="bg-[#745E39] w-40 text-center rounded-xl text-white text-sm p-1 mb-5 ">
            For College Students
          </div>

          <div className="flex md:flex-row flex-col md:gap-20">
            <div className=" flex flex-col p-2 md:w-[300px] rounded-2xl mb-8  bg-[#222222e4]">
              <img
                src={iit2}
                alt=""
                className="shadow-md shadow-[#222] w-54 h-40 bg-cover rounded-2xl mb-12 relative"
              />
              {/* <div className="absolute bottom-[350px] md:bottom-[370px] left-8 bg-white w-10 h-10 rounded-xl">
                <img src={frame} alt="" className="rounded-lg" />
              </div> */}
              <div className="font-bold text-2xl mb-5 text-gray-300">
                Traning and internsgip Certification in Advanced DSA
              </div>
              <div className="text-md font-semibold text-gray-300 mb-5">
                E&ICT Academy , IIT Guwahati
              </div>
              <div className="rounded-xl h-9 text-gray-700 p-2 flex justify-between bg-[#FEFEFE] items-center shadow-lg shadow-[#222] ">
                <div className="flex gap-2 text-xl">
                  {" "}
                  <VscGraph /> <TbBrandCpp />  <FaDatabase /> <GiBreakingChain />
                </div>
                <div className="font-semibold">6 months</div>
              </div>
            </div>
            <div className=" flex flex-col p-2 md:w-[300px] rounded-2xl mb-8  bg-[#222222e4]">
              <img
                src={iit3}
                alt=""
                className="shadow-md shadow-[#222] w-54 h-40 bg-cover rounded-2xl mb-12 relative"
              />
              {/* <div className="absolute bottom-[350px] md:bottom-[370px] left-8 bg-white w-10 h-10 rounded-xl">
                <img src={frame} alt="" className="rounded-lg" />
              </div> */}
              <div className="font-bold text-2xl mb-5 text-gray-300">
                PG Certification in Data Analytics
              </div>
              <div className="text-md font-semibold text-gray-300 md:mb-12 mb-3">
                E&ICT Academy , IIT Guwahati
              </div>
              <div className="rounded-xl h-9 text-gray-700 p-2 flex justify-between bg-[#FEFEFE] items-center shadow-lg shadow-[#222] ">
                <div className="flex gap-2 text-xl">
                  {" "}
                  <VscGraph /> <FaPython/> <SiPostgresql />
                </div>
                <div className="font-semibold">6 months</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

{
  /* <div>
<div></div>
<div>E&ICT Academy, IIT Guwahati</div>
</div>
<div>
<div>Traning and internsgip Certification in Data Analytics</div>
<div>E&ICT Academy, IIT Guwahati</div>
</div> */
}
