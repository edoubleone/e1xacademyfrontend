import React from "react";
import Course from "../components/Courses/Course";
import Reviews from "../components/Courses/Reviews";

const Courses = () => {
  return (
    <div className="custom-grow-background">
      <Course />
      <Reviews />
    </div>
  );
};

export default Courses;
