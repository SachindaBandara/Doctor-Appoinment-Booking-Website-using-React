import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-4xl font-medium pt-10 text-gray-500">
        <p>
          About <span className="text-gray-700 font-semibold">Us</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
          At Medical Care, we are dedicated to making healthcare accessible and convenient for everyone. Our platform allows users to effortlessly browse through a wide range of highly qualified doctors and specialists. Whether you're looking for a general practitioner or a specific medical expert, our comprehensive directory ensures you can find the right healthcare provider to meet your needs.
          </p>
          <p>
          Booking an appointment is straightforward. With just a few clicks, you can choose your preferred doctor, view their availability, and schedule an appointment at a time that suits you. We prioritize user experience, ensuring that the process is seamless and efficient, saving you time while giving you peace of mind about your healthcare decisions.
          </p>
          <p>
          At Medical Care, your health and well-being are our top priorities. We continuously work to expand our network of trusted healthcare professionals, ensuring that you have access to top-tier care whenever you need it. From routine check-ups to specialized treatments, our platform is designed to empower you to take control of your healthcare journey with confidence and ease.
          </p>
        </div>
      </div>

      <div className="text-4xl font-medium text-center text-gray-500 my-10 pt-20">
        <p>
          Why <span className="text-gray-700 font-semibold">Choose Us</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <p className="text-xl font-bold">Efficiency</p>
          <p>Our doctor appointment system at Medical Care is designed for maximum efficiency, allowing you to quickly find and schedule appointments with trusted healthcare professionals. With a user-friendly interface and streamlined booking process, you can browse specialists, check availability, and secure an appointment in just a few clicks, saving you valuable time and effort.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <p className="text-xl font-bold">Convenience</p>
          <p>At Medical Care, we prioritize convenience by offering an easy-to-use platform for booking doctor appointments. With a few simple clicks, you can browse a wide range of specialists, check their availability, and schedule an appointment that fits your busy schedule. Our goal is to streamline the process, saving you time and providing a hassle-free experience for managing your healthcare needs.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <p className="text-xl font-bold">Personalization</p>
          <p>
          At Medical Care, we offer personalized doctor appointment services tailored to your individual healthcare needs. Our platform allows you to find specialists based on your preferences, medical history, and location, ensuring you connect with the right doctor for your specific condition. With a focus on convenience and customization, we make your healthcare experience more personal and efficient.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
