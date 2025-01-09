// script.js
document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);
  
    const progressBar = document.querySelector(".progress-bar");
  
    gsap.to(progressBar, {
      scrollTrigger: {
        trigger: document.body, // Track the entire page scroll
        start: "top top", // Start when the top of the page is at the top of the viewport
        end: "bottom bottom", // End when the bottom of the page is at the bottom of the viewport
        scrub: true, // Smooth animation synced with scrolling
      },
      height: "100%", // Animate height from 0 to 100%
      ease: "linear",
    });
  });
  