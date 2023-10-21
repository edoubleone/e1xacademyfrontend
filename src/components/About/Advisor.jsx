import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import instructor2 from "../../assets/images/instructor.png";



const Advisor = () => {
  return (
    <div className="bg-custom-gradient py-24">
      <div className="max-w-6xl mx-auto ">
        <div className="lg:flex flex-row gap-5 px-3">
          <div className="lg:w-1/2 w-full">
            <div className="space-y-4">
              <p className="font-bold text-xl text-white">COURSE ADVISOR</p>
              <p className="border-b-2 border-white w-16 pb-4 t"></p>

              <p className="font-bold text-4xl text-white">
                Our professional & Expert <br></br> Course advisor
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="space-y-4">
              <p className="text-lg text-white">
                At E1X Academy, our lectures are anything but melancholy. We
                pride ourselves on offering exceptional and stimulating content
                that leaves a lasting impression on our students.
              </p>

              <button className="py-3 px-8 text-lg  font-bold flex items-center gap-3 rounded  text-white bg-custom-button border-6    ">
                View All
                <AiOutlinePlus />
              </button>
            </div>
          </div>
        </div>

        <div className="lg:flex md:flex-row md:flex md:justify-center gap-5 mt-20  ">
          <div className="lg:w-2/5 w-full px-3 shadow-md py-3 mb-4">
            <img src={instructor2} alt="thumbs" className="mx-auto" />
            <div className="space-y-2 text-center">
              <p className="text-white font-bold"> Danile Eniron</p>
              <p className="text-white text-xs">Financial Data Analyst</p>
            </div>
          </div>
          <div className="lg:w-2/5 w-full px-3 shadow-md py-3 mb-4">
            <img src={instructor2} alt="thumbs" className="mx-auto" />
            <div className="space-y-2 text-center">
              <p className="text-white font-bold"> Danile Eniron</p>
              <p className="text-white text-xs">Financial Data Analyst</p>
            </div>
          </div>
          <div className="lg:w-2/5 w-full px-3 shadow-md py-3 mb-4">
            <img src={instructor2} alt="thumbs" className="mx-auto" />
            <div className="space-y-2 text-center">
              <p className="text-white font-bold"> Danile Eniron</p>
              <p className="text-white text-xs">Financial Data Analyst</p>
            </div>
          </div>
          <div className="lg:w-2/5 w-full px-3 shadow-md py-3 mb-4">
            <img src={instructor2} alt="thumbs" className="mx-auto" />
            <div className="space-y-2 text-center">
              <p className="text-white font-bold"> Danile Eniron</p>
              <p className="text-white text-xs">Financial Data Analyst</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advisor;
