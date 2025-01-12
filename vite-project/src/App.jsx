import React from "react";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Courses } from "./components/Courses";
import { IItCertificate } from "./components/IItCertificate";
import { ScrollerPart1 } from "./components/ScrollerPart1";
import { ScrollerPart2 } from "./components/ScrollerPart2";
import { SliderCompo } from "./components/SliderCompo";
import { Review } from "./components/Review";
// import { Demo } from "./components/Demo";
import { LearningModel } from "./components/LearningModel";

export const App = () => {
  return (
    <>
    <div className="overflow-x-hidden">
      <Navbar />
      <Home/>
      <Courses />
      <IItCertificate />
      <ScrollerPart1 />
      <ScrollerPart2 />
      <SliderCompo />
      <Review />
      <LearningModel />
    </div>
    </>
  );
};
