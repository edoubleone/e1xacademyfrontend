import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import reviewImage from "../../assets/images/review.png";
import ratingIcons from "../../assets/icons/ratingsIcon.png";
import { HiArrowSmRight } from "react-icons/hi";

const Reviews = () => {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    setMessage("");
  };

  return (
    <div className="border-t">
      <div className="max-w-6xl mx-auto px-4">
        <div className="lg:w-3/5 py-12">
          <div className="flex flex-col">
            <img src={reviewImage} alt="reviewImage" />
            <div className="py-8">
              <h1 className="font-bold">Write a Review</h1>
              <div className="mt-6 space-y-6">
                <div>
                  <p className="py-3">Review Content</p>
                  <textarea
                    type="text"
                    id="userInput"
                    name="userInput"
                    placeholder="Message"
                    className="w-full h-[250px] outline-none border p-[10px] text-left"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                <div className="flex items-center">
                  <p>Rating</p>
                  <img
                    src={ratingIcons}
                    alt="rating-icon"
                    style={{ width: "100px", height: "20px" }}
                  />
                </div>
                <button
                  className="bg-custom-button flex items-center gap-3 py-3 px-6 font-bold text-white rounded-lg"
                  onClick={sendMessage}
                >
                  SEND MESSAGE
                </button>
              </div>
              <div className="flex  lg:justify-end justify-center lg:mt-2 mt-6">
                <NavLink to="/" className="flex items-center gap-2 ">
                  <p className="underline">next unit</p>
                  <HiArrowSmRight className="ml-auto" />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
