import React from "react";
import { BiCheckCircle } from "react-icons/bi";
import CustomButton from "./components/CustomButton";
import manInstructor from "../../assets/images/man.png";
import womanInstructor from "../../assets/images/woman.png";

function Instructor() {
  return (
    <div className="container max-w-5xl mx-auto justify-center items-center">
      <div className="lg:flex  md:flex-row md:justify-center">
        <div className="lg:w-1/2  p-4">
          <div className="h-full flex flex-col">
            <img
              src={manInstructor}
              alt="manInstructor"
              className="h-full object-cover lg:mt-0 md:mt-m lg:w-full w-2/3 mx-auto"
            />
          </div>
        </div>

        <div className="lg:w-1/2 w-full md:justify-center md:items-center p-4 lg:mt-20 ">
          <div className="h-full flex flex-col justify-center ">
            <h2 className="p-4 text-4xl font-bold">
              Instructor-Led <br></br>Live Classes
            </h2>
            <div className="p-4 lg:space-y-10 space-y-6">
              <div className="flex lg:items-center space-x-2 items-center">
                <BiCheckCircle />
                <p>Learn From The Comfort Of Your Living Room</p>
              </div>
              <div className="flex lg:items-center space-x-2 items-center">
                <BiCheckCircle />
                <p>Be Matched With Other Learners And Coaches</p>
              </div>
              <div className="flex items-center space-x-2 md:items-center">
                <BiCheckCircle />
                <p>Work On Trade Cases And Capstone Projects</p>
              </div>
              <div className="flex items-center  space-x-2 md:items-center">
                <BiCheckCircle />
                <p>Live Classes Means You Can Archive Your Entire Class</p>
              </div>
              <div className=" flex items-center space-x-2 md:items-center">
                <BiCheckCircle />
                <p>1009 Virtual</p>
                <div className="flex items-center space-x-2 md:items-center ">
                  <BiCheckCircle />

                  <p>Flexible Payment</p>
                </div>
              </div>

              <div className="flex items-center justify-center md:items-center">
                <CustomButton text="See All" className="center-button" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:flex  md:flex-row md:justify-center ">
        <div className=" lg:mt-20 lg:w-1/2  w-full p-4">
          <div className="h-full flex flex-col">
            <h1 className="p-4 text-4xl font-bold">
              Your Entire Enterprise <br></br>Transformation
            </h1>
            <div className="p-4 lg:space-y-10 space-y-6">
              <div className="flex items-center justify-between md:items-center">
                <p>Deliver On Strategic Business Goals By Building Critical</p>
                <BiCheckCircle />
              </div>
              <div className="flex items-center justify-between md:items-center">
                <p>Realize The Full Value Of Technology Investments</p>
                <BiCheckCircle />
              </div>
              <div className="flex items-center justify-between md:items-center">
                <p>Build A Data-Driven, Digitally-Fluent Workforce</p>
                <BiCheckCircle />
              </div>
              <div className="flex items-center justify-between md:items-center">
                <p>Live Classes Means You Can Archive Your Entire Class</p>
                <BiCheckCircle />
              </div>
              <div className="flex items-center justify-between md:items-center">
                <p>Dedicated screen</p>
                <BiCheckCircle />
              </div>
              <div className="flex items-center justify-between md:items-center">
                <p>Co-operation</p>
                <BiCheckCircle />
              </div>
              <div className="flex items-center justify-center md:justify-end md:items-center">
                <CustomButton text="See All" />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 md:w-full  p-4">
          <div className="h-full flex flex-col">
            <img
              src={womanInstructor}
              alt="manInstructor"
              className="h-full object-cover lg:mt-0 md:mt-m lg:w-full w-2/3 mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Instructor;
