<<<<<<< HEAD
import React, { useContext } from "react";
=======
import React, { useContext, useEffect } from "react";
>>>>>>> 11558e6d411745085ec483755cd700c572f16543
import CourseCard from "./components/CourseCard";
import businessImage from "../../assets/images/business.jpg";
import healthImage from "../../assets/images/health.jpg";
import operationImage from "../../assets/images/operation.jpg";
import financeImage from "../../assets/images/financial.jpg";
<<<<<<< HEAD
import background from "../../assets/images/wave.png";

// import { CourseContext } from "../../services/CourseContext";

const Course = () => {
  // const { courses, isLoading, error } = useContext(CourseContext);
=======
import { CourseContext } from "../../services/CourseContext";

const Course = () => {
  const { courses, isLoading, error, fetchOnlineCourse } =
    useContext(CourseContext);

  useEffect(() => {
    fetchOnlineCourse();
  }, []);

  const fetchFirstFour = courses.slice(0, 4);

>>>>>>> 11558e6d411745085ec483755cd700c572f16543
  return (
    <div className="w-full custom-description-background py-24">
      <div class="max-w-5xl mx-auto ">
        <p className="lg:text-4xl text-2xl font-bold px-4">
          Course You May Like
        </p>
<<<<<<< HEAD
        <div className="flex flex-col md:flex-row gap-3 mt-7">
          <div class="lg:w-1/4 w-full p-4">
            <CourseCard
              imageSrc={operationImage}
              title="Operation Data Analyst"
              duration="30 Hours"
              onViewCourse={() => {}}
            />
          </div>

          <div class="lg:w-1/4 w-full  p-4">
            <CourseCard
              imageSrc={healthImage}
              title="HealthCare Data Analyst"
              duration="30 Hours"
              onViewCourse={() => {}}
            />
          </div>

          <div class="lg:w-1/4 w-full p-4">
            <CourseCard
              imageSrc={financeImage}
              title="Financial Data Analyst"
              duration="30 Hours"
              onViewCourse={() => {}}
            />
          </div>

          <div class="lg:w-1/4 w-full p-4">
            <CourseCard
              imageSrc={businessImage}
              title="Business Data Analyst"
              duration="30 Hours"
              onViewCourse={() => {}}
            />
          </div>
=======

        <div className="flex flex-col md:flex-row gap-3 mt-7">
          {fetchFirstFour.map((course) => (
            <div class="lg:w-1/4 w-full p-4">
              <CourseCard
                key={course.id}
                imageSrc={operationImage}
                title={course.title}
                duration={course.duration}
                uuid={course.uuid}
              />
            </div>
          ))}
>>>>>>> 11558e6d411745085ec483755cd700c572f16543
        </div>
      </div>
    </div>
  );
};

export default Course;
