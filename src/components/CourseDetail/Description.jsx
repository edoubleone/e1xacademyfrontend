import React from "react";

const Description = () => {
  return (
    <div className="w-full custom-description-background h mx-auto  ">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center space-x-10 justify-center py-5 p-4">
          <button className="font-bold border-b-4 border-transparent hover:border-[#e46601] pb-3 focus:outline-none">
            Overview
          </button>
          <button className="font-bold border-b-4 border-transparent hover:border-[#e46601] pb-3 focus:outline-none">
            Course Content
          </button>
          <button className="font-bold border-b-4 border-transparent hover:border-[#e46601] pb-3 focus:outline-none">
            Instructor
          </button>
          <button className="font-bold border-b-4 border-transparent hover:border-[#e46601] pb-3 focus:outline-none">
            Reviews
          </button>
        </div>
      </div>
      <div className="border-t pb-6"></div>
      <div className="max-w-5xl mx-auto space-y-5 mt-6 py-12 p-4">
        <p className="font-bold text-2xl">Description</p>
        <div className="space-y-5">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            nemo, aspernatur deserunt a modi mollitia vitae eligendi ratione.
            Sunt quae deleniti omnis a, excepturi dolor quos itaque atque?
            Illum, enim Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Inventore nemo, aspernatur deserunt a modi mollitia vitae eligendi
            ratione. Sunt quae deleniti omnis a, excepturi dolor quos itaque
            atque? Illum, enim?
          </p>

          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            nemo, aspernatur deserunt a modi mollitia vitae eligendi ratione.
            Sunt quae deleniti omnis a, excepturi dolor quos itaque atque?
            Illum, enim?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            nemo, aspernatur deserunt a modi mollitia vitae eligendi ratione.
            Sunt quae deleniti omnis a, excepturi dolor quos itaque atque?
            Illum, enim?
          </p>
        </div>
        <p className="border-b border-[#e46601] w-[80px] text-[#e46601] ">
          Show Less
        </p>
      </div>
    </div>
  );
};

export default Description;
