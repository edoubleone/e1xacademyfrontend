import React from "react";
<<<<<<< HEAD
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
=======
import LiveCourse from "../components/LiveCourse.jsx/Course";

const LiveCourses = () => {
  return (
    <>
      <div className="custom-grow-background">
        <LiveCourse />
      </div>
    </>
  );
};

export default LiveCourses;
>>>>>>> 11558e6d411745085ec483755cd700c572f16543
