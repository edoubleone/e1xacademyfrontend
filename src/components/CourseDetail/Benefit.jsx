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
              <p className="text-white font-bold ">In-Demand Skills</p>
              <p className="text-white text-xs">
                Financial data analysis is a highly sought-after skill across
                industries, boosting your attractiveness to employers in
                finance, banking, consulting, and beyond
              </p>
            </div>
          </div>
          <div class="md:w-1/3 p-4 space-y-4">
            <img src={thumbs1} alt="thumbs" />
            <div className="space-y-2">
              <p className="text-white font-bold"> Career Flexibility</p>
              <p className="text-white text-xs">
                The skills acquired can be applied in various sectors, including
                finance, healthcare, e-commerce, and more, allowing you to
                explore diverse career paths.
              </p>
            </div>
          </div>
          <div class="md:w-1/3 p-4 space-y-4">
            <img src={thumbs2} alt="thumbs" />
            <div className="space-y-2">
              <p className="text-white font-bold">Global Relevance</p>
              <p className="text-white text-xs">
                Financial data analysis skills are applicable worldwide,
                offering potential opportunities for international work or
                collaboration.
              </p>
            </div>
          </div>
          <div class="md:w-1/3 p-4 space-y-4">
            <img src={thumbs3} alt="thumbs" />
            <div className="space-y-2">
              <p className="text-white font-bold">Job Security</p>
              <p className="text-white text-xs">
                The demand for financial analysts is expected to remain strong,
                providing job security in an ever-changing job market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
