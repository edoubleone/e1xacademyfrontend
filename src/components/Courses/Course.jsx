import React from "react";
import { motion } from "framer-motion";
import { MdOutlineNavigateNext } from "react-icons/md";
import CourseCard from "./components/CourseCard";
import courseImg from "../../assets/images/course-img.png";
import businessImage from "../../assets/images/business.jpg";
import healthImage from "../../assets/images/health.jpg";
import operationImage from "../../assets/images/operation.jpg";
import financeImage from "../../assets/images/financial.jpg";
import background from "../../assets/images/wave.png";
import { GoSearch } from "react-icons/go";

const Course = () => {
  const imgVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div className="lg:relative lg:overflow-auto">
      <div className="bg-[#F3F7FB] p-4 lg:p-0 lg:py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="lg:flex flex-col-reverse">
            <div className="lg:w-1/2 w-full lg:mt-12">
              <div className="flex flex-col">
                <div className="flex items-center text-blue-400 ">
                  <p>Home</p>
                  <MdOutlineNavigateNext />
                  <p>Courses</p>
                </div>
                <div className="lg:mt-12 mt-4 lg:space-y-2">
                  <h1 className="font-bold lg:text-5xl text-2xl">
                    All Courses
                  </h1>
                  <p className="font-bold">
                    Course That would Help you Become a Unicorn
                  </p>
                </div>
                <div className="relative flex items-center gap-6 lg:mt-28 mt-6">
                  <button className="w-24 text-center bg-white lg:text-sm text-xs py-3 rounded-lg text-blue-400">
                    All Course
                  </button>
                  <button className="w-24 text-center bg-white lg:text-sm text-xs py-3 rounded-lg text-blue-400">
                    Popular
                  </button>
                  <button className="w-24 text-center bg-white lg:text-sm text-xs py-3 rounded-lg text-blue-400">
                    Latest
                  </button>
                  <button className="w-24 text-center bg-white lg:text-sm text-xs py-3 rounded-lg text-blue-400">
                    Trending
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="flex flex-col">
                <div className="flex lg:justify-start justify-center">
                  <img
                    src={courseImg}
                    alt="course-img"
                    className="mx-auto flex justify-center"
                  />
                </div>
                <div className="flex lg:justify-end justify-center mt-6">
                  <div className="relative ">
                    <input
                      type="text"
                      className="bg-white h-10 px-10 pl-10 text-sm focus:outline-none lg:w-64 w-full "
                      placeholder="SEARCH COURSE"
                    />
                    <div className="absolute top-0 left-0 mt-3 ml-3">
                      <GoSearch />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:mt-6 px-4">
        <div className="mb-6">
          <motion.div
            variants={imgVariants}
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
  );
};

export default Course;
