import React from "react";
import instructor1 from "../../assets/images/instructor.png";
import instructor2 from "../../assets/images/instructor.png";
import instructor3 from "../../assets/images/instructor.png";
const Instructor = () => {
  return (
    <div className="bg-custom-blue py-20">
      <div className="max-w-5xl mx-auto ">
        <div className="mb-10 space-y-10">
          <h1 className="font-bold text-5xl text-white  ">
            Your Instructor(s)
          </h1>
          <p className="text-white">
            With Our World Class Tutor With Backed Up Experience in Top
            Companies <br></br>You will Be Equip With The Necessary Learning
            Direction
          </p>
        </div>
        <div class="flex flex-col md:flex-row  ">
          <div class="md:w-1/3 p-4 space-y-4">
            <img src={instructor1} alt="thumbs" />
            <div className="space-y-2">
              <p className="text-white font-bold ">Danile Eniron</p>
              <p className="text-white text-xs">Finanical Data Analyst</p>
            </div>
          </div>
          <div class="md:w-1/3 p-4 space-y-4">
            <img src={instructor2} alt="thumbs" />
            <div className="space-y-2">
              <p className="text-white font-bold"> Danile Eniron</p>
              <p className="text-white text-xs">Finanical Data Analyst</p>
            </div>
          </div>
          <div class="md:w-1/3 p-4 space-y-4">
            <img src={instructor3} alt="thumbs" />
            <div className="space-y-2">
              <p className="text-white font-bold">Danile Eniron</p>
              <p className="text-white text-xs">Finanical Data Analyst</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
