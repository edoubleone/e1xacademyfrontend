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
      <div className="max-w-6xl  mx-auto lg:flex  px-4">
        <div className="lg:w-1/2 w-full">
          <div className="lg:mt-20 mt-8">
            <h1 className="pb-8 lg:text-6xl text-4xl font-bold md:flex text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-green-800">
              Find The Right <br /> Course For Your <br /> Future
            </h1>

            <p className="pb-4 lg:text-xl text-md  ">
              We offer a diverse range of courses curated to shape your future.
              Whether you're looking to enhance your skills or explore
              <br></br>
              new horizons, our platform provides the perfect opportunity to
              find the right course tailored to your aspirations.
            </p>
            <button className="bg-custom-button hover:bg-custom-button text-white py-4 px-8 rounded-lg lg:w-60 w-full">
              Get started
            </button>
          </div>
        </div>

        {/* <div className="lg:w-1/2 w-full ">
          <img
            src={HeaderImage}
            alt="headerImage"
            className="h-full object-cover lg:mt-0 md:mt-8"
          />
        </div> */}
        <div className="lg:w-1/2 w-full ">
          <img
            src={HeaderImage}
            alt="headerImage"
            className="h-full object-cover lg:mt-0 md:mt-m lg:w-full w-2/3 mx-auto"
          />
        </div>
      </div>
      <div className="lg:absolute max-w-6xl mx-auto flex flex-wrap lg:bottom-12 left-0 right-0 space-y-2 lg:space-y-0">
        <div className="lg:w-40 w-full bg-blue-200 lg:p-4 p-2 flex justify-center items-center rounded-3xl">
          <p className="text-center">Tableau</p>
        </div>

        <div className="lg:w-64 w-full bg-green-200 p-4 flex justify-center items-center rounded-3xl">
          Microsoft SQL Server
        </div>

        <div className="lg:w-40 w-full bg-red-200 p-4 flex justify-center items-center rounded-3xl">
          Google Cloud
        </div>

        <div className="lg:w-40 w-full bg-yellow-200 p-4 flex justify-center items-center rounded-3xl">
          Python
        </div>

        <div className="lg:w-40 w-full bg-purple-200 p-4 flex justify-center items-center rounded-3xl">
          PowerBi
        </div>
      </div>
    </div>
  );
}

export default Main;
