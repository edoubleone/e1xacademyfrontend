<<<<<<< HEAD
import React, { useState } from "react";
import CourseCard from "./course/CourseCard";
import { GoSearch } from "react-icons/go";
=======
import React, { useState, useEffect, useContext } from "react";
import CourseCard from "./course/CourseCard";
import { GoSearch } from "react-icons/go";
import { CourseContext } from "../../services/CourseContext";
import LoadingSpinner from "../LoadingSpinner";
import ErrorPage from "../../page/ErrorPage";
>>>>>>> 11558e6d411745085ec483755cd700c572f16543

import businessImage from "../../assets/images/business.jpg";
import healthImage from "../../assets/images/health.jpg";
import operationImage from "../../assets/images/operation.jpg";

const DashboardCourse = () => {
<<<<<<< HEAD
  return (
    <div className="custom-course-background py-10">
      <div className="max-w-6xl mx-auto">
        <div className="lg:flex lg:justify-between flex-row  items-center px-4">
          <p className="text-4xl font-bold lg:mb-0 mb-4 ">My Courses</p>
          <div className="lg:flex  lg:justify-end justify-center ">
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
        <div className="lg:flex flex-row gap-8 mb-6 mt-12">
          <CourseCard
            imageSrc={operationImage}
            title="Operation Data Analyst"
            duration="30 Hours"
            onViewCourse={() => {}}
          />
          <CourseCard
            imageSrc={businessImage}
            title="Operation Data Analyst"
            duration="30 Hours"
            onViewCourse={() => {}}
          />
          <CourseCard
            imageSrc={healthImage}
            title="Operation Data Analyst"
            duration="30 Hours"
            onViewCourse={() => {}}
          />
        </div>
        <div className="lg:flex flex-row gap-8 mb-6">
          <CourseCard
            imageSrc={businessImage}
            title="Operation Data Analyst"
            duration="30 Hours"
            onViewCourse={() => {}}
          />
          <CourseCard
            imageSrc={healthImage}
            title="Operation Data Analyst"
            duration="30 Hours"
            onViewCourse={() => {}}
          />
          <CourseCard
            imageSrc={operationImage}
            title="Operation Data Analyst"
            duration="30 Hours"
            onViewCourse={() => {}}
          />
        </div>
      </div>
=======
  const { courses, isLoading, error, fetchOnlineCourse } =
    useContext(CourseContext);
  console.log("cjheckprice", courses);

  useEffect(() => {
    fetchOnlineCourse();
  }, []);

  const fetchFirstTwo = courses.slice(0, 3);
  const fetchSecondFour = courses.slice(2, 4);

  return (
    <div className="custom-course-background py-10">
      {isLoading && <LoadingSpinner />}

      {error && <ErrorPage errors={error} />}

      {!isLoading && !error && (
        <div className="max-w-6xl mx-auto">
          <div className="lg:flex lg:justify-between flex-row  items-center px-4">
            <p className="text-4xl font-bold lg:mb-0 mb-4 ">My Courses</p>
            <div className="lg:flex  lg:justify-end justify-center ">
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
          <div className=" lg:flex flex-row gap-8 mb-6 mt-12">
            {fetchFirstTwo?.map((course) => (
              <CourseCard
                key={course.id}
                imageSrc={operationImage}
                title={course.title}
                duration={course.duration}
                onViewCourse={() => {}}
                uuid={course.uuid}
              />
            ))}
          </div>
        </div>
      )}
>>>>>>> 11558e6d411745085ec483755cd700c572f16543
    </div>
  );
};

export default DashboardCourse;
