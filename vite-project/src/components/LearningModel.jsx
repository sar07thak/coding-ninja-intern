import React, { useState } from 'react'
import Learn from "../assets/web_learn-33056.webp";
import Excel from "../assets/web_excel-33055.webp";
import Standout from "../assets/web_standout-33057.webp";
import rocket from "../assets/frame-1000003333-1-32928.jpg";


export const LearningModel = () => {
  const [active , setactive ] = useState("learn");
  console.log(active);
   
  return (
    <>
     <div className=' bg-[#F6FBFB] relative  p-0 sm:p-10 md:p-20'>
        <div className=' w-full  flex flex-col '>
            <div className=' md:px-44 md:py-2 sm:px-20 p-0 font-semibold md:text-lg sm:text-md text-sm flex items-center'>
                <img src={rocket} alt="" className='w-16 h-16 rounded-2xl' />
                <p >A 3-stage learning model to turn you into a Coding Ninja</p>
            </div>
            <div className='md:flex sm:flex md:px-44 sm:p-5 p-2 md:py-16 '>
                <div className=' bg-[#F6FBFB]  md:w-[40%] sm:w-[45%]  flex flex-col gap-5 '>
                    <div className=' md:h-28  md:p-4 sm:py-5 ' onMouseMove={()=>setactive("learn")}>
                      <div className= {`md:px-5 md:py-2 sm:px-2 px-1 cursor-pointer border-l-2 ${ active === "learn" ? "border-[#222]" : "border-[#706f6f]"} h-20 `}>
                        <h1 className={`md:text-md sm:text-sm text-md font-semibold  ${ active === "learn" ? "text-[#222]" : "text-gray-400"  }`}>Learn</h1>
                        <p className={`md:text-sm text-sm  ${ active === "learn" ? "text-gray-700" : "text-gray-400"  }`}>Experience seamless learning with problem solving modules, leaderboard and awards.</p>
                      </div>
                    </div>
                    <div className=' md:h-28 md:p-4 sm:py-5   ' onMouseMove={()=>setactive("excel")}>
                      <div className={`md:px-5 md:py-2 sm:px-2 px-1 cursor-pointer border-l-2  ${ active === "excel" ? "border-[#222]" : "border-[#706f6f]"}  h-20 `}>
                        <h1 className={`text-md font-semibold cursor-pointer ${ active === "excel" ? "text-[#222]" : "text-gray-400"  }`}>Excel</h1>
                        <p className={`md:text-md text-sm ${ active === "excel" ? "text-gray-700" : "text-gray-400"  }`}>Track your skill level and make meaningful progress for you to grow</p>
                      </div>
                    </div>
                    <div className='md:h-28 md:p-4 sm:py-5 ' onMouseMove={()=>setactive("standout")}>
                      <div className={`md:px-5 md:py-2 sm:px-2 px-1 cursor-pointer border-l-2 ${ active === "standout" ? "border-[#222]" : "border-[#706f6f]"} h-20 `}>
                        <h1 className={`md:text-md sm:text-sm text-md font-semibold cursor-pointer ${ active === "standout" ? "text-[#222]" : "text-gray-400"  }`}>Standout</h1>
                        <p className={`md:text-sm text-sm ${ active === "standout" ? "text-gray-700" : "text-gray-400"  }`}>Standout to recruiters, showcase ratings, get feedback and interview insights. </p>
                      </div>
                    </div>
                </div>
                <div className='bg-[#F6FBFB]  flex justify-center items-center md:w-[56%] sm:w-[70%] w-full'>
                  <img src={Learn} alt="" className={`${ active === "learn" ? "flex" : "hidden"}`} />
                  <img src={Excel} alt="" className={`${ active === "excel" ? "flex" : "hidden"}`} />
                  <img src={Standout} alt="" className={`${ active === "standout" ? "flex" : "hidden"}`} />
                </div>
            </div>
        </div>
     </div>
    </>
  )
}
