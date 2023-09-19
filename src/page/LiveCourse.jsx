import React from "react";
import Course from "../components/LiveCourseDetail/Course";
import Overview from "../components/LiveCourseDetail/Overview";
import Reviews from "../components/LiveCourseDetail/Reviews";
import StudentReviews from "../components/LiveCourseDetail/StudentReviews";

const LiveCourse = () => {
  return (
    <div>
      <Course />
      <Overview />
      <Reviews />
      <StudentReviews />
    </div>
  );
};

export default LiveCourse;
