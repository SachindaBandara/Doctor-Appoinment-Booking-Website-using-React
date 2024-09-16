import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div>
      {/* Left side */}
      <div>
        <p>
          Book Appointment <br /> With Trusted Doctors
        </p>
        <div>
            <img src={assets.group_profiles} alt=""/>
            <p>Simply browser through our extensive list of trusted doctors...</p>
        </div>
        <a href="">
            Book Appointment <img src={assets.arrow_icon} alt=""/>
        </a>
      </div>

      {/* Right side */}
      <div>
        <img src={assets.header_img} alt=""/>
      </div>
    </div>
  );
};

export default Hero;
