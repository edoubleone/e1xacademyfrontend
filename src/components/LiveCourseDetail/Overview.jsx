import React from "react";

const Overview = () => {
  return (
    <div className="border-t">
      <div className="max-w-6xl mx-auto py-12 px-4">
        <div className="lg:w-3/5">
          <div className="space-y-6">
            <h1 className="font-bold">OverView</h1>
            <p>
              Becoming a Financial Data Analyst involves acquiring the skills
              and knowledge required to analyze and interpret financial data to
              make informed business decisions. Financial Data Analysts are
              responsible for collecting, cleaning, and organizing financial
              data, often utilizing tools such as Excel, SQL, and data
              visualization software. Financial Data Analysts play a crucial
              role in helping organizations optimize their financial performance
              and mitigate risks through data-driven insights.
            </p>

            <p>
              {" "}
              They perform quantitative analysis to identify trends, patterns,
              and anomalies in financial data to support strategic planning and
              investment decisions. Strong analytical skills, proficiency in
              financial modeling, and a solid understanding of financial markets
              are essential for success in this role.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
