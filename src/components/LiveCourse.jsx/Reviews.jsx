import React from "react";
import StudentReviews from "../../assets/images/studentReviews.png";

const Reviews = () => {
  return (
    <div className="w-full bg-custom-blue ">
      <div className=" max-w-4xl mx-auto flex flex-col md:flex-row ">
        <div className="md:w-1/2 p-4 ">
          <div className="mb-11 text-4xl font-bold text-white">
            Student Reviews
          </div>
          <div className="background-card  mb-4 px-4 py-10 space-y-8 rounded-xl">
            <p className="text-xs">
              The courses are well-structured, and the instructors are
              knowledgeable and supportive. I've gained practical skills that
              have already made a positive impact on my career. I highly
              recommend Academy to anyone looking to advance their education
            </p>
            <div className="flex items-center justify-between border-b pb-1  ">
              <div>
                <p className="font-bold">Jessica Akoh</p>
                <p className="text-xs">21 days ago</p>
              </div>
              <div>
                <img src={StudentReviews} alt="student Reviews" />
              </div>
            </div>
          </div>
          <div className="background-card  mb-4 px-4 py-10 space-y-8 rounded-xl">
            <p className="text-xs">
              I've been a student at Ex1 Academy for the past year, and I've
              found the variety of courses to be impressive. The instructors are
              engaging, and the online platform is user-friendly. The only
              reason I didn't give it five stars is that I wish there were more
              opportunities for hands-on projects.
            </p>
            <div className="flex items-center justify-between border-b pb-1 ">
              <div>
                <p className="font-bold">Jane Smith</p>
                <p className="text-xs">21 days ago</p>
              </div>
              <div>
                <img src={StudentReviews} alt="student Reviews" />
              </div>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="md:w-1/2 p-4">
          <div className="mb-10 text-left text-white">
            see What student all over the world are <br></br> about Ex1 Academy
          </div>
          <div className="background-card  mb-4 px-4 py-10 space-y-8 rounded-xl">
            <p className="text-xs">
              I'm an international student, and I appreciate how Academy caters
              to a global audience. The flexibility of online learning has
              allowed me to pursue my studies while balancing a part-time job.
              The diverse student community and resources have been invaluable
              in my academic journey.
            </p>
            <div className="flex items-center justify-between border-b pb-1  ">
              <div>
                <p className="font-bold">Samuel Ramirez</p>
                <p className="text-xs">21 days ago</p>
              </div>
              <div>
                <img src={StudentReviews} alt="student Reviews" />
              </div>
            </div>
          </div>
          <div className="background-card  mb-4 px-4 py-10 space-y-8 rounded-xl">
            <p className="text-xs">
              Academy is a game-changer! The content is up-to-date, and the
              instructors genuinely care about your success. I've seen a
              significant improvement in my skills since I started here. The
              support team is responsive and helpful, making my learning
              experience top-notch.
            </p>
            <div className="flex items-center justify-between border-b pb-1  ">
              <div>
                <p className="font-bold">Emily Chen</p>
                <p className="text-xs">21 days ago</p>
              </div>
              <div>
                <img src={StudentReviews} alt="student Reviews" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
