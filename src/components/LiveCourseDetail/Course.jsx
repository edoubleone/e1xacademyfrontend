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
  const { courses, isLoading, error, fetchLiveCourseDetails } =
    useContext(LiveCourseDetailContext);

  const [expandedSection, setExpandedSection] = useState(null);

  useEffect(() => {
    if (uuid) {
      fetchLiveCourseDetails(uuid);
    }
  }, [uuid]);

  const toggleExpand = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const imgVariants = {
    initial: { opacity: 0, y: 100 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 1 },
    },
  };

  return (
    <div className="max-w-6xl px-4 mx-auto">
      {isLoading ? (
        <LoadingSpinner />
      ) : error ? (
        <ErrorPage errors={error} />
      ) : (
        <>
          <button className="px-5 py-2 text-sm border">
            Back To Courses
          </button>

          <div className="justify-between lg:flex">
            <motion.div
              className="w-full mt-12 space-y-6 lg:w-3/5"
              variants={imgVariants}
              initial="initial"
              animate="animate"
            >
              <img src={imageLivePics} alt="live-course" />
              <p className="py-0 lg:py-6">{courses?.title}</p>
            </motion.div>

            <div className="w-full mt-12 lg:w-1/3">
              <div className="border border-blue-300 rounded-lg">
                <div className="py-3 bg-custom-blue">
                  <p className="p-4 text-white">Course Content</p>
                </div>

                {[
                  "introduction",
                  "dataStructure",
                  "regularExpression",
                  "functions",
                  "writingCompleteProgram",
                  "flowControl",
                  "moreAboutStrings",
                ].map((section) => (
                  <div key={section}>
                    <div
                      className="flex items-center justify-between p-4 border-b cursor-pointer"
                      onClick={() => toggleExpand(section)}
                    >
                      <p className="capitalize">{section}</p>
                      {expandedSection === section ? (
                        <IoIosArrowDown />
                      ) : (
                        <IoIosArrowForward />
                      )}
                    </div>

                    {expandedSection === section && (
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
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Course;