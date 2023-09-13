import React from "react";
import Course from "../components/Courses/Course";
import Reviews from "../components/Courses/Reviews";
import Pagination from "../components/Pagination";

const Courses = () => {
  return (
    <>
      <div className="custom-grow-background">
        <Course />
      </div>
      <Pagination />
    </>
  );
};

export default Courses;
