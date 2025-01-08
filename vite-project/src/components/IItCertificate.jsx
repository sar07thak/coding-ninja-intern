import React from "react";
import bgimage from "../assets/n3.jpg";

export const IItCertificate = () => {
  return (
    <>
      <div
        className="relative z-[-1] bg-cover backdrop-contrast-200 backdrop-brightness-200 h-[600px] bg-center "
        style={{ backgroundImage: `url(${bgimage})` }}
      >
        <div>
          <div>For graduates</div>
          <div>
            <div>PG Certification in Data Analytics</div>
            <div>E&ICT Academy , IIT Guwahati</div>
          </div>
          <div>For College Students</div>
          <div>
            <div>Traning and internsgip Certification in Advanced DSA</div>
            <div>E&ICT Academy, IIT Guwahati</div>
          </div>
          <div>
            <div>Traning and internsgip Certification in Data Analytics</div>
            <div>E&ICT Academy, IIT Guwahati</div>
          </div>
        </div>
      </div>
    </>
  );
};
