import React from "react";

import BackgroundImage from "../LandingPage";
import courseDetails from "../../assets/icons/course-detail.jpg";

import profPics from "../../assets/images/prof-2.jpg";
import Course1 from "../../assets/images/courses3.jpg";
import Course2 from "../../assets/images/courses4.jpg";
import Course3 from "../../assets/images/courses5.jpg";

import { BiRightArrowAlt } from "react-icons/bi";
import { BiSolidBookOpen } from "react-icons/bi";
import { BiTimeFive } from "react-icons/bi";
import { MdLanguage } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
const CourseDetail = () => {
  return (
    <div>
      <BackgroundImage
        imageUrl={courseDetails}
        text="Courses-details"
        className="absolute top-0 left-0 w-full h-full"
      />

      <div className="mt-12">
        <div className="container mx-auto">
          <div className="flex  justify-between  ">
            <div className="w-2/3 space-y-6 ">
              <h1 className="text-5xl font-bold">
                Java Programming Masterclass <br></br> with professional author
              </h1>
              <div className="flex mt-5 gap-6">
                <img
                  src={profPics}
                  alt="Instructor Image"
                  className="lg:h-[45px] lg:w-[45px] md:w-full md:h-full object-cover rounded-full"
                />
                <div>
                  <p>Teacher</p>
                  <p className="font-bold">John Kanel</p>
                </div>
                <p className="border"></p>
                <div>
                  <p>Category</p>
                  <p className="font-bold">Mathematics</p>
                </div>
                <p className="border"></p>
                <div>
                  <p>Last Update</p>
                  <p className="font-bold">January 24, 2021</p>
                </div>
              </div>
              <div className="flex gap-7 ">
                <div className="w-1/6   text-center py-3 border border-black">
                  Overview
                </div>
                <div className="w-1/6   text-center py-3 border border-black  ">
                  Curriculum
                </div>
                <div className="w-1/6   text-center py-3 border border-black">
                  Advisor
                </div>
                <div className="w-1/6   text-center py-3  border border-black">
                  Reviews
                </div>
              </div>
              <div>
                <p className="font-bold pb-3">Course Description</p>
                <p>
                  Calling nothing end fertile for venture way boy. Esteem spirit
                  temper too say adieus who direct esteem. It esteems luckily mr
                  or picture placing drawing no. Apartments frequently or
                  motionless on reasonable projecting expression. Way mrs end
                  gave tall walk fact bed. Placing assured be if removed it
                  besides on. Far shed each high read are men over day. Afraid
                  we praise lively he suffer family estate is. Ample order up in
                  of in ready. Timed blind had now those ought set often which.
                  Or snug dull he show more true wish. No at many deny away miss
                  evil. On in so indeed spirit an mother. Amounted old strictly
                  but marianne admitted. People former is remove remain as.
                </p>
              </div>
              <div>
                <h2 className="font-bold pb-3">Learning Objectives</h2>
                <div className="flex ">
                  <div className="w-5/6 flex gap-4 pb-6">
                    <BiRightArrowAlt />
                    Be able to use simple tricks and techniques to make
                    self-control easier
                    <div className="flex gap-4">
                      <BiRightArrowAlt />
                      Be able to use simple tricks and techniques to make
                      self-control easier
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-5/6 flex gap-4">
                    <BiRightArrowAlt />
                    Have a huge advantage when it comes to sticking to your diet
                    <div className="flex gap-4">
                      <BiRightArrowAlt />
                      Meeting your fitness goals, and leading a healthier
                      lifestyle.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" flex flex-col w-1/4 space-y-8  mt-[-150px] z-40">
              <div className="w-full pb">
                <div className=" shadow-lg mt-3 pb-5 ">
                  <img
                    src={Course3}
                    alt="Instructor Image"
                    className="lg:h-full lg:w-full  object-cover "
                  />
                  <div className="space-y-4">
                    <div className="space-y-4 bg-slate-200 ">
                      <div className="flex items-center justify-between py-3 px-4">
                        <h1 className="font-bold text-2xl">$32</h1>
                        <p>rating(4.8)</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between px-4">
                      <div className="flex items-center gap-2">
                        <BiSolidBookOpen />
                        <p>Lecture</p>
                      </div>
                      <p className="font-bold">8</p>
                    </div>
                    <div className="flex items-center justify-between gap-3 px-4">
                      <div className="flex items-center gap-2">
                        <BiTimeFive />
                        <p>Duration</p>
                      </div>
                      <p className="font-bold">5.7 Hours</p>
                    </div>
                    <div className="flex items-center justify-between gap-3 px-4">
                      <div className="flex items-center gap-2">
                        <MdLanguage />
                        <p>All Level</p>
                      </div>
                      <p className="font-bold">English</p>
                    </div>
                    <div className="flex items-center justify-between px-4">
                      <div className="flex items-center gap-2">
                        <BiSolidBookOpen />
                        <p>Students</p>
                      </div>
                      <p className="font-bold">12k</p>
                    </div>
                    <div className="flex justify-center">
                      <button className="px-8 py-3 text-center w-64 bg-blue-500 rounded-md text-white font-bold">
                        Enroll
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full pb">
                <div className="px-4 space-y-4 shadow-lg mt-3 pb-5">
                  <div className="flex items-center justify-between  py-3 px-4">
                    <h1 className="font-bold text-2xl">Course Categories</h1>
                  </div>
                  <div className="flex items-center justify-between ">
                    <p>Online Learning</p>
                    <p className="font-bold">8</p>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <p>Java Programming</p>
                    <p className="font-bold">5.7 Hours</p>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <p>Social Science</p>
                    <p className="font-bold">English</p>
                  </div>
                  <div className="flex items-center justify-between ">
                    <p>Business Management</p>
                    <p className="font-bold">12k</p>
                  </div>
                  <div className="flex items-center justify-between ">
                    <p>Course Management</p>
                    <p className="font-bold">12k</p>
                  </div>
                </div>
              </div>
              <div className="w-full pb">
                <div className="px-4 space-y-4 shadow-lg mt-3 pb-5">
                  <div className="flex items-center justify-between  py-3 px-4">
                    <h1 className="font-bold text-2xl">Related Courses</h1>
                  </div>
                  <div className="flex items-center justify-between ">
                    <img
                      src={Course1}
                      alt="Instructor Image"
                      className="lg:h-[100px] lg:w-[100px] md:w-full md:h-full object-cover "
                    />
                    <div className="space-y-1">
                      <h2 className="font-bold">
                        How to Make <br></br> Beautiful <br></br> Landscape
                      </h2>
                      <p>rating</p>
                      <div className="flex items-center gap-1">
                        <BsPeopleFill />
                        <p>By Temi Bubu</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between ">
                    <img
                      src={Course3}
                      alt="Instructor Image"
                      className="lg:h-[100px] lg:w-[100px] md:w-full md:h-full object-cover "
                    />
                    <div className="space-y-1">
                      <h2 className="font-bold">
                        Profession <br></br> paython learing
                      </h2>
                      <p>rating</p>
                      <div className="flex items-center gap-1">
                        <BsPeopleFill />
                        <p>By Temi Bubu</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between ">
                    <img
                      src={Course2}
                      alt="Instructor Image"
                      className="lg:h-[100px] lg:w-[100px] md:w-full md:h-full object-cover "
                    />
                    <div className="space-y-1">
                      <h2 className="font-bold">
                        Learn PHP <br></br> Programming <br></br>From Scratch
                      </h2>
                      <p>rating</p>
                      <div className="flex items-center gap-1">
                        <BsPeopleFill />
                        <p>By Temi Bubu</p>
                      </div>
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

export default CourseDetail;
