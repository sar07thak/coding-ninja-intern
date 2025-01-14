import React from "react"
import { IoLogoInstagram } from "react-icons/io";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

export default function FooterBottomPart1() {

  return (
    <div className=" border-t mt-6 border-gray-300  ">
      <div className="max-w-7xl mx-auto py-4 ">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            Copyright © Sunrise Mentors Pvt. Ltd.
          </p>
          
          <div className="flex items-center gap-4">
          <IoLogoInstagram />
          <FaSquareFacebook />
          <FaLinkedin />
          <FaSquareTwitter />
          <FaYoutube />
          </div>
        </div>
      </div>
    </div>
  )
}

