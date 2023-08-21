import React from "react";

function Start() {
  return (
    <div className="bg-[#021b76] py-12">
      <div className="container max-w-6xl mx-auto pb-12">
        <div className="pt-12 py-3">
          <h1 className="text-center text-5xl font-bold pb-4 text-gradientColorStops">
            {" "}
            Start Learning With Us Now
          </h1>
          <p className="text-center mb-5 text-white">
            Become A Professional In Any Of This Course
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-64 p-2">
            <div className="h-full bg-[#2d418d] flex flex-col justify-center items-center py-4 rounded-3xl text-white ">
              <p>Business Dev</p>
            </div>
          </div>
          <div className="w-64 p-2">
            <div className="h-full bg-[#2d418d] flex flex-col justify-center items-center py-4 rounded-3xl text-white ">
              <p>Dev Ops</p>
            </div>
          </div>
          <div className="w-64 p-2">
            <div className="h-full bg-[#2d418d] flex flex-col justify-center items-center py-4 rounded-3xl text-white ">
              <p>Data Science</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="w-64 p-2">
            <div className="h-full bg-[#2d418d] flex flex-col justify-center items-center py-4 rounded-3xl  text-white">
              <p className="text-center">Tableau</p>
            </div>
          </div>
          <div className="w-64 p-2">
            <div className="h-full bg-[#2d418d] flex flex-col justify-center items-center  py-5 rounded-3xl  text-white">
              <p className="text-center">Oracle Microsoft SQL</p>
            </div>
          </div>
          <div className="w-64 p-2">
            <div className="h-full bg-[#2d418d] flex flex-col justify-center items-center py-4 rounded-3xl text-white ">
              <p className="text-center">Python</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Start;
