import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { IoIosMagnet } from "react-icons/io";
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
    <div className="max-w-6xl p-4 mx-auto bg-white">
      <div className="mb-4">
<<<<<<< HEAD
        <div className="flex space-x-4   ">
          <div className="lg:flex w-full lg:gap-12 gap-1 mb-10">
            <div className="lg:flex justify-center md:justify-start">
              {images.map((image, index) =>
                index === 0 ? (
                  <img
                    key={index}
                    src={console.log(
                      "i wnat to see the image in the api",
                      image
                    )}
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
=======
        <div className="flex space-x-4 ">
          <div className="w-full gap-1 mb-10 lg:flex lg:gap-12">
            <div className="justify-center lg:flex md:justify-start">
              <img
                src="images"
                width="300"
                height="300"
                alt="course-pics"
                className="object-fill mx-auto md:mx-0" // Center on medium devices, align left on others
              />
            </div>

            <div className="w-full ">
              <div className="space-y-3 lg:space-y-6 lg:mt-4 ">
                <h1 className="font-bold text-center lg:text-2xl lg:text-left ">
>>>>>>> 20ffcfabd2c5bd1bd30604eb90e98b43865b8006
                  {title}
                </h1>
                <p className=" lg:text-left text-center ">
                  {" "}
                  Instructor : {instructor}
                </p>
                <p className="font-bold lg:text-xl lg:text-left text-center">
                  {currency} {price}
                </p>

                <div className="flex items-center justify-between gap-6 px-4 lg:justify-start lg:px-0 ">
                  <div className="flex items-center gap-1">
                    <img src={iconBar} alt="icon-bar" />
                    <p className="text-sm lg:text-md ">{beginnerText}</p>
                  </div>
                  <div className="flex items-center gap-1 ">
                    <img src={bookBar} alt="icon-bar" />
                    <p className="text-sm lg:text-md">{lessonsText}</p>
                  </div>
                </div>
<<<<<<< HEAD
=======
                <div className="flex justify-center lg:justify-start">
                  {price}
                </div>
>>>>>>> 20ffcfabd2c5bd1bd30604eb90e98b43865b8006

                <div className="flex items-center justify-between gap-6 px-4 lg:justify-start lg:px-0">
                  <div className="flex items-center gap-1">
                    <LiaClock />
                    <p className="text-sm lg:text-md"> {hours}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <HiOutlineVideoCamera />
                    <div className="flex items-center">
                      <p className="text-sm lg:text-md">{videos}</p>
                      <p className="text-sm lg:text-md">Videos</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-3 lg:mt-24">
                <div className="flex justify-between px-4 lg:px-0">
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
