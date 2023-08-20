import React from "react";

function Subscribe() {
  return (
    <div className="bg-purple-100 ">
      <div
        className="container max-w-lg
       mx-auto justify-center items-center py-10"
      >
        <div className="text-center pb-8  py-12">
          <p className="text-6xl font-bold">
            {" "}
            Subscribe To <br></br> Our Newsletter
          </p>
          <div>
            <p className="pb-4">
              Stay updated with educational resources and news <br></br>
              around your skill progress
            </p>
          </div>
        </div>
        <div className="border-solid border-2 border-sky-500 p-2">
          <div className="flex justify-between items-center">
            <input
              type="text"
              placeholder="Enter Email"
              className="px-16 py-2 rounded-lg border focus:outline-none focus:ring focus:border-blue-400"
            />
            <button className="bg-[#e46601] hover:bg-[#e46601] text-white py-2 px-4 rounded-lg">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
