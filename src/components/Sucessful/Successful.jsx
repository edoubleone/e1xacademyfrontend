import React from "react";
import congratImage from "../../assets/images/confetti.png";

const Successful = () => {
  return (
    <div className="custom-grow-background py-24">
      <div className="max-w-6xl mx-auto bg-white ">
        <div className="h-screen flex flex-col justify-center items-center">
          <img src={congratImage} alt="congratImage" />

          <div className="space-y-4 text-center">
            <p>Course Purchase</p>
            <h1 className="font-bold text-5xl text-blue-700">Successful</h1>
            <p>Enjoy Your Study, We have sent you an email receipt</p>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default Successful;
