import React from "react";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Courses } from "./components/Courses";
import { IItCertificate } from "./components/IItCertificate";
import { ScrollerPart1 } from "./components/ScrollerPart1";

export const App = () => {
  return (
    <>
    <div className="overflow-x-hidden">
      <Navbar />
      <Home/>
      <Courses />
      <IItCertificate />
      <ScrollerPart1 />
    </div>
    </>
  );
};
