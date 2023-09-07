import React from "react";

import CourseDetails from "../components/CourseDetail/CourseDetails";
import Description from "../components/CourseDetail/Description";
import Learn from "../components/CourseDetail/Learn";
import Benefit from "../components/CourseDetail/Benefit";
import Instructor from "../components/CourseDetail/Instructor";
import Reviews from "../components/CourseDetail/Reviews";
import Grow from "../components/CourseDetail/Grow";
import Course from "../components/CourseDetail/Course";
const CourseDetailPage = () => {
  return (
    <div>
      <CourseDetails />
      <Description />
      <Learn />
      <Benefit />
      <Instructor />
      <Reviews />
      <Grow />
      <Course />
    </div>
  );
};

export default CourseDetailPage;
