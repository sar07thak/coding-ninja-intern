import React from "react";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Courses } from "./components/Courses";
import { IItCertificate } from "./components/IItCertificate";

export const App = () => {
  return (
    <>
      <Navbar />
      <Home/>
      <Courses />
      <IItCertificate />
    </>
  );
};
