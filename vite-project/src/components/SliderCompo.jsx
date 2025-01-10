import React from 'react'
import frame from "../assets/frame-body.jpg"
export const SliderCompo = () => {
  return (
    <>
    <div className='w-full  border border-red-400 bg-[#FFFFFF] flex flex-col gap-20 '>
        <div className='border border-green-500 w-full  bg-red-200 flex justify-center items-center px-40'>
            <div className='border border-red-700 w-full h-52 ' >

            </div>
        </div>
        <div className='w-full '>
            <img src={frame} alt="" />
        </div>
    </div>
    </>
  )
}
