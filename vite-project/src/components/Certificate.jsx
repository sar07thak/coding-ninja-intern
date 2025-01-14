import React from "react";
import Certi from "../assets/certiCN.webp";

export const Certificate = () => {
  return (
    <>
      <div className="md:px-56 px-5 py-10 md:h-[400px]  ">
        <div className="border border-gray-400 rounded-2xl md:h-[320px] md:flex-row flex flex-col p-10 ">
          <img src={Certi} alt="" className="rounded-2xl" />
          <div className="text-2xl font-[400] md:p-32 md:mt-0 text-center mt-10 flex justify-center items-center">
            We are an approved training partner of NSDC under their scheme for
            market led fee-based services
          </div>
        </div>
      </div>
    </>
  );
};
