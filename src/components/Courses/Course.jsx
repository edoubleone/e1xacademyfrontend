import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";

import LoadingSpinner from "../LoadingSpinner";
import { MdOutlineNavigateNext } from "react-icons/md";
import CourseCard from "./components/CourseCard";
import courseImg from "../../assets/images/course-img.png";
import { GoSearch } from "react-icons/go";
import { NavLink } from "react-router-dom";
import { CourseContext } from "../../services/CourseContext";
import ErrorPage from "../../page/ErrorPage";

const Course = () => {
  const { courses, isLoading, error, fetchOnlineCourse } =
    useContext(CourseContext);
  console.log("cjheckprice", courses);

  useEffect(() => {
    fetchOnlineCourse();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

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
<<<<<<< HEAD
      {isLoading ? (
        <LoadingSpinner />
      ) : error ? (
        <ErrorPage errors={error} />
      ) : (
        <>
          <div className="background-card h-[450px] lg:absolute lg:top-0 lg:-z-0 w-full">
            <div className="max-w-6xl mx-auto px-4">
              <div className="relative flex flex-col md:flex-row">
                <div className="lg:w-1/2 w-full lg:mt-12">
                  <div className="flex flex-col">
                    <div className="flex items-center text-blue-400 ">
                      <NavLink to="/">Home</NavLink>
                      <MdOutlineNavigateNext />
                      <p>Courses</p>
                    </div>
                    <div className="lg:mt-12 mt-4 lg:space-y-2">
                      <h1 className="font-bold lg:text-5xl text-2xl">
                        All Courses
                      </h1>
                      <p className="l:font-bold ">
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
=======
      {isLoading && <LoadingSpinner />}

      {error && <ErrorPage errors={error} />}

      {!isLoading && !error && (
        <div className="background-card h-[450px] lg:absolute lg:top-0 lg:-z-0 w-full">
          <div className="max-w-6xl px-4 mx-auto">
            <div className="relative flex flex-col md:flex-row">
              <div className="w-full lg:w-1/2 lg:mt-12">
                <div className="flex flex-col">
                  <div className="flex items-center text-blue-400 ">
                    <NavLink to="/">Home</NavLink>
                    <MdOutlineNavigateNext />
                    <p>Courses</p>
                  </div>
                  <div className="mt-4 lg:mt-12 lg:space-y-2">
                    <h1 className="text-2xl font-bold lg:text-5xl">
                      All Courses
                    </h1>
                    <p className="l:font-bold ">
                      Course That would Help you Become a Unicorn
                    </p>
                  </div>
                  <div className="relative flex items-center gap-6 mt-6 lg:mt-28">
                    <button className="w-24 py-3 text-xs text-center text-blue-400 bg-white rounded-lg lg:text-sm">
                      All Course
                    </button>
                    <button className="w-24 py-3 text-xs text-center text-blue-400 bg-white rounded-lg lg:text-sm">
                      Popular
                    </button>
                    <button className="w-24 py-3 text-xs text-center text-blue-400 bg-white rounded-lg lg:text-sm">
                      Latest
                    </button>
                    <button className="w-24 py-3 text-xs text-center text-blue-400 bg-white rounded-lg lg:text-sm ">
                      Trending
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="flex flex-col">
                  <div className="flex justify-center lg:justify-start ">
                    <img
                      src={courseImg}
                      alt="course-img"
                      className="flex justify-center mx-auto"
                    />
                  </div>
                  <div className="flex justify-center lg:justify-end">
                    <div class="relative ">
                      <input
                        type="text"
                        class="bg-white h-10 px-10 pl-10  text-sm focus:outline-none lg:w-64 w-full "
                        placeholder="SEARCH COURSE"
>>>>>>> 20ffcfabd2c5bd1bd30604eb90e98b43865b8006
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

          <div className="w-full lg:mt-[380px] lg:z-50 lg:relative px-2">
            <div className="lg:-z-50">
              <div className="mb-6">
                <motion.div
                  variants={imgVariants}
                  initial="initial"
                  animate="animate"
                >
                  {courses.map((course) => (
                    <CourseCard
                      key={course.id}
                      images={course.images}
                      title={course.title}
                      price={course.price}
                      beginnerText={course.course_level_id}
                      lessonsText={course.lesson_count}
                      hours={course.duration}
                      videos="30"
                      rating="4.3"
                      currency={course.currency}
                      instructor={course.instructors}
                      uuid={course.uuid}
                    />
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Course;
