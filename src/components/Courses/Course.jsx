import React from "react";
import { motion } from "framer-motion";
import { MdOutlineNavigateNext } from "react-icons/md";
import CourseCard from "./components/CourseCard";
import courseImg from "../../assets/images/course-img.png";
import businessImage from "../../assets/images/businessman-with-graph-laptop.jpg";
import healthImage from "../../assets/images/health.png";
import operationImage from "../../assets/images/operation.png";
import financeImage from "../../assets/images/financce.png";
import { GoSearch } from "react-icons/go";
const Course = () => {
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
    <div className="lg:relative lg:overflow-auto ">
      <div className=" background-card h-[450px] lg:absolute lg:top-0 lg:-z-0  w-full      ">
        <div className="max-w-6xl mx-auto px-4  ">
          <div className=" relative flex flex-col md:flex-row">
            <div className="  lg:w-1/2 w-full lg:mt-12">
              <div className="flex items-center text-blue-400 ">
                <p>Home</p>
                <MdOutlineNavigateNext />
                <p>Courses</p>
              </div>
              <div className=" lg:mt-12 mt-4 lg:space-y-2">
                <h1 className="font-bold lg:text-5xl text-2xl">All Courses</h1>
                <p className="l:font-bold ">
                  Course That would Help you Become a Unicorn
                </p>
              </div>
              <div className="relative flex items-center gap-6  lg:mt-28 mt-6   ">
                <button className="w-24 text-center bg-white lg:text-sm text-xs py-3 rounded-lg text-blue-400">
                  All Course
                </button>
                <button className="w-24 text-center bg-white lg:text-sm text-xs py-3 rounded-lg text-blue-400">
                  Popular{" "}
                </button>
                <button className="w-24 text-center bg-white lg:text-sm text-xs py-3 rounded-lg text-blue-400">
                  Latest
                </button>
                <button className="w-24 text-center bg-white lg:text-sm text-xs py-3 rounded-lg text-blue-400 ">
                  Trending
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="flex lg:justify-start  justify-center ">
                <img
                  src={courseImg}
                  alt="course-img"
                  className="mx-auto flex justify-center"
                />
              </div>

              <div className=" flex lg:justify-end justify-center ">
                <div class="relative ">
                  <input
                    type="text"
                    class="bg-white h-10 px-10 pl-10  text-sm focus:outline-none lg:w-64 w-full "
                    placeholder="SEARCH COURSE"
                  />
                  <div class="absolute top-0 left-0 mt-3 ml-3">
                    <GoSearch />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full  lg:mt-[380px] lg:z-50 lg:relative   ">
        <div className="lg:-z-50">
          <div className="mb-6">
            <motion.div
              variants={imgVariants} // Apply animation variants
              initial="initial"
              animate="animate"
            >
              <CourseCard
                imageSrc={businessImage}
                title="Business Data Analyst"
                beginnerText="Beginner"
                lessonsText="Lessons"
                hours="30"
                videos="30"
                rating="4.3"
                courseId="123"
              />
            </motion.div>
          </div>
          <div className="mb-6">
            <CourseCard
              imageSrc={healthImage}
              title="Health Data Analyst"
              beginnerText="Beginner"
              lessonsText="Lessons"
              hours="30"
              videos="30"
              rating="4.3"
              courseId="123"
            />
          </div>
          <div className="mb">
            <CourseCard
              imageSrc={operationImage}
              title="Operation Data Analyst"
              beginnerText="Beginner"
              lessonsText="Lessons"
              hours="30"
              videos="30"
              rating="4.3"
              courseId="123"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
