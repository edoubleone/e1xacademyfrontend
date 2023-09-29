import React, { useContext } from "react";
import Course from "../components/Courses/Course";
import { CourseContext } from "../services/CourseContext";

const Courses = () => {
  return (
    <>
      <div className="custom-grow-background">
        <Course />
      </div>
    </>
  );
};

export default Courses;
