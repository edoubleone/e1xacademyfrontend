import React from "react";
import CourseCard from "./components/CourseCard";
import CustomButton from "./components/CustomButton";
import Framer from "../../assets/icons/Frame 36.png";
import Framers from "../../assets/icons/Frame 35.png";
import Framerer from "../../assets/icons/Frame 34.png";
import Frameres from "../../assets/icons/Frame 37.png";
import background from "../../assets/images/wave.png";

// import "./Css/card.css";

function Course() {
  const backgroundImageStyle = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div className="mt-20 bg-[#D6EBFF] py-4" style={backgroundImageStyle}>
      <div className="container max-w-6xl mx-auto justify-center items-center px-4 ">
        <div>
          <h1 className="text-center font-bold pb-2 lg:text-5xl md:text-lg">
            Popular Course
          </h1>

          <p className="text-center lg:text-xl md:text-l mb-5">
            Explore From All Your Online Course
          </p>
        </div>
        <div className="lg:flex  lg:justify-center lg:items-center md:flex md:flex-row md:justify-center md:px-4">
          <CourseCard
            imageSrc={Framers}
            title="HealthCare Data Analyst"
            duration="30 Hours"
            onViewCourse={() => {}}
          />

          <CourseCard
            imageSrc={Framerer}
            title="Operation Data Analyst"
            duration="30 Hours"
            onViewCourse={() => {}}
          />
        </div>

        <div className="lg:flex  lg:justify-center lg:items-center md:flex md:flex-row md:justify-center  ">
          <CourseCard
            imageSrc={Frameres}
            title=" Financial Data Analyst"
            duration="30 Hours"
            onViewCourse={() => {}}
          />
          <CourseCard
            imageSrc={Framer}
            title=" Business Data Analyst"
            duration="30 Hours"
            onViewCourse={() => {
              console.log("hello");
            }}
          />
        </div>
        <div className="text-center  mt-12 mb-9">
          <CustomButton text="See All" />
        </div>
      </div>
    </div>
  );
}

export default Course;
