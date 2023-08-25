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
    <div className="w-full" style={backgroundImageStyle}>
      <div className="px-2">
        <div className="container mx-w-5xl  mx-auto flex ">
          <div className="w-1/2 relative">
            <div className="mt-20 ml-14">
              <h1 className="pb-8 text-6xl font-bold">
                Find The Right <br /> Course For Your <br /> Future
              </h1>
              <p className="pb-4 text-xl ">
                We offer a diverse range of courses curated to shape your
                future. Whether you're looking to enhance your skills or explore
                <br></br>
                new horizons, our platform provides the perfect opportunity to
                find the right course tailored to your aspirations.
              </p>
              <button className="bg-[#e46601] hover:bg-[#e46601] text-white py-4 px-8 rounded-lg w-60">
                Get started
              </button>
            </div>

            <div className="absolute bottom-8 left-0 flex ml-12 ">
              <div className="w-64 bg-blue-200 p-8 flex justify-center items-center rounded-3xl">
                <p className="text-center">Tableau</p>
              </div>

              <div className="w-64 bg-green-200 p-4 flex justify-center items-center rounded-3xl">
                Microsoft SQL Server
              </div>

              <div className="w-64 bg-red-200 p-4 flex justify-center items-center rounded-3xl">
                Google Cloud
              </div>

              <div className="w-64 bg-yellow-200 p-4 flex justify-center items-center rounded-3xl">
                Python
              </div>

              <div className="w-64 bg-purple-200 p-4 flex justify-center items-center rounded-3xl">
                PowerBi
              </div>
            </div>
          </div>

          <div className="w-1/2">
            <img
              src={HeaderImage}
              alt="headerImage"
              className="h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
