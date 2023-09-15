import React from "react";
import pics from "../../assets/images/female-standing-with.png";

const More = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="text-center font-bold space-y-3 ">
          <p className="text-2xl text-gray-300">GALLERY</p>
          <p className="text-4xl text-black">Recent Gallery</p>
        </div>
        <div className="space-y-9 mt-6">
          <div className="flex gap-5">
            <div className="lg:w-1/2 w-full">
              <img
                src={pics}
                alt="headerImage"
                className="w-full h-full object-cover lg:mt-0 md:mt-8"
              />
            </div>
            <div className="lg:w-1/2 w-full"></div>
            <div className="lg:w-1/2 w-full">
              <img
                src={pics}
                alt="headerImage"
                className="w-full h-full object-cover lg:mt-0 md:mt-8"
              />
            </div>
          </div>
          <div className="flex gap-5 ">
            <div className="lg:w-1/2 w-full">
              <img
                src={pics}
                alt="headerImage"
                className="w-full h-full object-cover lg:mt-0 md:mt-8"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <img
                src={pics}
                alt="headerImage"
                className="w-full h-full object-cover lg:mt-0 md:mt-8"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <img
                src={pics}
                alt="headerImage"
                className="w-full h-full object-cover lg:mt-0 md:mt-8"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default More;
