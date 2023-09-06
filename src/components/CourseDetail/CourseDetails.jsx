import React from "react";
import vector from "../../assets/icons/Vector.png";
import vectorBackground from "../../assets/icons/vectorbackground.png";
import illustration from "../../assets/images/illustration.png";
const CourseDetails = () => {
  return (
    <div className="bg-custom-gradient  h-[800px]">
      <div className="container flex mx-auto py-6 px-6">
        <div className="relative  lg:w-1/2 w-full  space-y-8 mt-9   ">
          <button className="border border-blue-300 py-2 px-6 text-white">
            Live Programme
          </button>

          <h1 className="font-bold text-white text-6xl">
            Become A Financial <br></br> Data Analyst{" "}
          </h1>
          <p className="text-white">
            Determine The Current Production And Predict <br></br>Future Trends,
            Identify The company Financial <br></br>
            Situation And Recommend Corrective Action
          </p>
        </div>

        <div className="lg:w-1/2 md:w-full flex flex-col items-center justify-center">
          <div className="mb-4">
            <img src={illustration} alt="illustration" />
          </div>
          <div className="flex space-x-11">
            <button className=" border-none bg-custom-button outline-none px-16 py-3 rounded-md text-white">
              Enroll
            </button>
            <button className="border px-12 py-3 text-white ">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <div className="absolute mt-[-350px] w-[650px] py-8  space-y-4 bg-blue-600">
        <div className="flex items-center justify-between w-full px-12 ">
          <div className="flex items-center  gap-1">
            <img src={vector} alt="vector" />
            <p className="text-left text-white">Level</p>
          </div>
          <p className="text-right text-white">Beginner</p>
        </div>

        <div className="flex items-center justify-between w-full px-12 ">
          <div className="flex items-center  gap-1">
            <img src={vector} alt="vector" />
            <p className="text-left text-white">Level</p>
          </div>
          <p className="text-right text-white">Beginner</p>
        </div>
        <div className="flex items-center justify-between w-full px-12 ">
          <div className="flex items-center  gap-1">
            <img src={vector} alt="vector" />
            <p className="text-left text-white">Level</p>
          </div>
          <p className="text-right text-white">Beginner</p>
        </div>
        <div className="flex items-center justify-between w-full px-12 ">
          <div className="flex items-center  gap-1">
            <img src={vector} alt="vector" />
            <p className="text-left text-white">Level</p>
          </div>
          <p className="text-right text-white">Beginner</p>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
