import React from "react";
import gallery from "../../assets/images/gallery.jpg";
import gallery1 from "../../assets/images/gallery (2).jpg";
import gallery2 from "../../assets/images/gallery3.jpg";
import gallery3 from "../../assets/images/gallery4.jpg";
import gallery4 from "../../assets/images/gallery5.jpg";
import gallery5 from "../../assets/images/gallery6.jpg";

const More = () => {
  return (
    <div className="mt-12 ">
      <div className="container mx-auto">
        <div className="text-center font-bold space-y-3 ">
          <p className="text-2xl text-gray-300">GALLERY</p>
          <p className="text-4xl text-black">Recent Gallery</p>
        </div>
        <div className="space-y-9 mt-6">
          <div className="flex gap-5">
            <div className="w-1/2">
              <img
                src={gallery}
                alt="headerImage"
                className="w-full h-full object-cover lg:mt-0 md:mt-8"
              />
            </div>
            <div className="w-1/2">
              <img
                src={gallery1}
                alt="headerImage"
                className="w-full h-full object-cover lg:mt-0 md:mt-8"
              />
            </div>
            <div className="w-1/2">
              <img
                src={gallery2}
                alt="headerImage"
                className="w-full h-full object-cover lg:mt-0 md:mt-8"
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="w-1/2">
              <img
                src={gallery3}
                alt="headerImage"
                className="w-full h-full object-cover lg:mt-0 md:mt-8"
              />
            </div>
            <div className="w-1/2">
              <img
                src={gallery4}
                alt="headerImage"
                className="w-full h-full object-cover lg:mt-0 md:mt-8"
              />
            </div>
            <div className="w-1/2">
              <img
                src={gallery5}
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
