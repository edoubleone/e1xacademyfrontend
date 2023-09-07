import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";

function CourseCard({ imageSrc, title, duration, onViewCourse }) {
  return (
    <div className="h-full bg-white p-3">
      <img src={imageSrc} alt="course" />
      <div>
        <p className="text-center font-bold py-3">{title}</p>

        <div className="flex justify-between ">
          <p className="text-xs">{duration}</p>
          <button
            className="flex items-center space-x-2  "
            onClick={onViewCourse}
          >
            <p className="text-xs">View Course</p>
            <BsArrowRightCircle className="text-sm" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
