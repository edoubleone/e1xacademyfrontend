import React from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowRightCircle } from "react-icons/bs";

function CourseCard({ imageSrc, title, duration, uuid }) {
  const navigate = useNavigate();

  const handleViewDetails = (uuid) => {
    navigate(`/course/${uuid}`);
  };
  return (
    <div className="h-full p-3 bg-white">
      <img src={imageSrc} alt="course" />
      <div>
        <p className="py-3 font-bold text-center">{title}</p>

        <div className="flex justify-between ">
          <p className="text-xs">{duration}</p>
          <button
            className="flex items-center space-x-2 "
            onClick={() => handleViewDetails(uuid)}
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
