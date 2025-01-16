import React from "react";
import upi from "../assets/upi-32277.webp";
import paypal from "../assets/frame-1000003730-32280.webp";
import visa from "../assets/frame-1000003729-32279.webp";
import razorpay from "../assets/razorpay-32276.webp";
import NCE from "../assets/no-cost-emi-32275.webp";
import { HiShieldCheck } from "react-icons/hi2";

export const FooterPart2 = () => {
  return (
    <footer className="bg-[#1B1B1D] text-gray-300 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Important Links Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Important Links</h2>
          <div className="space-y-2 md:space-y-0 md:flex md:gap-2">
            <h3 className="text-base font-medium whitespace-nowrap">
              Job Bootcamp for professionals
            </h3>
            <div className="text-sm md:text-base flex flex-col md:flex-row md:items-center gap-2">
              <a href="#" className="hover:text-white transition-colors">
                Web Development Bootcamp (MERN & Springboot)
              </a>
              <span className="hidden md:inline">|</span>
              <a href="#" className="hover:text-white transition-colors">
                Data Analytics Job Bootcamp
              </a>
            </div>
          </div>
        </section>

        {/* Payment Methods Section */}
        <section className="space-y-6">
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
            <h3 className="text-lg font-medium whitespace-nowrap">
              We accept payments using:
            </h3>
            <div className="flex flex-wrap gap-4 items-center">
              <img src={visa} alt="Visa" className="h-6 w-auto object-contain" />
              <img src={paypal} alt="PayPal" className="h-6 w-auto object-contain" />
              <img src={upi} alt="UPI" className="h-6 w-auto object-contain" />
              <img src={NCE} alt="No Cost EMI" className="h-6 w-auto object-contain" />
            </div>
            <div className="flex md:justify-center items-center gap-2">
            <div className="flex items-center w-[310px] gap-2 bg-[#4C7BF4] text-white px-4 text-sm p-1 rounded">
              <HiShieldCheck className="w-5 h-5" />
              <span>100% safe & secure payment</span>
            </div>
            <img 
              src={razorpay} 
              alt="Razorpay" 
              className="h-6 w-auto object-contain"
            />
            </div>
          </div>
          <div className="md:text-9xl sm:text-7xl mt-10 text-6xl flex justify-center md:items-center  font-bold text-transparent h-40 bg-clip-text
                   bg-gradient-to-r from-[rgba(217, 217, 217, 0)]  to-[rgba(217, 217, 217, .7)]                  animate-gradient-text"
            style={{
              backgroundImage:
                "linear-gradient(105deg,#333333,#444444,#333333,#222222,#111111,#000000)",
              backgroundSize: "200% 200%",
            }} >
            Coding Ninjas
          </div>
        </section>
      </div>
    </footer>
  );
};

