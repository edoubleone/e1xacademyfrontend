import React from "react";
import videoImage from "../../assets/images/videoImage.jpg";
import { LuSchool } from "react-icons/lu";
import { PiStudentLight } from "react-icons/pi";

const Choose = () => {
  return (
    <div className="container mx-auto mt-12 ">
      <div className="text-center space-y-5">
        <p className="font-bold text-xl">WHY CHOSE US</p>
        <p className="font-bold text-3xl text-gray-500">
          Everything you Need for your <br></br> Institute or University
        </p>
      </div>
      <div className="lg:flex md:flex-row gap-8 mt-10 ">
        <div className="lg:w-3/5 h-[400px] bg-slate-300 ">
          <img
            src={videoImage}
            alt="headerImage"
            className="w-full h-full object-cover lg:mt-0 md:mt-8"
          />
        </div>

        <div className="lg:w-2/5 h-[450px] px-4 py-8 shadow-md">
          <div className="flex items-center justify-between  text-gray-200 ">
            <p className="font-bold text-3xl">01</p>
            <LuSchool className="w-9 h-9" />
          </div>

          <div className="space-y-6 mt-4">
            <p className="font-bold text-xl">Certified Teachers</p>
            <p>
              Absolute required of reserved in offering no. How sense found our
              those gay again taken the preserved ikewise law.
            </p>
            <div className="space-y-4 font-bold">
              <p>Professional training</p>
              <p>Present content to students</p>
              <p>Students responsibility</p>
            </div>
          </div>
        </div>
        <div className="lg:w-2/5 h-[450px] px-4 py-8 shadow-md">
          <div className="flex items-center justify-between text-gray-200   ">
            <p className="font-bold text-3xl">02</p>
            <PiStudentLight className="w-9 h-9" />
          </div>

          <div className="space-y-6 mt-4">
            <p className="font-bold text-xl">Books & Library</p>
            <p>
              Absolute required of reserved in offering no. How sense found our
              those gay again taken the preserved ikewise law.
            </p>
            <div className="space-y-4 font-bold">
              <p>Carrel Booking</p>
              <p>Student Reading Room</p>
              <p>Science library</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
