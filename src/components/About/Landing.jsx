import React from "react";
import backgroundImg from "../../assets/images/about.jpg";

const Landing = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div className="relative h-96" style={{ ...backgroundImageStyle }}>
      {/* Transparent black overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="text-center absolute inset-0 flex items-center justify-center">
        <p className="text-4xl font-bold text-white">About us</p>
      </div>
    </div>
  );
};

export default Landing;
