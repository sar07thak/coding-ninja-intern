import React from "react";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Courses } from "./components/Courses";
import { IItCertificate } from "./components/IItCertificate";
import { ScrollerPart1 } from "./components/ScrollerPart1";
import { ScrollerPart2 } from "./components/ScrollerPart2";
import { SliderCompo } from "./components/SliderCompo";
import { Review } from "./components/Review";
import { LearningModel } from "./components/LearningModel";
import { PageAfterLearningModel } from "./components/PageAfterLearningModel";
import { Mentor_faculty } from "./components/Mentor_faculty";
import { Mentor_faculty2 } from "./components/Mentor_faculty2";
import { Mentor_faculty3 } from "./components/Mentor_faculty3";
import { Spotlight } from "./components/Spotlight";
import { Certificate } from "./components/Certificate";
import { FooterPart1 } from "./components/FooterPart1";
import { FooterPart2 } from "./components/FooterPart2";

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
      <PageAfterLearningModel />
      <Mentor_faculty />
      <Mentor_faculty2 />
      <Mentor_faculty3 />
      <Spotlight />
      <Certificate />
      <FooterPart1 />
      <FooterPart2 />
    </div>
    </>
  );
};
