import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import vector from "../../assets/icons/Vector.png";

import illustration from "../../assets/images/illustration.png";
const CourseDetails = () => {
  const { courseId } = useParams();
  console.log(courseId);

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
  const buttonVariants = {
    hover: {
      y: -5, // Move the button 5 pixels up on hover
    },
    tap: {
      scale: 0.95, // Scale the button down when clicked
    },
  };
  return (
    <div className="bg-custom-gradient  lg:h-[850px] h-full ">
      <div className="max-w-6xl lg:flex mx-auto py-6 lg:px-0 px-6 ">
        <motion.div
          className="  lg:w-1/2 w-full  space-y-8 mt-9   "
          variants={imgVariants} // Apply animation variants
          initial="initial"
          animate="animate"
        >
          <button className="border border-blue-300 py-2 px-6 text-white">
            Live Programme
          </button>

          <h1 className="font-bold text-white lg:text-6xl md:text-3xl">
            Become A Financial <br></br> Data Analyst{" "}
          </h1>
          <p className="text-white lg:text-lg md:text-xs">
            Becoming a financial data analyst involves acquiring the skills to
            gather, analyze, and interpret financial data to support
            decision-making and provide valuable insights to organizations
          </p>

          <div className="mt-4">
            <div className="py-8  bg-blue-600 space-y-4">
              <div className="flex px-4">
                <div className="flex items-center justify-between border-b pb-2 w-full">
                  <div className="flex items-center text-start gap-2">
                    <img src={vector} alt="vector" />
                    <p className="text-left text-white">Level</p>
                  </div>

                  <p className="text-white">Beginner</p>
                </div>
              </div>

              <div className="flex px-4">
                <div className="flex items-center justify-between border-b pb-2 w-full">
                  <div className="flex items-center text-start gap-2">
                    <img src={vector} alt="vector" />
                    <p className="text-left text-white">Level</p>
                  </div>

                  <p className="text-white">Beginner</p>
                </div>
              </div>
              <div className="flex px-4">
                <div className="flex items-center justify-between border-b pb-2 w-full">
                  <div className="flex items-center text-start gap-2">
                    <img src={vector} alt="vector" />
                    <p className="text-left text-white">Level</p>
                  </div>

                  <p className="text-white">Beginner</p>
                </div>
              </div>
              <div className="flex px-4">
                <div className="flex items-center justify-between border-b pb-2 w-full">
                  <div className="flex items-center text-start gap-2">
                    <img src={vector} alt="vector" />
                    <p className="text-left text-white">Level</p>
                  </div>

                  <p className="text-white">Beginner</p>
                </div>
              </div>
            </div>
            <div className="bg-[#021B76] w-full h-[200px]"></div>
          </div>
        </motion.div>

        <div className="lg:w-1/2 w-full flex flex-col items-center justify-center">
          <div className="mb-4">
            <img src={illustration} alt="illustration" />
          </div>
          <div className="flex space-x-11">
            <motion.button
              className="border-none bg-custom-button outline-none px-12 md:px-16 py-2 rounded-md text-white"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Enroll
            </motion.button>

            <motion.button
              className="border px-8 md:px-12 py-2 md:py-3 text-white"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Add To Cart
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
