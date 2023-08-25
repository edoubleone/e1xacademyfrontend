import React from "react";
import background from "../../assets/images/header.jpeg";
import HeaderImage from "../../assets/images/header image.png";

function Main() {
  const backgroundImageStyle = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div className="w-full relative" style={backgroundImageStyle}>
      <div className="container  mx-auto lg:flex  px-4">
        <div className="lg:w-1/2 w-full">
          <div className="mt-20  ">
            <h1 className="pb-8 text-6xl font-bold ">
              Find The Right <br /> Course For Your <br /> Future
            </h1>
            <p className="pb-4 text-xl  ">
              We offer a diverse range of courses curated to shape your future.
              Whether you're looking to enhance your skills or explore
              <br></br>
              new horizons, our platform provides the perfect opportunity to
              find the right course tailored to your aspirations.
            </p>
            <button className="bg-[#e46601] hover:bg-[#e46601] text-white py-4 px-8 rounded-lg lg:w-60 w-full">
              Get started
            </button>
          </div>
        </div>

        <div className="lg:w-1/2 w-full">
          <img
            src={HeaderImage}
            alt="headerImage"
            className="h-full object-cover"
          />
        </div>
      </div>
      <div className=" lg:absolute container mx-auto flex  flex-wrap lg:bottom-12 left-0 right-0 lg:px-0 px-4  ">
        <div className="lg:w-64 w-full bg-blue-200 lg:p-8  p-4  flex justify-center items-center rounded-3xl lg:space-y-0 md:space-y-4">
          <p className="text-center">Tableau</p>
        </div>

        <div className="lg:w-64 w-full bg-green-200 p-4 flex justify-center items-center rounded-3xl">
          Microsoft SQL Server
        </div>

        <div className="lg:w-64 w-full bg-red-200 p-4 flex justify-center items-center rounded-3xl">
          Google Cloud
        </div>

        <div className="lg:w-64 w-full bg-yellow-200 p-4 flex justify-center items-center rounded-3xl">
          Python
        </div>

        <div className="lg:w-64 w-full bg-purple-200 p-4 flex justify-center items-center rounded-3xl">
          PowerBi
        </div>
      </div>
    </div>
  );
}

export default Main;
