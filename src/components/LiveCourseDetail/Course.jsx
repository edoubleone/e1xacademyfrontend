import React, { useState } from "react";
import { motion } from "framer-motion";
import imageLivePics from "../../assets/images/video image container.png";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { MdSlowMotionVideo } from "react-icons/md";
import PresentationItem from "./components/Presentation";

const Course = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const imgVariants = {
    initial: {
      opacity: 0,
      y: 100, // Move the image 100px down initially
    },
    animate: {
      opacity: 1,
      y: 0, // Move the image back to its original position
      transition: {
        duration: 1, // Adjust the duration as needed
      },
    },
  };
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="lg:flex justify-between">
        <motion.div
          className=" lg:w-3/5  w-full mt-12 space-y-6"
          variants={imgVariants} // Apply animation variants
          initial="initial"
          animate="animate"
        >
          <button className="border  py-2 px-5 text-sm">Back To Courses</button>

          <h1 className="font-bold lg:text-6xl md:text-3xl">
            Ultimate Financial <br></br> Data Analyst course{" "}
          </h1>
          <div>
            <img src={imageLivePics} alt="imageLive" />
          </div>
          <p className="lg:py-6 py-0">Introduction to the user</p>
        </motion.div>
        <div className="lg:w-1/3 w-full lg:mt-32 mt-12 ">
          <div className="border border-blue-300 rounded-lg ">
            <div className="bg-custom-blue py-3">
              <p className="text-white p-4">Course Content</p>
            </div>
            <div
              className="flex justify-between items-center p-4 border-b  cursor-pointer"
              onClick={toggleExpand}
            >
              <p>Introduction To The User</p>
              {isExpanded ? <IoIosArrowDown /> : <IoIosArrowForward />}
            </div>
            {isExpanded && (
              <div className="p-4">
                <PresentationItem
                  icon={<MdSlowMotionVideo />}
                  title="Another Presentation"
                  duration="10:30min"
                  action="continue"
                />

                <PresentationItem
                  icon={<MdSlowMotionVideo />}
                  title="Presentation from instructor"
                  duration="05:56min"
                  action="Continue"
                />

                <PresentationItem
                  icon={<MdSlowMotionVideo />}
                  title="Presentation from instructor"
                  duration="05:56min"
                  action="Continue"
                />
              </div>
            )}
            {!isExpanded && (
              <>
                <div className="flex justify-between items-center p-4 border-b">
                  <p>Data Structure</p>
                  <IoIosArrowForward />
                </div>
                <div className="flex justify-between items-center p-4">
                  <p>The Graph</p>
                  <IoIosArrowForward />
                </div>
                <div className="flex justify-between items-center p-4 ">
                  <p>Introduction to the user</p>
                  <IoIosArrowForward />
                </div>
                <div className="flex justify-between items-center p-4 ">
                  <p>Introduction to the user</p>
                  <IoIosArrowForward />
                </div>
                <div className="flex justify-between items-center p-4 ">
                  <p>Introduction to the user</p>
                  <IoIosArrowForward />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
