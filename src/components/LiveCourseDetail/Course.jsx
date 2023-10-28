import React, { useState, useContext, useEffect } from "react";
import { LiveCourseDetailContext } from "../../services/LiveCourseDetail";

import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import imageLivePics from "../../assets/images/video image container.png";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { MdSlowMotionVideo } from "react-icons/md";
import PresentationItem from "./components/Presentation";
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
    <div className="max-w-6xl px-4 mx-auto">
      {isLoading && <LoadingSpinner />}

      {error && <ErrorPage errors={error} />}
      <button className="px-5 py-2 text-sm border">Back To Courses</button>

      <div className="justify-between lg:flex">
        <motion.div
          className="w-full mt-12 space-y-6 lg:w-3/5"
          variants={imgVariants}
          initial="initial"
          animate="animate"
        >
          <img src={imageLivePics} alt="imageLive" loading="lazy" />

          <p className="py-0 lg:py-6">{courses?.title}</p>
        </motion.div>
        <div className="w-full mt-12 lg:w-1/3 ">
          <div className="border border-blue-300 rounded-lg">
            <div className="py-3 bg-custom-blue">
              <p className="p-4 text-white">Course Content</p>
            </div>
            <div
              className="flex items-center justify-between p-4 border-b cursor-pointer"
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
                  onClick={() => setVideoUrl("your-video-url-here")}
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
              className="flex items-center justify-between p-4 border-b cursor-pointer"
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
              className="flex items-center justify-between p-4 border-b cursor-pointer"
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
              className="flex items-center justify-between p-4 border-b cursor-pointer"
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
              className="flex items-center justify-between p-4 border-b cursor-pointer"
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
              className="flex items-center justify-between p-4 border-b cursor-pointer"
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
              className="flex items-center justify-between p-4 border-b cursor-pointer"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
