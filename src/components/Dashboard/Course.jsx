import React, { useState, useEffect, useContext } from "react";
import CourseCard from "./course/CourseCard";
import { GoSearch } from "react-icons/go";
import { CourseContext } from "../../services/CourseContext";
import LoadingSpinner from "../LoadingSpinner";
import ErrorPage from "../../page/ErrorPage";

import businessImage from "../../assets/images/business.jpg";
import healthImage from "../../assets/images/health.jpg";
import operationImage from "../../assets/images/operation.jpg";

const DashboardCourse = () => {
  const { courses, isLoading, error, fetchOnlineCourse } =
    useContext(CourseContext);
  console.log("cjheckprice", courses);

  useEffect(() => {
    fetchOnlineCourse();
  }, []);

  const fetchFirstTwo = courses.slice(0, 3);
  const fetchSecondFour = courses.slice(2, 4);

  return (
    <div className="py-10 custom-course-background">
      {isLoading && <LoadingSpinner />}

      {error && <ErrorPage errors={error} />}

      {!isLoading && !error && (
        <div className="max-w-6xl mx-auto">
          <div className="flex-row items-center px-4 lg:flex lg:justify-between">
            <p className="mb-4 text-4xl font-bold lg:mb-0 ">My Courses</p>
            <div className="justify-center lg:flex lg:justify-end ">
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
          <div className="flex-row gap-8 mt-12 mb-6  lg:flex">
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
    </div>
  );
};

export default DashboardCourse;
