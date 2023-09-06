import React from "react";
import { Link } from "react-router-dom";
import picsProf from "../../assets/images/prof-1.jpg";
import { BsPersonFill } from "react-icons/bs";
import { FaCartPlus } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";
import { BiBookBookmark } from "react-icons/bi";
import coursePics from "../../assets/images/coursePics.jpg";
import course1 from "../../assets/images/course2.jpg";
import Course2 from "../../assets/images/courses3.jpg";
import Course3 from "../../assets/images/courses4.jpg";
import Course4 from "../../assets/images/courses5.jpg";
import Course6 from "../../assets/images/courses6.jpg";
import CourseCard from "./components/CourseCard";

const Course = () => {
  return (
    <div className="mt-12">
      <div className="container mx-auto px-4">
        <div className="lg:flex md:flex-row gap-4 pb-12 ">
          <CourseCard
            courseImage={coursePics}
            instructorImage={picsProf}
            instructorName="Instructor Name"
            rating={4.5}
            price="$99"
            title="Teaching Children English Online Course"
            students={8000}
            getEnrolled="Get Enrolled"
            hours="45"
          />

          <CourseCard
            courseImage={course1}
            instructorImage={picsProf}
            instructorName="Instructor Name"
            rating={4.5}
            price="$99"
            title="Teaching Children English Online Course"
            students={8000}
            getEnrolled="Get Enrolled"
            hours="45"
          />

          <CourseCard
            courseImage={Course2}
            instructorImage={picsProf}
            instructorName="Instructor Name"
            rating={4.5}
            price="$99"
            title="Teaching Children English Online Course"
            students={8000}
            getEnrolled="Get Enrolled"
            hours="45"
          />
        </div>
        <div className="lg:flex md:flex-row gap-4 md:justify-center md:pb-8">
          <CourseCard
            courseImage={Course3}
            instructorImage={picsProf}
            instructorName="Instructor Name"
            rating={4.5}
            price="$99"
            title="Teaching Children English Online Course"
            students={8000}
            getEnrolled="Get Enrolled"
            hours="45"
            courseId={1}
          />
          <CourseCard
            courseImage={Course4}
            instructorImage={picsProf}
            instructorName="Instructor Name"
            rating={4.5}
            price="$99"
            title="Teaching Children English Online Course"
            students={8000}
            getEnrolled="Get Enrolled"
            hours="45"
            courseId={2}
          />
          <CourseCard
            courseImage={Course6}
            instructorImage={picsProf}
            instructorName="Instructor Name"
            rating={4.5}
            price="$99"
            title="Teaching Children English Online Course"
            students={8000}
            getEnrolled="Get Enrolled"
            hours="45"
            courseId={3}
          />
        </div>
      </div>
    </div>
  );
};

export default Course;
