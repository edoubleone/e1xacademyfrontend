import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import iconBar from "../../../assets/icons/Vector (5).png";
import bookBar from "../../../assets/icons/Group.png";
import { LiaClock } from "react-icons/lia";
import courseGroup from "../../../assets/images/coursegroupimages.png";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { BiRightArrowCircle } from "react-icons/bi";
import star from "../../../assets/icons/star.png";

const CourseCard = ({
  images,
  title,
  beginnerText,
  lessonsText,
  hours,
  videos,
  rating,
  uuid,
  price,
  instructor,
  currency,
}) => {
  const navigate = useNavigate();

  const handleViewDetails = (uuid) => {
    console.log(uuid);
    navigate(`/course/${uuid}`);
  };
  return (
    <div className="max-w-6xl mx-auto  bg-white p-4">
      <div className="mb-4">
        <div className="flex space-x-4   ">
          <div className="lg:flex w-full lg:gap-12 gap-1 mb-10">
            {/* <div className="lg:flex justify-center md:justify-start">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image[0]}
                  width="300"
                  height="300"
                  alt={`course-pics-${index}`}
                  className="mx-auto md:mx-0 object-fill"
                />
              ))}
            </div> */}
            <div className="lg:flex justify-center md:justify-start">
              {images.map((image, index) =>
                index === 0 ? (
                  <img
                    key={index}
                    src={image}
                    width="300"
                    height="300"
                    alt={`course-pics-${index}`}
                    className="mx-auto md:mx-0 object-fill"
                  />
                ) : null
              )}
            </div>

            <div className="w-full  ">
              <div className="space-y-2 md:space-y-3 lg:mt-4    ">
                <h1 className="font-bold lg:text-2xl lg:text-left text-center ">
                  {title}
                </h1>
                <p className=" lg:text-left text-center ">
                  {" "}
                  Instructor : {instructor}
                </p>
                <p className="font-bold lg:text-xl lg:text-left text-center">
                  {currency} {price}
                </p>

                <div className="flex items-center  gap-6  lg:justify-start  justify-between lg:px-0 px-4  ">
                  <div className="flex items-center gap-1">
                    <img src={iconBar} alt="icon-bar" />
                    <p className="lg:text-md text-sm ">{beginnerText}</p>
                  </div>
                  <div className="flex items-center gap-1  ">
                    <img src={bookBar} alt="icon-bar" />
                    <p className="lg:text-md text-sm">{lessonsText}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6  lg:justify-start justify-between lg:px-0 px-4">
                  <div className="flex items-center gap-1">
                    <LiaClock />
                    <p className="lg:text-md text-sm"> {hours}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <HiOutlineVideoCamera />
                    <div className="flex items-center">
                      <p className="lg:text-md text-sm">{videos}</p>
                      <p className="lg:text-md text-sm">Videos</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:mt-24 mt-3">
                <div className="flex justify-between lg:px-0 px-4">
                  <div className="flex gap-4">
                    <img src={courseGroup} alt="course-group" />
                    <div className="flex items-center gap-1">
                      <p className="lg:text-lg">{rating}</p>
                      <img src={star} width="15" height="15" alt="star" />
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button
                      className="flex items-center gap-1 lg:text-lg"
                      onClick={() => handleViewDetails(uuid)}
                    >
                      View Details
                      <span>
                        <BiRightArrowCircle />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
