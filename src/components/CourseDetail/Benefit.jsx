import React from "react";
import thumbs from "../../assets/icons/identity-card.png";
import thumbs1 from "../../assets/icons/tools.png";
import thumbs2 from "../../assets/icons/thumbs-up.png";
import thumbs3 from "../../assets/icons/trophy.png";

const Benefit = () => {
  return (
    <div className="bg-custom-blue py-20 border-b ">
      <div className="max-w-5xl mx-auto">
        <div>
          <p className="font-bold text-4xl text-white">
            Benefit You Get From <br></br> The Program
          </p>
        </div>
        <div class="flex flex-col md:flex-row mt-8">
          <div class="md:w-1/3 p-4 space-y-4">
            <img src={thumbs} alt="thumbs" />
            <div className="space-y-2">
              <p className="text-white font-bold ">Real Time Support</p>
              <p className="text-white text-xs">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
                veritatis maiores cum
              </p>
            </div>
          </div>
          <div class="md:w-1/3 p-4 space-y-4">
            <img src={thumbs1} alt="thumbs" />
            <div className="space-y-2">
              <p className="text-white font-bold"> Virtual Project</p>
              <p className="text-white text-xs">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
                veritatis maiores cum
              </p>
            </div>
          </div>
          <div class="md:w-1/3 p-4 space-y-4">
            <img src={thumbs2} alt="thumbs" />
            <div className="space-y-2">
              <p className="text-white font-bold">Flexible Learning</p>
              <p className="text-white text-xs">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
                veritatis maiores cum
              </p>
            </div>
          </div>
          <div class="md:w-1/3 p-4 space-y-4">
            <img src={thumbs3} alt="thumbs" />
            <div className="space-y-2">
              <p className="text-white font-bold">Job Ready Tips</p>
              <p className="text-white text-xs">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
                veritatis maiores cum
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
