import React from "react";
import { BiCheckCircle } from "react-icons/bi";
import manInstructor from "../assets/images/man.png";
import womanInstructor from "../assets/images/woman.png";

function Instructor() {
  return (
    <div className="container max-w-5xl mx-auto justify-center items-center">
      <div className="flex items-start">
        <div className="w-1/2 p-4 ">
          <div className="h-full flex flex-col">
            <img src={manInstructor} alt="manInstructor" />
          </div>
        </div>

        <div className="w-1/2 p-4 mt-20 ">
          <div className="h-full flex flex-col ">
            <h2 className="p-4 text-4xl font-bold">
              Instructor-Led <br></br>Live Classes
            </h2>
            <div className="p-4 space-y-10">
              <div className="flex items-center space-x-2">
                <BiCheckCircle />
                <p>Learn From The Comfort Of Your Living Room</p>
              </div>
              <div className="flex items-center space-x-2">
                <BiCheckCircle />
                <p>Be Matched With Other Learners And Coaches</p>
              </div>
              <div className="flex items-center space-x-2">
                <BiCheckCircle />
                <p>Work On Trade Cases And Capstone Projects</p>
              </div>
              <div className="flex items-center space-x-2">
                <BiCheckCircle />
                <p>Live Classes Means You Can Archive Your Entire Class</p>
              </div>
              <div className=" flex items-center space-x-2">
                <BiCheckCircle />
                <p>1009 Virtual</p>
                <div className="flex items-center space-x-2  ">
                  <BiCheckCircle />

                  <p>Flexible Payment</p>
                </div>
              </div>
              <button className="bg-[#e46601] hover:bg-[#e46601] text-white  py-4 px-8 rounded-lg w-60">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center  ">
        <div className=" mt-20 w-1/2 p-4">
          <div className="h-full flex flex-col">
            <h1 className="p-4 text-4xl font-bold">
              Your Entire Enterprise <br></br>Transformation
            </h1>
            <div className="p-4  space-y-10">
              <div className="flex items-center justify-between">
                <p>Deliver On Strategic Business Goals By Building Critical</p>
                <BiCheckCircle />
              </div>
              <div className="flex items-center justify-between">
                <p>Realize The Full Value Of Technology Investments</p>
                <BiCheckCircle />
              </div>
              <div className="flex items-center justify-between">
                <p>Build A Data-Driven, Digitally-Fluent Workforce</p>
                <BiCheckCircle />
              </div>
              <div className="flex items-center justify-between">
                <p>Live Classes Means You Can Archive Your Entire Class</p>
                <BiCheckCircle />
              </div>
              <div className="flex items-center space-x-3 ">
                <p>Dedicated screen</p>
                <BiCheckCircle />
                <div className="flex items-center space-x-8">
                  <p>Co-operation</p>
                  <BiCheckCircle />
                </div>
              </div>
              <div className="flex flex-col items-end">
                <button className="bg-[#e46601] hover:bg-[#e46601] text-white py-4 px-8 rounded-lg w-60">
                  Get started
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 p-4">
          <div className="h-full flex flex-col ">
            <img src={womanInstructor} alt="womanInstructor" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Instructor;
