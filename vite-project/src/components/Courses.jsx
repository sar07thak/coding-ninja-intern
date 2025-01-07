import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Courses = () => {
//   const boxRef = useRef(null);

//   useEffect(() => {
//     gsap.to(boxRef.current, {
//       scrollTrigger: {
//         trigger: boxRef.current, // Element that triggers the animation
//         start: "top 80%", // Start animation when top of element is 80% down the viewport
//         end: "top 30%", // End animation when top of element is 30% down the viewport
//         scrub: 1, // Smooth scrubbing
//         markers: true, // Show start and end markers (useful for debugging)
//       },
//       y: 300, // Animation: Move the element 300px along the X-axis
//       rotation: 360, // Rotate the element
//       duration: 2, // Duration of the animation
//     });
//   }, []);
  return (
    <>
      <div className=""></div>
      <div className="relative z-[-1] bg-cover bg-center text-white bg-red-600 flex justify-center items-center p-10 gap-16">
      <div className="absolute left-[340px]  border-black border-l-2 border-dotted h-56 ">
      </div>
        <div>
            <h1 className="text-8xl font-bold text-[#E3E3E3] ">OUR OFFERINGS</h1>
            <div>
                <p>Job Bootcamp</p>
                <div>For graduates</div>
            </div>
            <div>
                <div>Full Stack Web Development</div>
                <div>Data Analytics</div>
            </div>
        </div>
      </div>
    </>
  );
};

// <div
//         ref={boxRef}
//         className="w-20 h-20 bg-blue-500 text-white flex items-center justify-center"
//       >
//         Scroll Me
//       </div>

// <div></div>
//           <div>
//             <h1>OUR OFFERINGS</h1>
//             <div>
//               <P>Job Bootcamp </P>
//               <div>For graduates</div>
//             </div>
//             <div>
//                 <div>Full Stack Web Development</div>
//                 <div>Data Analytics</div>
//             </div>
//           </div>
//         </div>