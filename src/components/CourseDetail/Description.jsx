import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CourseDetailContext } from "../../services/CourseDetails";

import { motion, useAnimation } from "framer-motion";
import { BiCheckCircle } from "react-icons/bi";
import { FcRating } from "react-icons/fc";
import { FaAward } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { GoDeviceCameraVideo } from "react-icons/go";
import { useInView } from "react-intersection-observer";
import StudentReviews from "../../assets/images/studentReviews.png";
import instructor1 from "../../assets/images/instructor.png";

const Description = () => {
  const { uuid } = useParams();

  const { courses, isLoading, error, fetchCourseDetails } =
    useContext(CourseDetailContext);

  // const { course_description, images, instructors } = courses;

  useEffect(() => {
    if (uuid) {
      fetchCourseDetails(uuid);
    }
  }, []);
  console.log(" i am checking ", courses);
  const [animateImage, setAnimateImage] = useState(false);
  const [activeTab, setActiveTab] = useState("description");
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      });
      setAnimateImage(true);
    }
  }, [controls, inView]);

  const handleTabChange = (tab) => {
    console.log("activetab", tab);
    setActiveTab(tab);
  };
  return (
    <div className="w-full mx-auto custom-description-background ">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center p-4 py-5 space-x-10">
          <button
            className={`font-bold border-b-4 border-transparent hover:border-[#e46601] pb-3 focus:outline-none ${
              activeTab === "description" ? "border-[#e46601]" : ""
            }`}
            onClick={() => handleTabChange("description")}
          >
            Overview
          </button>
          <button
            className={`font-bold border-b-4 border-transparent hover:border-[#e46601] pb-3 focus:outline-none ${
              activeTab === "content" ? "border-[#e46601]" : ""
            }`}
            onClick={() => handleTabChange("content")}
          >
            Course Content
          </button>
          <button
            className={`font-bold border-b-4 border-transparent hover:border-[#e46601] pb-3 focus:outline-none ${
              activeTab === " instructor" ? "border-[#e46601]" : ""
            }`}
            onClick={() => handleTabChange("instructor")}
          >
            Instructor
          </button>
          <button
            className={`font-bold border-b-4 border-transparent hover:border-[#e46601] pb-3 focus:outline-none ${
              activeTab === "reviews" ? "border-[#e46601]" : ""
            }`}
            onClick={() => handleTabChange("reviews")}
          >
            Reviews
          </button>
        </div>
      </div>
      <div className="pb-6 border-t"> </div>
      {activeTab === "description" && (
        <div className="max-w-5xl p-4 py-12 mx-auto space-y-5">
          <p className="text-2xl font-bold">Description</p>
          <div className="space-y-5">
            {/* <p>{courses.course_description}</p> */}

            <p>
              {" "}
              They perform quantitative analysis to identify trends, patterns,
              and anomalies in financial data to support strategic planning and
              investment decisions. Strong analytical skills, proficiency in
              financial modeling, and a solid understanding of financial markets
              are essential for success in this role.
            </p>
            <p>
              Financial Data Analysts play a crucial role in helping
              organizations optimize their financial performance and mitigate
              risks through data-driven insights.
            </p>
          </div>
          <p className="border-b border-[#e46601] w-[80px] text-[#e46601] ">
            Show Less
          </p>
        </div>
      )}

      {activeTab === "content" && (
        <div className="max-w-4xl py-12 mx-auto space-y-5 ">
          <p className="ml-16 text-2xl font-bold">Courses Content</p>
          <div className="flex items-center justify-center gap-5">
            <div className="w-1/2 space-y-2">
              <div className="flex items-center gap-2">
                <BiCheckCircle />
                <p>Introduction to Financial Data Analysis </p>
              </div>
              <div className="flex items-center gap-2">
                <BiCheckCircle />
                <p> Risk Management and Investment Strategies</p>
              </div>
              <div className="flex items-center gap-2">
                <BiCheckCircle />
                <p>Data Visualization for Financial Insights</p>
              </div>
            </div>
            <div className="w-1/3 space-y-2 ">
              <div className="flex items-center gap-2">
                <BiCheckCircle />
                <p>Financial Modeling</p>
              </div>
              <div className="flex items-center gap-2">
                <BiCheckCircle />
                <p>Quantitative Analysis</p>
              </div>
              <div className="flex items-center gap-2">
                <BiCheckCircle />
                <p>Data Collection and Cleaning</p>
              </div>
            </div>
          </div>

          {/* <div className="space-y-5">
            <p>
              Becoming a Financial Data Analyst involves acquiring the skills
              and knowledge required to analyze and interpret financial data to
              make informed business decisions. Financial Data Analysts are
              responsible for collecting, cleaning, and organizing financial
              data, often utilizing tools such as Excel, SQL, and data
              visualization software.
            </p>

            <p>
              {" "}
              They perform quantitative analysis to identify trends, patterns,
              and anomalies in financial data to support strategic planning and
              investment decisions. Strong analytical skills, proficiency in
              financial modeling, and a solid understanding of financial markets
              are essential for success in this role.
            </p>
            <p>
              Financial Data Analysts play a crucial role in helping
              organizations optimize their financial performance and mitigate
              risks through data-driven insights.
            </p>
          </div> */}
        </div>
      )}

      {activeTab === "instructor" && (
        <div className="max-w-5xl p-4 py-12 mx-auto space-y-5">
          <p className="text-2xl font-bold">Instructor </p>
          <div className="space-y-5">
            {courses.instructors.map((instructor) => (
              <div>
                <p></p>
                <p>{instructor}</p>
              </div>
            ))}

            <div className="flex gap-8">
              {courses.images.map((img) => (
                <div>
                  <img
                    key={img.id}
                    src={img}
                    alt="instructor"
                    className="w-24 h-24 rounded-full"
                  />
                </div>
              ))}

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <FcRating />

                  <p className="text-sm font-semibold">4.6 Instructor Rating</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaAward />
                  <p className="text-sm font-semibold ">114,464 Reviews</p>
                </div>
                <div className="flex items-center gap-2">
                  <BsPeopleFill />
                  <p className="text-sm font-semibold">1,152,522 Students</p>
                </div>
                <div className="flex items-center gap-2">
                  <GoDeviceCameraVideo />
                  <p className="text-sm font-semibold">1,152,522 Students</p>
                </div>
              </div>
            </div>

            <p>
              Al Sweigart is a software developer and author. He has written
              eight programming books, spoken at Python conferences, and has
              taught both kids and adults how to program. Python is his favorite
              programming language, and he is the developer of several open
              source modules for it. He is driven to make programming knowledge
              available to all, and his books freely available under a Creative
              Commons license.
            </p>
          </div>
        </div>
      )}

      {activeTab === "reviews" && (
        <div className="max-w-4xl p-4 py-12 mx-auto space-y-5">
          <div className="flex-row gap-6 lg:flex">
            <div className="w-full lg:w-1/2">
              <div className="px-4 py-10 mb-4 space-y-8 background-card">
                <p className="text-xs">
                  The courses are well-structured, and the instructors are
                  knowledgeable and supportive. I've gained practical skills
                  that have already made a positive impact on my career. I
                  highly recommend Academy to anyone looking to advance their
                  education.
                </p>
                <div className="flex items-center justify-between pb-1 border-b">
                  <div>
                    <p className="font-bold">Jessica Akoh</p>
                    <p className="text-xs">21 days ago</p>
                  </div>
                  <div>
                    <img src={StudentReviews} alt="student Reviews" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="px-4 py-10 mb-4 space-y-8 background-card">
                <p className="text-xs">
                  I've been a student at Ex1 Academy for the past year, and I've
                  found the variety of courses to be impressive. The instructors
                  are engaging, and the online platform is user-friendly. The
                  only reason I didn't give it five stars is that I wish there
                  were more opportunities for hands-on projects.
                </p>
                <div className="flex items-center justify-between pb-1 border-b">
                  <div>
                    <p className="font-bold">Jane Smith</p>
                    <p className="text-xs">21 days ago</p>
                  </div>
                  <div>
                    <img src={StudentReviews} alt="student Reviews" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Description;
