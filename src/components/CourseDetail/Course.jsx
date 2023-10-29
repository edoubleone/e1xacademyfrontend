import React, { useContext, useEffect } from "react";
import CourseCard from "./components/CourseCard";
import businessImage from "../../assets/images/business.jpg";
import healthImage from "../../assets/images/health.jpg";
import operationImage from "../../assets/images/operation.jpg";
import financeImage from "../../assets/images/financial.jpg";
import { CourseContext } from "../../services/CourseContext";

const Course = () => {
  const { courses, isLoading, error, fetchOnlineCourse } =
    useContext(CourseContext);

  useEffect(() => {
    fetchOnlineCourse();
  }, []);

  const fetchFirstFour = courses.slice(0, 4);

  return (
    <div className="w-full py-24 custom-description-background">
      <div class="max-w-5xl mx-auto ">
        <p className="px-4 text-2xl font-bold lg:text-4xl">
          Course You May Like
        </p>

        <div className="flex flex-col gap-3 md:flex-row mt-7">
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
        </div>
      </div>
    </div>
  );
};

export default Course;
