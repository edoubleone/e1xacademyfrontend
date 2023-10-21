import React, { useState } from "react";
import CourseCard from "./course/CourseCard";
import { GoSearch } from "react-icons/go";

import businessImage from "../../assets/images/business.jpg";
import healthImage from "../../assets/images/health.jpg";
import operationImage from "../../assets/images/operation.jpg";

const DashboardCourse = () => {

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
    </div>
  );
};

export default DashboardCourse;
