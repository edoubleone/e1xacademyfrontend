import React from "react";

import InfoBlock from "./components/InfoBlock";
import people from "../../assets/icons/VectorBook.png";
import edu from "../../assets/icons/VectorEdu.png";
import world from "../../assets/icons/VectorWorld.png";
import book from "../../assets/icons/VectorBook.png";
import background from "../../assets/images/Vector.png";
import stats from "../../assets/images/stats.png";

function Accredication() {
  const backgroundImageStyle = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  const imageStyle = {
    backgroundImage: `url(${stats})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
  };
  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{ ...backgroundImageStyle, height: "600px" }}
    >
      <div
        className="flex items-center justify-center h-full w-full"
        style={{ ...imageStyle, minHeight: "400px" }}
      >
        <div className="container  mx-auto flex justify-center">
          <div className="lg:w-3/5 bg-blue-500 rounded-lg">
            <div className="lg:flex lg:space-y-0 space-y-10 lg:p-6 p-8 ">
              <InfoBlock
                imageSrc={edu}
                title="100+"
                description="Happy Students"
              />
              <InfoBlock
                imageSrc={book}
                title="30+"
                description="Online Course"
              />
              <InfoBlock
                imageSrc={world}
                title="100+"
                description="Happy Students"
              />
              <InfoBlock
                imageSrc={people}
                title="30+"
                description="Over Countries"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accredication;

<div className="h-full bg-blue-500 flex items-center justify-center py-12   rounded-lg ">
  <InfoBlock imageSrc={people} title="30+" description="Course" />
  <InfoBlock imageSrc={edu} title="100+" description="Happy Students" />
  <InfoBlock imageSrc={book} title="30+" description="Online Course" />
  <InfoBlock imageSrc={world} title="100+" description="Happy Student" />
</div>;

// flex flex-col items-center md:flex-row
