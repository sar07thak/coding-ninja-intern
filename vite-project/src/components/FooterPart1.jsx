import React from "react";
import moutainLaptop from "../assets/1111mountain-33077.webp";
import moutainmobile from "../assets/mountain_mobile3x-33084.webp";
import threeCN from "../assets/new360.png";
import CN2 from "../assets/newCn2.png";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import FooterBottomPart1 from "./FooterBottomPart1";

export const FooterPart1 = () => {
  return (
    <>
      <div className="text-gray-300 py-8 px-4 sm:px-6 lg:px-8 bg-custom-gradient relative md:flex justify-center items-center">
        <img
          src={moutainLaptop}
          alt=""
          className="absolute left-0 hidden h-[400px] md:flex  bottom-0"
        />
        <img src={moutainmobile} alt="" className="absolute right-0 flex w-[200px] h-screen md:hidden  bottom-0" />
        <div className=" max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-6 sm:space-y-8">
              <div>
                <img
                  src={CN2}
                  alt="Coding Ninjas Logo"
                  className="mb-6 max-w-[160px] sm:max-w-[180px]"
                />
                <h3 className="text-white font-medium mb-4 text-lg">
                  Contact us
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <FaPhone className="h-5 w-5" />
                    <span>1800-123-3598</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <MdOutlineMail className="h-5 w-5 group-hover:text-primary" />
                    <span>contact@codingninjas.com</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <h3 className="text-white font-medium text-lg">
                  Our offerings
                </h3>
                <div className="flex flex-col gap-4">
                  <img
                    src={CN2}
                    alt="Job Bootcamp"
                    className="opacity-90 hover:opacity-100 transition-opacity max-w-[140px] sm:max-w-[160px]"
                  />

                  <img
                    src={CN2}
                    alt="Code 360"
                    className="opacity-90 hover:opacity-100 transition-opacity max-w-[140px] sm:max-w-[160px]"
                  />
                </div>
              </div>
            </div>

            {/* Navigation Sections */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:col-span-3">
              {/* Coding Ninjas Links */}
              <nav className="space-y-4">
                <h3 className="text-white font-medium text-lg">
                  Coding Ninjas
                </h3>
                <ul className="space-y-3">
                  {[
                    ["Careers", "/careers"],
                    ["Privacy policy", "/privacy"],
                    ["Terms & conditions", "/terms"],
                    ["Pricing & refund policy", "/pricing"],
                    ["Bug bounty", "/bug-bounty"],
                    ["Review", "/reviews"],
                    ["Press release", "/press"],
                  ].map(([title, url]) => (
                    <li key={url}>{title}</li>
                  ))}
                </ul>
              </nav>

              {/* Products Links */}
              <nav className="space-y-4">
                <h3 className="text-white font-medium text-lg">Products</h3>
                <ul className="space-y-3">
                  {[
                    ["Job Bootcamp", "/bootcamp"],
                    ["Code 360", "/code360"],
                  ].map(([title, url]) => (
                    <li key={url}>{title}</li>
                  ))}
                </ul>
              </nav>

              {/* Community Links */}
              <nav className="space-y-4">
                <h3 className="text-white font-medium text-lg">Community</h3>
                <ul className="space-y-3">
                  {[
                    ["10X Club", "/10x-club"],
                    ["Student Chapters", "/chapters"],
                    ["Hire from us", "/hire"],
                  ].map(([title, url]) => (
                    <li key={url}>{title}</li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Mobile Accordion for Navigation (Optional) */}
            <div className="mt-8 pt-8  lg:hidden">
              <div className="grid grid-cols-1 gap-4">
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <h3 className="text-white font-medium text-lg">
                      Quick Links
                    </h3>
                    <span className="transform group-open:rotate-180 transition-transform"></span>
                  </summary>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <nav>
                      <h4 className="font-medium mb-2">Products</h4>
                      <ul className="space-y-2">
                        <li>
                          <a
                            href="/bootcamp"
                            className="hover:text-white transition-colors"
                          >
                            Job Bootcamp
                          </a>
                        </li>
                        <li>
                          <a
                            href="/code360"
                            className="hover:text-white transition-colors"
                          >
                            Code 360
                          </a>
                        </li>
                      </ul>
                    </nav>
                    <nav>
                      <h4 className="font-medium mb-2">Community</h4>
                      <ul className="space-y-2">
                        <li>
                          <a
                            href="/10x-club"
                            className="hover:text-white transition-colors"
                          >
                            10X Club
                          </a>
                        </li>
                        <li>
                          <a
                            href="/chapters"
                            className="hover:text-white transition-colors"
                          >
                            Student Chapters
                          </a>
                        </li>
                        <li>
                          <a
                            href="/hire"
                            className="hover:text-white transition-colors"
                          >
                            Hire from us
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </details>
              </div>
            </div>
          </div>
        <FooterBottomPart1 />
        </div>

      </div>
    </>
  );
};
