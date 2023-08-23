import React from "react";
import LearningInfo from "./components/LearningInfo";

function Start() {
  return (
    <div className="bg-[#021b76] py-12">
      <div className="container max-w-6xl mx-auto pb-12">
        <div className="pt-12 py-3">
          <h1 className="text-center text-5xl font-bold pb-4">
            {" "}
            Start Learning With Us Now
          </h1>
          <p className="text-center mb-5 text-white">
            Become A Professional In Any Of This Course
          </p>
        </div>
        <div className="flex justify-center items-center">
          <LearningInfo title="Business Dev" />
          <LearningInfo title="Dev Ops" />
          <LearningInfo title="Data Science" />
        </div>
        <div className="flex justify-center items-center ">
          <LearningInfo title="Tableau" />
          <LearningInfo title=" Microsoft SQL" />
          <LearningInfo title="python" />
        </div>
      </div>
    </div>
  );
}

export default Start;
