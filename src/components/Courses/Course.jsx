import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { MdOutlineNavigateNext } from "react-icons/md";
import CourseCard from "./components/CourseCard";
import courseImg from "../../assets/images/course-img.png";
import businessImage from "../../assets/images/business.jpg";
import healthImage from "../../assets/images/health.jpg";
import operationImage from "../../assets/images/operation.jpg";
import { GoSearch } from "react-icons/go";
import Pagination from "../Pagination";
import { NavLink } from "react-router-dom";
import { CourseContext } from "../../services/CourseContext";

const Course = () => {
  const { courses, isLoading, error, fetchPaginatedData } =
    useContext(CourseContext);

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  useEffect(() => {
    // Fetch the initial page of course data
    fetchPaginatedData(currentPage, itemsPerPage);
  }, [currentPage, itemsPerPage, fetchPaginatedData]);

  const totalPages = Math.ceil(courses.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
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
    <div className="lg:relative lg:overflow-auto ">
      <div className=" background-card h-[450px] lg:absolute lg:top-0 lg:-z-0  w-full       ">
        <div className="max-w-6xl mx-auto px-4   ">
          <div className=" relative flex flex-col md:flex-row">
            <div className="  lg:w-1/2 w-full lg:mt-12">
              <div className="flex flex-col">
                <div className="flex items-center text-blue-400 ">
                  <NavLink to="/">Home</NavLink>
                  <MdOutlineNavigateNext />
                  <p>Courses</p>
                </div>
                <div className=" lg:mt-12 mt-4 lg:space-y-2">
                  <h1 className="font-bold lg:text-5xl text-2xl">
                    All Courses
                  </h1>
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
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="flex flex-col">
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
      </div>
      <div className="w-full  lg:mt-[380px] lg:z-50 lg:relative px-2   ">
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
                course="123"
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
              course="123"
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
              course="123"
            />
          </div>
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Course;
