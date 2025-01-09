import React from 'react'
import bg2 from "../assets/bg_testi2.jpg"
import img from "../assets/why.jpg"

export const ScrollerPart2 = () => {
  return (
    <>
      <div
        className="text-white relative md:p-5 flex flex-col justify-center md:bg-contain bg-cover  items-center h-[900px] "
        style={{ backgroundImage: `url(${bg2})` }}
      >
        <div className=' w-full h-full flex flex-col items-center'>
        <div class="md:text-[250px] text-[110px] font-sans md:tracking-[1px] md:text-border font-bold md:text-transparent text-[#877d7de1] ">
            WHY US
        </div>
        </div>
      </div>
    </>
  )
}
