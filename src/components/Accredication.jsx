import React from "react";
import { GiOpenBook } from "react-icons/gi";
import { BsPeopleFill } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import { PiStudentBold } from "react-icons/pi";

function Accredication() {
  return (
    <div className=" py-20">
      <div className="container max-w-xlg mx-auto flex justify-center items-center">
        <div className="w-3/5 ">
          <div className="h-full bg-blue-500 flex items-center justify-center py-4 rounded-lg ">
            <div className="p-4 text-center flex items-center justify-center space-x-2">
              <BiWorld size={30} className="text-white" />
              <div className="flex flex-col">
                <h1 className="font-bold text-lg sm:text-xl md:text-2xl text-white">
                  30+
                </h1>
                <h2 className="text-md sm:text-xl md:text-xl font-semibold text-white">
                  Courses
                </h2>
              </div>
            </div>

            <div className="p-4 text-center flex items-center justify-center space-x-2">
              <PiStudentBold size={30} className="text-white" />
              <div className="flex flex-col">
                <h1 className="font-bold text-lg sm:text-xl md:text-2xl text-white">
                  100+
                </h1>
                <h2 className="text-md sm:text-xl md:text-xl font-semibold text-white">
                  Happy Students
                </h2>
              </div>
            </div>
            <div className="p-4 text-center flex items-center justify-center space-x-2">
              <GiOpenBook size={30} className="text-white" />
              <div className="flex flex-col items-center">
                <h1 className="font-bold text-lg sm:text-xl md:text-2xl text-white">
                  30+
                </h1>
                <h2 className="text-md sm:text-xl md:text-xl font-semibold text-white">
                  Online Courses
                </h2>
              </div>
            </div>
            <div className="p-4 text-center flex items-center justify-center space-x-2">
              <PiStudentBold size={30} className="text-white" />
              <div className="flex flex-col">
                <h1 className="font-bold text-lg sm:text-xl md:text-2xl text-white">
                  100+
                </h1>
                <h2 className="text-md sm:text-xl md:text-xl font-semibold text-white">
                  Happy Students
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accredication;
