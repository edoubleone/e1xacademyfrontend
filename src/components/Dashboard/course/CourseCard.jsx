import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";
<<<<<<< HEAD

function CourseCard({ imageSrc, title, duration, onViewCourse }) {
=======
import { useNavigate } from "react-router-dom";

function CourseCard({ uuid, imageSrc, title, duration }) {
  const navigate = useNavigate();

  const handleViewDetails = (uuid) => {
    console.log("checking the good ", uuid);
    navigate(`/course/${uuid}`);
  };
>>>>>>> 11558e6d411745085ec483755cd700c572f16543
  return (
    <div className="lg:w-96 md:w-80 p-3">
      <div className="h-full bg-white p-3">
        <img
          src={imageSrc}
          alt="course"
          className="hover:brightness-110 transition-brightness duration-300"
          loading="lazy"
        />

        <div>
          <p className="text-center font-bold py-3">{title}</p>

          <div className="flex justify-between p-4">
            <p>{duration}</p>
            <button
              className="flex items-center space-x-2"
<<<<<<< HEAD
              onClick={onViewCourse}
=======
              onClick={() => handleViewDetails(uuid)}
>>>>>>> 11558e6d411745085ec483755cd700c572f16543
            >
              <p>View Course</p>
              <BsArrowRightCircle />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
