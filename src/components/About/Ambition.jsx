import React from "react";
import femalePics from "../../assets/images/female.png";

const Ambition = () => {
  return (
    <div className="container mx-auto mt-10">
      <div className="lg:flex lg:justify-center lg:items-center md:flex md:flex-row md:justify-center md:items-center md:px-4 gap-3">
        <div className="w-full lg:w-1/2">
          <div className="space-y-6">
            <p className="text-3xl font-bold ">
              Turn your ambition into a <br></br> success story
            </p>
            <p className="text-md">
              Education opens up the mind, expands it and allows you to improve
              your life in so many ways. Turned it up should no valley cousin
              he. Speaking numerous ask did horrible packages set. Ashamed
              herself has distant can studied mrs. Led therefore its middleton
              perpetual fulfilled provision frankness it up should no valley.
            </p>
            <div className="flex space-x-9 justify-center sm:justify-start md:justify-start">
              <div>
                <p className="text-3xl font-bold text-[#e46601]">168K</p>
                <p className="font-bold">Online Courses</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#e46601]">454K</p>
                <p className="font-bold"> Students</p>
              </div>
            </div>
            <button className="py-4 px-8 bg-[#e46601] text-white font-bold rounded-3xl">
              Explore Course
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <img
            src={femalePics}
            alt="headerImage"
            className="h-full object-cover lg:mt-0 md:mt-8"
          />
        </div>
      </div>
    </div>
  );
};

export default Ambition;
