<<<<<<< HEAD
import React, { useContext } from "react";
import Course from "../components/Courses/Course";
import { CourseContext } from "../services/CourseContext";
=======
import React from "react";
import Course from "../components/Courses/Course";
>>>>>>> 11558e6d411745085ec483755cd700c572f16543

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
