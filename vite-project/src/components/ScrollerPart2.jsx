import React, { useState } from "react";
import bg2 from "../assets/bg_testi2.jpg";
import placement from "../assets/video2.mp4";
import doubt from "../assets/doubt.mp4";
import iit from "../assets/iit.mp4";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { HiOutlineSpeakerXMark } from "react-icons/hi2";
import doubticon from "../assets/doubtimg.png";
import iiticon from "../assets/standfordimg.png";
import placementicon from "../assets/placement.png";
import { OurStats } from "./OurStats";

export const ScrollerPart2 = () => {
  const [video , setVideo ] = useState(doubt);
  const [volume, setVolume] = useState(false);
  const [clicked , setClicked ] = useState(1)

  const handleVolume = () => {
    setVolume(!volume);
  };
  // console.log(volume);
  return (
    <>
      <div
        className="text-white relative  flex flex-col justify-center bg-cover  items-center "
        style={{ backgroundImage: `url(${bg2})` }}
      >
        {/* 1st part of the section where we store WHY US content */}
        <div className=" w-full h-full flex flex-col items-center">
          <div class=" md:text-[250px] text-[110px] font-sans md:tracking-[1px] md:text-border font-bold md:text-transparent text-[#877d7de1] ">
            WHY US
          </div>
          <div className=" w-full  md:p-0   flex flex-col md:flex-row justify-center items-center gap-5">
            <div className="relative  w-[360px] md:w-[310px] md:h-[89%] p-4 md:p-2 rounded-lg bg-[#2D2D2D]">
              <div
                className="w-9 h-9  absolute right-6 md:right-4 top-6 md:top-4 rounded-lg flex justify-center items-center text-xl bg-[#2D2D2D] text-gray-200"
                onClick={handleVolume}
              >
                {volume ? <HiOutlineSpeakerWave /> : <HiOutlineSpeakerXMark />}
              </div>
              {volume ? (
                <video src={video} autoPlay loop className="rounded-lg"></video>
              ) : (
                <video
                  src={video}
                  autoPlay
                  loop
                  muted
                  className="rounded-lg"
                ></video>
              )}
              <div className="mt-5">
                <h1 className="text-xl text-orange-400">Ankush Singla</h1>
                <p>Co-founder of Coding Ninjas | Mentor</p>
              </div>
            </div>

            <div className="md:w-[45%]  flex flex-col justify-center items-center gap-5 md:p-16 p-10">
              <div className={`flex justify-start items-center border border-gray-700 p-4 gap-8 rounded-lg md:w-[90%] w-full  ${ clicked==1 ? "bg-[#212526]" : "bg-transparent  " } `} onClick={()=>{
                setVideo(doubt);
                setClicked(1);
              }} >
                <div>
                  <img src={doubticon} alt="" className="w-10 h-10" />
                </div>
                <div className="font-bold md:text-xl text-lg text-gray-300">Fastest 1:1 doubt support</div>
              </div>
              <div className={`flex justify-start items-center border border-gray-700 p-4 gap-8 rounded-lg md:w-[90%] w-full ${ clicked==2 ? "bg-[#212526]" : "bg-transparent" } `} onClick={()=>{
                setVideo(iit);
                setClicked(2)
              }}>
                <div>
                  <img src={iiticon} alt="" className="w-10 h-10" />
                </div>
              <div className="font-bold md:text-xl text-lg text-gray-300">Standford/IIT/MAANG faculty</div>
              </div>
              <div className={`flex justify-start items-center border border-gray-700 p-4 gap-8 rounded-lg md:w-[90%] w-full ${ clicked==3 ? "bg-[#212526]" : "bg-transparent" } `} onClick={()=>{
                setVideo(placement);
                setClicked(3);
              }}>
                <div>
                  <img src={placementicon} alt="" className="w--10 h-10" />
                </div>
                <div className="font-bold md:text-xl text-lg text-gray-300">Placement assistance</div>
              </div>
            </div>
          </div>
        </div>
        {/* 2ND PART OF THE PAGE WHERE WE ADD A BACKGROUND */}
        <div className="bg-[#15181A] h-[50px]  w-full ">
        </div>
        {/* oUR_STATS SECTION */}
        <div className="w-full p-0 py-5  md:p-10">
          <OurStats />
        </div>
      </div>
    </>
  );
};
