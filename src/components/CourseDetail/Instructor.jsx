import React from "react";
import instructor1 from "../../assets/images/instructor.png";
import instructor2 from "../../assets/images/instructor.png";
import instructor3 from "../../assets/images/instructor.png";
const Instructor = () => {
  return (
    <div className="bg-custom-blue py-20">
      <div className="max-w-5xl mx-auto ">
        <div className="mb-10 lg:space-y-10 md:space-y-2 px-4">
          <h1 className="font-bold lg:text-5xl text-2xl text-white text-center md:text-left">
            Your Instructor(s)
          </h1>

          <p className="text-white lg:text-lg text-xs">
            With Our World Class Tutor With Backed Up Experience in Top
            Companies
            <br className="hidden lg:inline" />
            You will Be Equip With The Necessary Learning Direction
          </p>
        </div>
        <div class="flex flex-col md:flex-row items-center justify-center md:justify-start">
          <div class="md:w-1/3 p-4 space-y-4">
            <img src={instructor1} alt="thumbs" />
            <div className="space-y-2">
              <p className="text-white font-bold ">Danile Eniron</p>
              <p className="text-white text-xs">Financial Data Analyst</p>
            </div>
          </div>
          <div class="md:w-1/3 p-4 space-y-4">
            <img src={instructor2} alt="thumbs" />
            <div className="space-y-2">
              <p className="text-white font-bold"> Danile Eniron</p>
              <p className="text-white text-xs">Financial Data Analyst</p>
            </div>
          </div>
          <div class="md:w-1/3 p-4 space-y-4">
            <img src={instructor3} alt="thumbs" />
            <div className="space-y-2">
              <p className="text-white font-bold">Danile Eniron</p>
              <p className="text-white text-xs">Financial Data Analyst</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
