import React from "react";

const Description = () => {
  return (
    <div className="w-full custom-description-background h mx-auto  ">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center space-x-10 justify-center py-5 p-4">
          <button className="font-bold border-b-4 border-transparent hover:border-[#e46601] pb-3 focus:outline-none">
            Overview
          </button>
          <button className="font-bold border-b-4 border-transparent hover:border-[#e46601] pb-3 focus:outline-none">
            Course Content
          </button>
          <button className="font-bold border-b-4 border-transparent hover:border-[#e46601] pb-3 focus:outline-none">
            Instructor
          </button>
          <button className="font-bold border-b-4 border-transparent hover:border-[#e46601] pb-3 focus:outline-none">
            Reviews
          </button>
        </div>
      </div>
      <div className="border-t pb-6"></div>
      <div className="max-w-5xl mx-auto space-y-5 mt-6 py-12 p-4">
        <p className="font-bold text-2xl">Description</p>
        <div className="space-y-5">
          <p>
            Becoming a Financial Data Analyst involves acquiring the skills and
            knowledge required to analyze and interpret financial data to make
            informed business decisions. Financial Data Analysts are responsible
            for collecting, cleaning, and organizing financial data, often
            utilizing tools such as Excel, SQL, and data visualization software.
          </p>

          <p>
            {" "}
            They perform quantitative analysis to identify trends, patterns, and
            anomalies in financial data to support strategic planning and
            investment decisions. Strong analytical skills, proficiency in
            financial modeling, and a solid understanding of financial markets
            are essential for success in this role.
          </p>
          <p>
            Financial Data Analysts play a crucial role in helping organizations
            optimize their financial performance and mitigate risks through
            data-driven insights.
          </p>
        </div>
        <p className="border-b border-[#e46601] w-[80px] text-[#e46601] ">
          Show Less
        </p>
      </div>
    </div>
  );
};

export default Description;
