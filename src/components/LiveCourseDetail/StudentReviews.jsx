import React from "react";
import StudentImage from "../../assets/images/studentReviews.png";
const StudentReviews = () => {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <div className="lg:w-2/5 w-full">
        <div className="background-card  mb-4 px-4 py-10 space-y-8">
          <p className="text-xs">
            The courses are well-structured, and the instructors are
            knowledgeable and supportive. I've gained practical skills that have
            already made a positive impact on my career. I highly recommend
            Academy to anyone looking to advance their education
          </p>
          <div className="flex items-center justify-between border-b pb-1  ">
            <div>
              <p className="font-bold">Jessica Akoh</p>
              <p className="text-xs">21 days ago</p>
            </div>
            <div>
              <img src={StudentImage} alt="student Reviews" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentReviews;
