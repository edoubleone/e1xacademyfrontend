import React from "react";
import StudentReviews from "../../assets/images/studentReviews.png";

const Reviews = () => {
  return (
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row mt-14 ">
      {/* Column 1 */}
      <div className="md:w-1/2 p-4">
        <div className="mb-11 text-4xl font-bold">Student Reviews</div>
        <div className="background-card  mb-4 px-4 py-10 space-y-8">
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            voluptate ipsam tempora consectetur vitae non quia! Nulla cumque
            nostrum exercitationem illo, quod consequuntur alias ullam deleniti
            quisquam! Dolorum, hic numquam.
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
        <div className="background-card  mb-4 px-4 py-10 space-y-8">
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            voluptate ipsam tempora consectetur vitae non quia! Nulla cumque
            nostrum exercitationem illo, quod consequuntur alias ullam deleniti
            quisquam! Dolorum, hic numquam.
          </p>
          <div className="flex items-center justify-between border-b pb-1 ">
            <div>
              <p className="font-bold">Jessica Akoh</p>
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
        <div className="mb-10 text-left">
          see What student all over the world are <br></br> about Ex1 Academy
        </div>
        <div className="background-card  mb-4 px-4 py-10 space-y-8">
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            voluptate ipsam tempora consectetur vitae non quia! Nulla cumque
            nostrum exercitationem illo, quod consequuntur alias ullam deleniti
            quisquam! Dolorum, hic numquam.
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
        <div className="background-card  mb-4 px-4 py-10 space-y-8">
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            voluptate ipsam tempora consectetur vitae non quia! Nulla cumque
            nostrum exercitationem illo, quod consequuntur alias ullam deleniti
            quisquam! Dolorum, hic numquam.
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
      </div>
    </div>
  );
};

export default Reviews;
