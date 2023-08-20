import React from "react";

function Start() {
  return (
    <div className="bg-green-100">
      <div className="container max-w-6xl mx-auto pb-12 ">
        <div className="pt-12">
          <h1 className="text-center text-5xl font-bold pb-4">
            {" "}
            Start Learning With Us Now
          </h1>
          <p className="text-center mb-5">
            Become A Professional In Any Of This Course
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-48 p-4">
            <div className="h-full bg-blue-200 flex flex-col justify-center items-center py-4 rounded-3xl ">
              <p>Business Dev</p>
            </div>
          </div>
          <div className="w-48 p-4">
            <div className="h-full bg-green-200 flex flex-col justify-center items-center py-4 rounded-3xl ">
              <p>Dev Ops</p>
            </div>
          </div>
          <div className="w-48 p-4">
            <div className="h-full bg-yellow-200 flex flex-col justify-center items-center py-4 rounded-3xl ">
              <p>Data Science</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="w-48 p-4">
            <div className="h-full bg-purple-200 flex flex-col justify-center items-center py-4 rounded-3xl ">
              <p className="text-center">Tableau</p>
            </div>
          </div>
          <div className="w-64 p-5">
            <div className="h-full bg-pink-200 flex flex-col justify-center items-center  py-5 rounded-3xl  ">
              <p className="text-center">Oracle Microsoft SQL</p>
            </div>
          </div>
          <div className="w-48 p-4">
            <div className="h-full bg-orange-200 flex flex-col justify-center items-center py-4 rounded-3xl ">
              <p className="text-center">Python</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Start;
