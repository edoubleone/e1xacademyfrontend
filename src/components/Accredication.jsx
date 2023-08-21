import React from "react";
import people from "../assets/icons/VectorBook.png";
import edu from "../assets/icons/VectorEdu.png";
import world from "../assets/icons/VectorWorld.png";
import book from "../assets/icons/VectorBook.png";
import background from "../assets/images/Vector.png";
import stats from "../assets/images/stats.png";

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
      style={{ ...backgroundImageStyle, height: "400px" }}
    >
      <div
        className="flex items-center justify-center h-[80] w-full"
        style={{ ...imageStyle, minHeight: "400px" }}
      >
        <div className="container  mx-auto flex justify-center">
          <div className="w-3/5 flex flex-col items-center">
            <div className="h-full bg-blue-500 flex items-center justify-center py-12 rounded-lg ">
              <div className="p-4 text-center flex items-center justify-center space-x-6">
                <img src={people} alt="people" />
                <div className="flex flex-col">
                  <h1 className="font-bold text-lg sm:text-xl md:text-2xl text-white">
                    30+
                  </h1>
                  <h2 className="text-md sm:text-xl md:text-xl font-semibold text-white">
                    Courses
                  </h2>
                </div>
              </div>

              <div className="p-4 text-center flex items-center justify-center space-x-6">
                <img src={edu} alt="edu" />
                <div className="flex flex-col">
                  <h1 className="font-bold text-lg sm:text-xl md:text-2xl text-white">
                    100+
                  </h1>
                  <h2 className="text-md sm:text-xl md:text-xl font-semibold text-white">
                    Happy Students
                  </h2>
                </div>
              </div>
              <div className="p-4 text-center flex items-center justify-center space-x-6">
                <img src={book} alt="world" />
                <div className="flex flex-col items-center">
                  <h1 className="font-bold text-lg sm:text-xl md:text-2xl text-white">
                    30+
                  </h1>
                  <h2 className="text-md sm:text-xl md:text-xl font-semibold text-white">
                    Online Courses
                  </h2>
                </div>
              </div>
              <div className="p-4 text-center flex items-center justify-center space-x-6">
                <img src={world} alt="world" />
                <div className="flex flex-col">
                  <h1 className="font-bold text-lg sm:text-xl md:text-2xl text-white">
                    100+
                  </h1>
                  <h2 className="text-md sm:text-xl md:text-xl font-semibold text-white">
                    Happy Students
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accredication;
