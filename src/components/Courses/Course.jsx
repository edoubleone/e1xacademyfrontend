import React from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import CourseCard from "./components/CourseCard";
import courseImg from "../../assets/images/course-img.png";

import Framer from "../../assets/icons/Frame 36.png";
import Framers from "../../assets/icons/Frame 35.png";
import Framerer from "../../assets/icons/Frame 34.png";
import Frameres from "../../assets/icons/Frame 37.png";

import { GoSearch } from "react-icons/go";
const Course = () => {
  return (
    <div>
      <div className="custom-course-background lg:h-[450px] w-full h-full  ">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row">
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
                <p className="w-24 text-center bg-white lg:text-sm text-xs py-3 rounded-lg">
                  All Course
                </p>
                <p className="w-24 text-center bg-white lg:text-sm text-xs py-3 rounded-lg">
                  Popular{" "}
                </p>
                <p className="w-24 text-center bg-white lg:text-sm text-xs py-3 rounded-lg">
                  Latest
                </p>
                <p className="w-24 text-center bg-white lg:text-sm text-xs py-3 rounded-lg ">
                  Trending
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="flex md:justify-center">
                <img src={courseImg} alt="course-img" className="mx-auto" />
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
        ;
      </div>
      <div className="w-full custom-grow-background  py-6">
        <div className="mb-6">
          <div>
            <CourseCard
              imageSrc={Framerer}
              title="Business Data Analyst"
              beginnerText="Beginner"
              lessonsText="Lessons"
              hours="30"
              videos="30"
              rating="4.3"
            />
          </div>
        </div>
        <div className="mb-6">
          <CourseCard
            imageSrc={Framers}
            title="Health Data Analyst"
            beginnerText="Beginner"
            lessonsText="Lessons"
            hours="30"
            videos="30"
            rating="4.3"
          />
        </div>
        <div className="mb-6">
          <CourseCard
            imageSrc={Frameres}
            title="Operation Data Analyst"
            beginnerText="Beginner"
            lessonsText="Lessons"
            hours="30"
            videos="30"
            rating="4.3"
          />
        </div>

        <CourseCard
          imageSrc={Framer}
          title="Financial Data Analyst"
          beginnerText="Beginner"
          lessonsText="Lessons"
          hours="30"
          videos="30"
          rating="4.3"
        />
      </div>
    </div>
  );
};

export default Course;
