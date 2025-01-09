import React from "react";
import background from "../assets/home-back.jpg";
import { MdKeyboardArrowDown } from "react-icons/md";
import video from "../assets/cnvideo.mp4"

export const Home = () => {
  return (
    <>
      <div
        className="relative z-[-1] bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${background})` }}
      > 
        <div className=" w-full top-20  flex flex-col justify-center items-center">
          <h1
            className="text-2xl mt-36 font-bold text-transparent bg-clip-text 
                   bg-gradient-to-r from-green-400 via-yellow-400 to-red-400
                   animate-gradient-text"
            style={{
              backgroundImage:
                "linear-gradient(105deg,#75b469,#efce74,#fb833f,#fecc4f,#fb11e0,#fe732b,#0149ff,#01a3ff,#3e85fe,#883eec,#75b469)",
              backgroundSize: "200% 200%",
            }}
          >
            Restricted by Opportunities ?
          </h1>
          <p className="text-4xl  md:text-7xl font-bold mt-14 mb-2">
            Get the Tech Career
          </p>
          <p className="text-4xl md:text-7xl font-bold mb-5 md:mb-8">
            you deserve. Faster.
          </p>
          <p className="text-xs md:text-sm text-[#6D6E70] ">
            Structerd coding courses that get your there faster with confidence.{" "}
          </p>
          <div className="mt-20 cursor-pointer">
          <button className="w-56 p-4 text-xl bg-orange-500 hover:bg-orange-300 cursor-pointer rounded-xl  flex justify-center gap-1">
            Explore offering
            <div className="text-3xl">
              <MdKeyboardArrowDown />
            </div>
          </button>
          </div>
          <div className=" mt-20 p-5">
           <video
           className="w-[900px] rounded-3xl"
           src={video}
           autoPlay
           muted
           loop
           >
           </video>
          </div>
        </div>
      </div>
    </>
  );
};
