import React from "react";
import edu from "../assets/icons/edu.png";

function Subscribe() {
  const backgroundImageStyle = {
    backgroundImage: `url(${edu})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div
      className="bg-[#021B76] flex justify-center items-center "
      style={{ ...backgroundImageStyle, height: "70vh" }}
    >
      <div>
        <div
          className="container max-w-lg
       mx-auto justify-center items-center py-10"
        >
          <div className="text-center pb-8  py-12">
            <p className="text-6xl font-bold text-white">
              {" "}
              Subscribe To <br></br> Our Newsletter
            </p>
            <div>
              <p className="pb-4 text-white ">
                Stay updated with educational resources and news <br></br>
                around your skill progress
              </p>
            </div>
          </div>
          <div
            className="border-solid border-2 border-sky-500 p-2"
            style={{ borderColor: "#e46601" }}
          >
            <div className="flex justify-between items-center space-x-3">
              <input
                type="text"
                placeholder="Enter Email"
                className="px-16 py-2 rounded-lg border border-transparent focus:outline-none bg-opacity-50"
                style={{ color: "transparent" }}
              />

              <button className="bg-[#e46601] hover:bg-[#e46601] text-white py-2 px-4 rounded-lg">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
