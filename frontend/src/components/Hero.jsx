import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col mt-[10%] md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20">
      {/* Left side */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
        Book Appointment <br /> With Leading Doctors
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm">
            <img className="w-24" src={assets.group_profiles} alt=""/>
            <p>Simply browse our comprehensive list of <br className="hidden sm:block"/>trusted doctors.</p>
        </div>
        <a className="flex item-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm font-semibold m-auto md:m-0 hover:scale-105 transition-all duration-300 " href="#speciality">
            Book Appointment <img className="w-3" src={assets.arrow_icon} alt=""/>
        </a>
      </div>

      {/* Right side */}
      <div className="md:w-1/2 relative">
        <img className="w-full md:absolute bottom-0 h-auto rounded-lg" src={assets.header_img} alt=""/>
      </div>
    </div>
  );
};

export default Hero;
