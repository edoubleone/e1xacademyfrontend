import React from "react";
import ImageLeaning from "../assets/images/imageCrew.png";
import ImageTwo from "../assets/images/frame.png";
import Frame from "../assets/icons/Frame 70.png";
import FrameTwo from "../assets/icons/Frame 71.png";
import FrameThree from "../assets/icons/Frame 72.png";
function Learning() {
  return (
    <div className="container mx-auto mt-12">
      <div className="w-5/6">
        <div className="flex flex-col mb-8">
          <h1 className="text-center text-5xl font-bold mb-4 ">
            Why We Are The Best <br></br> Online Learning Platform
          </h1>
          <p className="text-center">
            Delivered By Industry And Subject Expert.Our Course Will Equip You
            With <br></br> Confidence And Skill Directly Transferable To
            workplace
          </p>
        </div>
        <div className="flex ">
          <div className="w-1/3 p-4 bg-gray-100">
            <img src={ImageLeaning} alt="image" />
          </div>
          <div className="w-1/2 p-4 bg-gray-100 ">
            <div className=" flex flex-col space-y-4">
              <div className="p-8 bg-[#256bdb] text-white mb-3 flex items-center">
                <div className="pr-4">
                  <img src={Frame} alt="frame" />
                </div>
                <div>
                  <p className="pb-3 font-semibold">Fun & Easy To Follow</p>
                  <p>
                    Learn New Knowledge And Skill In a Variety Of Way. From
                    Engaging Video Lectures And Dynamics Graphics To Data
                    Visualization And Interactive Elements
                  </p>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="p-8 bg-[#021b76] text-white mb-3 flex items-center">
                  <div className="pr-4">
                    <img src={FrameTwo} alt="frame" />
                  </div>
                  <div>
                    <p className="pb-3 font-semibold">Learn At Your Own Pace</p>
                    <p>
                      Demonstrating your Knowledge is a critical part of
                      learning e-double one academy courses and programs provide
                      a space to practice with open response assessments,
                      virtual enivornments and more{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-[#061445] text-white mb-3 flex items-center">
                <div className="pr-4">
                  <img src={FrameThree} alt="frame" />
                </div>
                <div>
                  <p className="pb-3 font-semibold">Continous Learning</p>
                  <p>
                    learning On E-DoubleOne Academy Transform How You Think And
                    What You can Do And it Translate Directly Into Tje Real
                    World immediately By Applying Your Capability Into Your Job{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Learning;
