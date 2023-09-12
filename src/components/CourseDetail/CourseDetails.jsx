import React from "react";
import { useParams } from "react-router-dom";

import vector from "../../assets/icons/Vector.png";

import illustration from "../../assets/images/illustration.png";
const CourseDetails = () => {
  const { courseId } = useParams();
  console.log(courseId);
  return (
    <div className="bg-custom-gradient  lg:h-[850px] h-full ">
      <div className="max-w-6xl lg:flex mx-auto py-6 px-6">
        <div className="relative  lg:w-1/2 w-full  space-y-8 mt-9   ">
          <button className="border border-blue-300 py-2 px-6 text-white">
            Live Programme
          </button>

          <h1 className="font-bold text-white lg:text-6xl md:text-3xl">
            Become A Financial <br></br> Data Analyst{" "}
          </h1>
          <p className="text-white lg:text-lg md:text-xs">
            Becoming a financial data analyst involves acquiring the skills to
            gather, analyze, and interpret financial data to support
            decision-making and provide valuable insights to organizations
          </p>
        </div>

        <div className="lg:w-1/2 w-full flex flex-col items-center justify-center">
          <div className="mb-4">
            <img src={illustration} alt="illustration" />
          </div>
          <div className="flex space-x-11">
            <button className="border-none bg-custom-button outline-none px-12 md:px-16 py-2 rounded-md text-white">
              Enroll
            </button>

            <button className="border px-8 md:px-12 py-2 md:py-3 text-white">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <div className="absolute mt-[-350px] w-[650px] py-8 md:block hidden space-y-4 bg-blue-600">
        <div className="flex items-center justify-between w-full px-4  ">
          <div className="flex items-center  gap-1">
            <img src={vector} alt="vector" className="ml-28" />
            <p className="text-left text-white">Level</p>
          </div>
          <p className="text-right text-white">Beginner</p>
        </div>

        <div className="flex items-center justify-between w-full px-4  ">
          <div className="flex items-center  gap-1">
            <img src={vector} alt="vector" className="ml-28" />
            <p className="text-left text-white">Level</p>
          </div>
          <p className="text-right text-white">Beginner</p>
        </div>
        <div className="flex items-center justify-between w-full px-4  ">
          <div className="flex items-center  ">
            <img src={vector} alt="vector" className="ml-28" />
            <p className="text-left text-white">Level</p>
          </div>
          <p className="text-right text-white">Beginner</p>
        </div>
        <div className="flex items-center justify-between w-full px-4">
          <div className="flex items-center  gap-1">
            <img src={vector} alt="vector" className="ml-28" />
            <p className="text-left text-white">Level</p>
          </div>
          <p className="text-right text-white">Beginner</p>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
