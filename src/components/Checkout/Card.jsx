import React from "react";
import CardIcon from "../../assets/images/ion_card.png";
import Cardtext from "../../assets/images/card.png";
import paypalIcon from "../../assets/images/PayPal svg.png";
import stripeIcon from "../../assets/images/Stripe svg.png";

const Card = () => {
  return (
    <div className="custom-grow-background ">
      <div className="max-w-6xl mx-auto py-12">
        <p>Already have an account? sign-in </p>
        <div className="flex gap-5 ">
          <div className="w-1/2 bg-white px-6 py-4 mt-6 ">
            <div className="  mb-8 ">
              <div className="flex gap-3 hover:bg-custom-grow-background ">
                <div className="flex items-center gap-2 py-2   border hover:border-blue-400 hover:bg-blue-100 rounded-lg w-1/5  justify-center cursor-pointer">
                  <img
                    src={CardIcon}
                    alt="cardi-image"
                    className="object-full"
                  />
                  <img src={Cardtext} alt="card-text" className="object-full" />
                </div>
                <div className=" py-2 border w-1/5 hover:border-blue-400 hover:bg-custom-grow-background hover:bg-blue-100  rounded-lg  cursor-pointer ">
                  <img
                    src={paypalIcon}
                    alt="cardi-image"
                    className="object-full"
                  />
                </div>
                <div className="flex border w-1/5 hover:border-blue-400 rounded-lg cursor-pointer hover:bg-blue-100 justify-center   ">
                  <img
                    src={stripeIcon}
                    alt="cardi-image"
                    className="object-full"
                  />
                </div>
              </div>
            </div>

            <form className="mb-4">
              <div className="mb-4 ">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full border bg-gray-100 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="lg:w-1/2">
                  <label htmlFor="LastName ">Last Name</label>
                  <input
                    type="LastName"
                    name="LastName"
                    placeholder="Last Name"
                    required
                    className="w-full border bg-gray-100 border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
                  />
                </div>
                <div className="lg:w-1/2 ">
                  <label htmlFor="FirstName">First Name</label>
                  <input
                    type="FirstName"
                    name="FirstName"
                    placeholder="First Name"
                    required
                    className="w-full border bg-gray-100 rounded px-3 py-2   focus:outline-none focus:border-blue-400"
                  />
                </div>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="agree"
                  class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                />
                <label for="agree" class="ml-2 block text-sm leading-5  ">
                  I agree to the terms and conditions
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-900 text-white rounded py-2 hover:bg-blue-600 mt-4"
              >
                Login
              </button>
            </form>
            <div className="space-y-6 pb-4">
              <p className="text-sm">
                Your personal data would be use to process te order, support
                your experience throughout the website, and for other purpose in
                our privacy policy
              </p>
              <p className="text-sm">
                By confirming, your agree to Ex1 Terms and Use and Privacy
                Policy
              </p>
            </div>
          </div>
          <div className="w-1/2 bg-white  py-4 mt-6 ">
            <div className="px-6">
              <div>
                <p className="font-bold text-3xl">Financial Data Analyst</p>
                <p>Online Beginner Course</p>
              </div>
              <div className="flex justify-between mt-6">
                <p>Billed Monthly</p>
                <p>$200</p>
              </div>

              <form className="mb-4 mt-10">
                <label htmlFor="FirstName">Have a discount code?</label>
                <input
                  type="FirstName"
                  name="FirstName"
                  placeholder="First Name"
                  required
                  className="w-full border bg-gray-100 rounded px-3 py-2   focus:outline-none focus:border-blue-400"
                />

                <button
                  type="submit"
                  className="w-1/3 bg-blue-900 text-white rounded py-2 hover:bg-blue-600 mt-4"
                >
                  Login
                </button>
              </form>
            </div>

            <div className="w-full flex justify-between px-6 py-6 border-b-2 border-t-2 mt-16 font-bold">
              <h1>Total </h1>
              <h1>200USD</h1>
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default Card;
