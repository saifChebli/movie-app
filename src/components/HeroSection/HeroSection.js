import React from "react";
import "./HeroSection.css";
import image from "./image-1.png";
import Navbar from "../Navbar/Navbar";

const HeroSection = (props) => {

  return (
    <div className="hero-section flex flex-col">
          <Navbar />

    <div className=" mt-36 flex flex-col justify-center items-center">
        <h1 className="text-5xl">Your Ultimate Movie Companion</h1>
        <h5 className="mt-8">"Stream, Download, and Enjoy Movies on the Go"</h5>
    </div>
    </div>
  );
};

export default HeroSection;
