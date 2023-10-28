import React from "react";
<<<<<<< HEAD
import { BsArrowRightCircle } from "react-icons/bs";

function CourseCard({ imageSrc, title, duration, onViewCourse }) {
  return (
    
=======
import { useNavigate } from "react-router-dom";
import { BsArrowRightCircle } from "react-icons/bs";

function CourseCard({ imageSrc, title, duration, uuid }) {
  const navigate = useNavigate();

  const handleViewDetails = (uuid) => {
    navigate(`/course/${uuid}`);
  };
  return (
>>>>>>> 11558e6d411745085ec483755cd700c572f16543
    <div className="h-full bg-white p-3">
      <img src={imageSrc} alt="course" />
      <div>
        <p className="text-center font-bold py-3">{title}</p>

        <div className="flex justify-between ">
          <p className="text-xs">{duration}</p>
          <button
            className="flex items-center space-x-2  "
<<<<<<< HEAD
            onClick={onViewCourse}
=======
            onClick={() => handleViewDetails(uuid)}
>>>>>>> 11558e6d411745085ec483755cd700c572f16543
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
