<<<<<<< HEAD
import React, { useState } from "react";
=======
import React, { useState, useContext, useEffect } from "react";
import { LiveCourseDetailContext } from "../../services/LiveCourseDetail";

import { useParams } from "react-router-dom";
>>>>>>> 11558e6d411745085ec483755cd700c572f16543
import { motion } from "framer-motion";
import imageLivePics from "../../assets/images/video image container.png";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { MdSlowMotionVideo } from "react-icons/md";
import PresentationItem from "./components/Presentation";
<<<<<<< HEAD

const Course = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleExpand = (section) => {
    if (expandedSection === section) {
      setExpandedSection(null); // Close the section if it's already open
    } else {
      setExpandedSection(section); // Open the clicked section
=======
import ErrorPage from "../../page/ErrorPage";
import LoadingSpinner from "../LoadingSpinner";

const Course = () => {
  const { uuid } = useParams();
  const { courses, isLoading, error, fetchLiveCourseDetails } = useContext(
    LiveCourseDetailContext
  );
  console.log("uuis", uuid);
  const [expandedSection, setExpandedSection] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);

  useEffect(() => {
    if (uuid) {
      fetchLiveCourseDetails(uuid);
    }
  }, []);

  console.log("make", courses);

  const toggleExpand = (section) => {
    if (expandedSection === section) {
      setExpandedSection(null);
      setVideoUrl(null);
    } else {
      setExpandedSection(section);
>>>>>>> 11558e6d411745085ec483755cd700c572f16543
    }
  };

  const imgVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
<<<<<<< HEAD
=======
      {isLoading && <LoadingSpinner />}

      {error && <ErrorPage errors={error} />}
      <button className="border py-2 px-5 text-sm">Back To Courses</button>

>>>>>>> 11558e6d411745085ec483755cd700c572f16543
      <div className="lg:flex justify-between">
        <motion.div
          className="lg:w-3/5 w-full mt-12 space-y-6"
          variants={imgVariants}
          initial="initial"
          animate="animate"
        >
<<<<<<< HEAD
          <button className="border py-2 px-5 text-sm">Back To Courses</button>
          <h1 className="font-bold lg:text-6xl md:text-3xl">
            Ultimate Financial <br></br> Data Analyst course{" "}
          </h1>
          <div>
            <img src={imageLivePics} alt="imageLive" loading="lazy" />
          </div>
          <p className="lg:py-6 py-0">Introduction to the user</p>
        </motion.div>
        <div className="lg:w-1/3 w-full lg:mt-32 mt-12 ">
=======
          <img src={imageLivePics} alt="imageLive" loading="lazy" />

          <p className="lg:py-6 py-0">{courses?.title}</p>
        </motion.div>
        <div className="lg:w-1/3 w-full  mt-12 ">
>>>>>>> 11558e6d411745085ec483755cd700c572f16543
          <div className="border border-blue-300 rounded-lg">
            <div className="bg-custom-blue py-3">
              <p className="text-white p-4">Course Content</p>
            </div>
            <div
              className="flex justify-between items-center p-4 border-b cursor-pointer"
              onClick={() => toggleExpand("introduction")}
            >
              <p>Introduction To The User</p>
              {expandedSection === "introduction" ? (
                <IoIosArrowDown />
              ) : (
                <IoIosArrowForward />
              )}
            </div>
            {expandedSection === "introduction" && (
              <div className="p-4">
                <PresentationItem
                  icon={<MdSlowMotionVideo />}
                  title="Another Presentation"
                  duration="10:30min"
                  action="continue"
<<<<<<< HEAD
=======
                  onClick={() => setVideoUrl("your-video-url-here")}
>>>>>>> 11558e6d411745085ec483755cd700c572f16543
                />
                <PresentationItem
                  icon={<MdSlowMotionVideo />}
                  title="Presentation from instructor"
                  duration="05:56min"
                  action="Continue"
                />
                <PresentationItem
                  icon={<MdSlowMotionVideo />}
                  title="Presentation from instructor"
                  duration="05:56min"
                  action="Continue"
                />
              </div>
            )}

            <div
              className="flex justify-between items-center p-4 border-b cursor-pointer"
              onClick={() => toggleExpand("dataStructure")}
            >
              <p>Data Structure</p>
              {expandedSection === "dataStructure" ? (
                <IoIosArrowDown />
              ) : (
                <IoIosArrowForward />
              )}
            </div>
            {expandedSection === "dataStructure" && (
              <div className="p-4">
                <PresentationItem
                  icon={<MdSlowMotionVideo />}
                  title="Another Presentation"
                  duration="10:30min"
                  action="continue"
                />
                <PresentationItem
                  icon={<MdSlowMotionVideo />}
                  title="Presentation from instructor"
                  duration="05:56min"
                  action="Continue"
                />
                <PresentationItem
                  icon={<MdSlowMotionVideo />}
                  title="Presentation from instructor"
                  duration="05:56min"
                  action="Continue"
                />
              </div>
            )}

            <div
              className="flex justify-between items-center p-4 border-b cursor-pointer"
              onClick={() => toggleExpand("regularExpression")}
            >
              <p>Regular Expression</p>
              {expandedSection === "regularExpression" ? (
                <IoIosArrowDown />
              ) : (
                <IoIosArrowForward />
              )}
            </div>
            {expandedSection === "regularExpression" && (
              <div className="p-4">
                <PresentationItem
                  icon={<MdSlowMotionVideo />}
                  title="Another Presentation"
                  duration="10:30min"
                  action="continue"
                />
                <PresentationItem
                  icon={<MdSlowMotionVideo />}
                  title="Presentation from instructor"
                  duration="05:56min"
                  action="Continue"
                />
                <PresentationItem
                  icon={<MdSlowMotionVideo />}
                  title="Presentation from instructor"
                  duration="05:56min"
                  action="Continue"
                />
              </div>
            )}

            <div
              className="flex justify-between items-center p-4 border-b cursor-pointer"
              onClick={() => toggleExpand("functions")}
            >
              <p>Functions</p>
              {expandedSection === "functions" ? (
                <IoIosArrowDown />
              ) : (
                <IoIosArrowForward />
              )}
            </div>
            {expandedSection === "functions" && (
              <div className="p-4">
                <PresentationItem
                  icon={<MdSlowMotionVideo />}
                  title="Another Presentation"
                  duration="10:30min"
                  action="continue"
                />
                <PresentationItem
                  icon={<MdSlowMotionVideo />}
                  title="Presentation from instructor"
                  duration="05:56min"
                  action="Continue"
                />
                <PresentationItem
                  icon={<MdSlowMotionVideo />}
                  title="Presentation from instructor"
                  duration="05:56min"
                  action="Continue"
                />
              </div>
            )}

            <div
              className="flex justify-between items-center p-4 border-b cursor-pointer"
              onClick={() => toggleExpand("writingCompleteProgram")}
            >
              <p>Writing a complete Program</p>
              {expandedSection === "writingCompleteProgram" ? (
                <IoIosArrowDown />
              ) : (
                <IoIosArrowForward />
              )}
            </div>
            {expandedSection === "writingCompleteProgram" && (
              <div className="p-4">
                <PresentationItem
                  icon={<MdSlowMotionVideo />}
                  title="Another Presentation"
                  duration="10:30min"
                  action="continue"
                />
                <PresentationItem
                  icon={<MdSlowMotionVideo />}
                  title="Presentation from instructor"
                  duration="05:56min"
                  action="Continue"
                />
                <PresentationItem
                  icon={<MdSlowMotionVideo />}
                  title="Presentation from instructor"
                  duration="05:56min"
                  action="Continue"
                />
              </div>
            )}

            <div
              className="flex justify-between items-center p-4 border-b cursor-pointer"
              onClick={() => toggleExpand("flowControl")}
            >
              <p>Flow Control</p>
              {expandedSection === "flowControl" ? (
                <IoIosArrowDown />
              ) : (
                <IoIosArrowForward />
              )}
            </div>
            {expandedSection === "flowControl" && (
              <div className="p-4">
                <PresentationItem
                  icon={<MdSlowMotionVideo />}
                  title="Another Presentation"
                  duration="10:30min"
                  action="continue"
                />
                <PresentationItem
                  icon={<MdSlowMotionVideo />}
                  title="Presentation from instructor"
                  duration="05:56min"
                  action="Continue"
                />
                <PresentationItem
                  icon={<MdSlowMotionVideo />}
                  title="Presentation from instructor"
                  duration="05:56min"
                  action="Continue"
                />
              </div>
            )}

            {/* Add more sections following the same pattern */}
            <div
              className="flex justify-between items-center p-4 border-b cursor-pointer"
              onClick={() => toggleExpand("moreAboutStrings")}
            >
              <p>More About Strings</p>
              {expandedSection === "moreAboutStrings" ? (
                <IoIosArrowDown />
              ) : (
                <IoIosArrowForward />
              )}
            </div>
            {expandedSection === "moreAboutStrings" && (
              <div className="p-4">
                <PresentationItem
                  icon={<MdSlowMotionVideo />}
                  title="Another Presentation"
                  duration="10:30min"
                  action="continue"
                />
                <PresentationItem
                  icon={<MdSlowMotionVideo />}
                  title="Presentation from instructor"
                  duration="05:56min"
                  action="Continue"
                />
                <PresentationItem
                  icon={<MdSlowMotionVideo />}
                  title="Presentation from instructor"
                  duration="05:56min"
                  action="Continue"
                />
              </div>
            )}
<<<<<<< HEAD

            {/* Add more sections following the same pattern */}
=======
>>>>>>> 11558e6d411745085ec483755cd700c572f16543
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
