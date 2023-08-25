import React from "react";
import ImageTwo from "../../assets/images/frame.png";
import Frame from "../../assets/icons/Frame 70.png";
import FrameTwo from "../../assets/icons/Frame 71.png";
import FrameThree from "../../assets/icons/Frame 72.png";
import ImageLeaning from "../../assets/images/imageCrew.png";

function Learning() {
  return (
    <div className="container max-w-6xl mx-auto mt-12 px-4 ">
      <div className="lg:w-5/6 md:w-full">
        <div className="flex flex-col mb-8">
          <h1 className="text-center lg:text-5xl md:text-5xl font-bold mb-4">
            Why We Are The Best <br /> Online Learning Platform
          </h1>
          <p className="text-center ">
            Delivered By Industry And Subject Expert. Our Course Will Equip You
            With <br /> Confidence And Skill Directly Transferable To Workplace
          </p>
        </div>
        <div className="lg:flex md:justify-center md:items-center">
          <div className="lg:w-1/2   w-full p-4 bg-gray-100 ">
            <img src={ImageLeaning} alt="image" className="md:w-full" />
            <img src={ImageTwo} alt="image" className="md:w-full" />
          </div>
          <div className=" lg:w-2/3 md:w-full p-4 bg-gray-100 ">
            <div className="flex flex-col space-y-10 md:justify-center">
              <div className="p-8 bg-[#256bdb] text-white mb-3 flex  items-center">
                <div className="pr-4 ">
                  <img src={Frame} alt="frame" />
                </div>
                <div>
                  <p className="pb-3 font-semibold ">
                    Discover Exciting Learning Journeys
                  </p>
                  <p>
                    Embark on a Journey of Knowledge and Skill Discovery Through
                    Captivating Video Lectures, Dynamic Graphics, Interactive
                    Data Visualization, and Engaging Interactive Elements.
                  </p>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="p-8 bg-[#021b76] text-white mb-3 flex items-center">
                  <div className="pr-4">
                    <img src={FrameTwo} alt="frame" />
                  </div>
                  <div>
                    <p className="pb-3 font-semibold">
                      Embark on a Self-Paced Learning Journey
                    </p>
                    <p>
                      Interactive learning at e-double one academy. Showcase
                      your understanding through open response assessments and
                      immersive virtual environments
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-[#061445] text-white mb-3 flex items-center">
                <div className="pr-4">
                  <img src={FrameThree} alt="frame" />
                </div>
                <div>
                  <p className="pb-3 font-semibold">
                    Unleash the power of perpetual learning
                  </p>
                  <p>
                    Empower yourself through E-DoubleOne Academy's ongoing skill
                    development, reshaping your thinking and abilities to drive
                    tangible real-world change by swiftly applying newfound
                    expertise to your role
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

<div className="lg:flex">
  <div className="w-1/2 md:w-full p-4 bg-gray-100 ">
    <img src={ImageLeaning} alt="image" />
  </div>
  <div className="w-2/3 p-4 bg-gray-100 ">
    <div className="flex flex-col space-y-10">
      <div className="p-8 bg-[#256bdb] text-white mb-3 flex  items-center">
        <div className="pr-4">
          <img src={Frame} alt="frame" />
        </div>
        <div>
          <p className="pb-3 font-semibold">Fun & Easy To Follow</p>
          <p>
            Learn New Knowledge And Skill In a Variety Of Way. From Engaging
            Video Lectures And Dynamics Graphics To Data Visualization And
            Interactive Elements
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
              Demonstrating your Knowledge is a critical part of learning
              e-double one academy courses and programs provide a space to
              practice with open response assessments, virtual enivornments and
              more{" "}
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
            learning On E-DoubleOne Academy Transform How You Think And What You
            can Do And it Translate Directly Into Tje Real World immediately By
            Applying Your Capability Into Your Job{" "}
          </p>
        </div>
      </div>
    </div>
  </div>
</div>;
