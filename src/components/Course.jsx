import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import Framer from "../assets/icons/Frame 36.png";
import Framers from "../assets/icons/Frame 35.png";
import Framerer from "../assets/icons/Frame 34.png";
import Frameres from "../assets/icons/Frame 37.png";

function Course() {
  return (
    <div className="mt-20">
      <div className="container max-w-6xl mx-auto justify-center items-center">
        <div>
          <h1 className="text-center text-5xl font-bold pb-4">
            {" "}
            Popular Course
          </h1>
          <p className="text-center mb-5">
            Explore From All Your Online Course
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-96 p-3">
            <div className="h-full bg-blue-200 p-3 ">
              <img src={Framers} alt="framer" />
              <div>
                <p className="text-center font-bold py-3">
                  HealthCare Data Analyst
                </p>

                <div className="flex justify-between p-4">
                  <p>30 Hours</p>
                  <button className="flex items-center space-x-2">
                    <p>View Course</p>
                    <BsArrowRightCircle />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-96 p-4">
            <div className="h-full bg-blue-200 p-3">
              <img src={Framerer} alt="framer" />
              <div>
                <p className="text-center  font-bold py-3">
                  Operation Data Analyst
                </p>

                <div className="flex justify-between p-4">
                  <p>30Hours</p>
                  <button className="flex items-center space-x-2">
                    <p>View Course</p>
                    <BsArrowRightCircle />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-96 p-4">
            <div className="h-full bg-red-200">
              <div className="h-full bg-blue-200 p-3">
                <img src={Framer} alt="framer" />
                <div>
                  <p className="text-center font-bold py-3">
                    Business Data Analyst
                  </p>

                  <div className="flex justify-between p-4">
                    <p>30Hours</p>
                    <div className="flex items-center space-x-2">
                      <p>View Course</p>
                      <BsArrowRightCircle />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-96 p-4">
            <div className="h-full bg-yellow-200">
              <div className="h-full bg-blue-200 p-3">
                <img src={Frameres} alt="framer" />
                <div>
                  <p className="text-center font-bold py-3">
                    Financial Data Analyst
                  </p>

                  <div className="flex justify-between p-4">
                    <p>30Hours</p>
                    <button className="flex items-center space-x-2">
                      <p>View Course</p>
                      <BsArrowRightCircle />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-12 mb-9">
          <button className="bg-[#e46601] hover:bg-[#e46601] text-white   py-3 px-8 rounded-lg w-60">
            Sell All
          </button>
        </div>
      </div>
    </div>
  );
}

export default Course;
