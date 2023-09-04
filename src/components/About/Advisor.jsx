import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import picsProf from "../../assets/images/prof-1.jpg";
import picsProf1 from "../../assets/images/prof-2.jpg";
import picsProf2 from "../../assets/images/prof3.jpg";
import picsProf3 from "../../assets/images/prof5.jpg";

const Advisor = () => {
  return (
    <div className="container mx-auto mt-10">
      <div className="lg:flex flex-row gap-5 px-3">
        <div className="lg:w-1/2 w-full">
          <div className="space-y-4">
            <p className="font-bold text-xl">COURSE ADVISOR</p>
            <p className="font-bold text-4xl">
              Our professional & Expert <br></br> Course advisor
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 w-full">
          <div className="space-y-4">
            <p className="text-lg">
              Everything melancholy uncommonly but solicitude inhabiting
              projection off. Connection stimulated estimating excellence an to
              impression.
            </p>

            <button className="py-3 px-8 text-lg  font-bold flex items-center gap-3 rounded border border-black border-6 hover:bg-black hover:text-white  ">
              View All
              <AiOutlinePlus />
            </button>
          </div>
        </div>
      </div>

      <div className="lg:flex flex-row gap-5 mt-12 ">
        <div className="lg:w-2/5 w-full px-3  shadow-md">
          <img
            src={picsProf}
            alt="headerImage"
            className="lg:h-[250px] lg:w-[300px] md:w-full md:h-full object-cover lg:mt-0 md:mt-8  rounded-b-3xl"
          />
          <div className="text-center mt-4 mb-4">
            <p className="font-bold">Prof. Deol Jones </p>
            <p className="font-bold"> Science specialist</p>
          </div>
        </div>
        <div className="lg:w-2/5 w-full px-4 shadow-md">
          <img
            src={picsProf1}
            alt="headerImage"
            className="lg:h-[250px] lg:w-[300px] md:w-full md:h-full object-cover lg:mt-0 md:mt-8  rounded-b-3xl"
          />
          <div className="text-center mt-4 mb-4">
            <p className="font-bold">Prof. Deol Jones </p>
            <p className="font-bold"> Science specialist</p>
          </div>
        </div>
        <div className="lg:w-2/5 w-full px-4 shadow-md">
          <img
            src={picsProf2}
            alt="headerImage"
            className="lg:h-[250px] lg:w-[300px] md:w-full md:h-full  object-cover lg:mt-0 md:mt-8  rounded-b-3xl"
          />
          <div className="text-center mt-4 mb-4">
            <p className="font-bold">Prof. Deol Jones </p>
            <p className="font-bold"> Science specialist</p>
          </div>
        </div>
        <div className="lg:w-2/5 w-full px-4 shadow-md">
          <img
            src={picsProf3}
            alt="headerImage"
            className="lg:h-[250px] lg:w-[300px] md:w-full md:h-full  object-cover lg:mt-0 md:mt-8  rounded-b-3xl"
          />
          <div className="text-center mt-4 mb-4">
            <p className="font-bold">Prof. Deol Jones </p>
            <p className="font-bold"> Science specialist</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advisor;
