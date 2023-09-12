import React from "react";
import Framer32 from "../../../assets/icons/Frame 37.png";
import iconBar from "../../../assets/icons/Vector (5).png";
import bookBar from "../../../assets/icons/Group.png";
import { LiaClock } from "react-icons/lia";
import courseGroup from "../../../assets/images/coursegroupimages.png";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { BiRightArrowCircle } from "react-icons/bi";
import star from "../../../assets/icons/star.png";

const CourseCard = ({
  imageSrc,
  title,
  beginnerText,
  lessonsText,
  hours,
  videos,
  rating,
}) => {
  return (
    <div className="max-w-6xl mx-auto bg-white p-4">
      <div className="mb-4">
        <div className="flex space-x-4 md:flex-row">
          <div className="lg:flex w-full lg:gap-12 gap-1">
            <div className="flex justify-center md:justify-start">
              <img
                src={imageSrc}
                width="350"
                height="600"
                alt="course-pics"
                className="mx-auto md:mx-0" // Center on medium devices, align left on others
              />
            </div>

            <div className="w-full ">
              <div className="lg:space-y-6 space-y-3 lg:mt-4    ">
                <h1 className="font-bold lg:text-2xl lg:text-left text-center ">
                  {title}
                </h1>

                <div className="flex items-center gap-6 lg:justify-start justify-center ">
                  <div className="flex items-center gap-1">
                    <img src={iconBar} alt="icon-bar" />
                    <p className="lg:text-md text-sm ">{beginnerText}</p>
                  </div>
                  <div className="flex items-center gap-1  ">
                    <img src={bookBar} alt="icon-bar" />
                    <p className="lg:text-md text-sm">{lessonsText}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6  lg:justify-start justify-center">
                  <div className="flex items-center gap-1">
                    <LiaClock />
                    <p className="lg:text-md text-sm"> {hours}</p>
                    <p className="lg:text-md text-sm">Hours</p>
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
                <div className="flex justify-between">
                  <div className="flex gap-4">
                    <img src={courseGroup} alt="course-group" />
                    <div className="flex items-center gap-1">
                      <p className="lg:text-lg">{rating}</p>
                      <img src={star} width="15" height="15" alt="star" />
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex items-center gap-1">
                      <p className="lg:text-lg">View Courses</p>
                      <BiRightArrowCircle />
                    </div>
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
