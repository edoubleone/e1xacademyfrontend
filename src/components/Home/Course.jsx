import React, { useEffect, useState, useContext } from "react";
import CourseCard from "./components/CourseCard";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CourseContext } from "../../services/CourseContext";
import CustomButton from "./components/CustomButton";
import businessImage from "../../assets/images/business.jpg";
import healthImage from "../../assets/images/health.jpg";
import operationImage from "../../assets/images/operation.jpg";
import financeImage from "../../assets/images/financial.jpg";
import background from "../../assets/images/wave.png";

function Course() {
  const { courses, isLoading, error, fetchOnlineCourse } =
    useContext(CourseContext);
  const [animateImage, setAnimateImage] = useState(false);

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once when the element comes into view
  });

  useEffect(() => {
    fetchOnlineCourse();
  }, []);

  useEffect(() => {
    if (inView) {
      // When the component is in view, trigger the animation
      controls.start({
        y: 0, // The final position in the y-axis
        opacity: 1, // Set opacity to 1 to make it visible
        transition: {
          duration: 0.5, // Adjust the duration as needed
        },
      });
      setAnimateImage(true);
    }
  }, [controls, inView]);

  const fetchFirstTwo = courses.slice(0, 2);
  const fetchSecondFour = courses.slice(2, 4);

  const backgroundImageStyle = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  const buttonVariants = {
    hover: {
      y: -5, // Move the button 5 pixels up on hover
    },
    tap: {
      scale: 0.95, // Scale the button down when clicked
    },
  };
  return (
    <div className="mt-20 bg-[#D6EBFF] py-4" style={backgroundImageStyle}>
      {isLoading && (
        <div className="text-center p-4">
          <p>Loading...</p>
        </div>
      )}

      {error && (
        <div className="text-center p-4">
          <p>Error: {error.message}</p>
        </div>
      )}

      {!isLoading && !error && (
        <div className="max-w-6xl mx-auto justify-center items-center px-4 ">
          <div>
            <h1 className="text-center font-bold pb-2 lg:text-5xl text-3xl gradient-text-blue">
              Popular Course
            </h1>

            <p className="text-center lg:text-xl text-sm mb-5">
              Explore From All Your Online Course
            </p>
          </div>

          <motion.div
            className="lg:flex lg:justify-center lg:items-center md:flex md:flex-row md:justify-center md:items-center md:px-4"
            initial={{ y: 100, opacity: 0 }}
            animate={controls}
            ref={ref}
          >
            {fetchFirstTwo.map((course) => (
              <CourseCard
                key={course.id}
                imageSrc={healthImage}
                title={course.title}
                duration={course.duration}
                onViewCourse={() => {}}
                loading="lazy"
                uuid={course.uuid}
              />
            ))}
          </motion.div>

          <div className="lg:flex lg:justify-center lg:items-center md:flex md:flex-row md:justify-center">
            {fetchSecondFour.map((course) => (
              <CourseCard
                key={course.id}
                imageSrc={healthImage}
                title={course.title}
                duration={course.duration}
                onViewCourse={() => {}}
                loading="lazy"
                uuid={course.uuid}
              />
            ))}
          </div>

          <motion.div
            className="text-center  mt-12 mb-9"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <CustomButton text="See All" />
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default Course;
