import React, { useState } from "react";
import { motion } from "framer-motion";
import CardIcon from "../../assets/images/ion_card.png";
import Cardtext from "../../assets/images/card.png";
import paypalIcon from "../../assets/images/PayPal svg.png";
import stripeIcon from "../../assets/images/Stripe svg.png";

const Card = () => {
  const [digit1, setDigit1] = useState("");
  const [digit2, setDigit2] = useState("");
  const [digit3, setDigit3] = useState("");
  const [digit4, setDigit4] = useState("");
  const [isPaymentConfirmed, setIsPaymentConfirmed] = useState(false);

  const [discountCode, setDiscountCode] = useState("");
  const [isValid, setIsValid] = useState(true);

  const imgVariants = {
    initial: {
      opacity: 0,
      y: 100, // Move the image 100px down initially
    },
    animate: {
      opacity: 1,
      y: 0, // Move the image back to its original position
      transition: {
        duration: 1, // Adjust the duration as needed
      },
    },
  };

  const handleConfirmPayment = () => {
    // Check if the 4 digits match your expected value (e.g., '1234' in this example)
    const confirmationCode = digit1 + digit2 + digit3 + digit4;
    if (confirmationCode === "1234") {
      setIsPaymentConfirmed(true);
    } else {
      setIsPaymentConfirmed(false);
    }
  };

  const discountSubmit = (e) => {
    e.preventDefault();

    if (discountCode === "VALIDCODE") {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };
  return (
    <div className="custom-grow-background py-24">
      <motion.div
        className="max-w-6xl mx-auto "
        variants={imgVariants} // Apply animation variants
        initial="initial"
        animate="animate"
      >
        <div className="lg:flex gap-5 ">
          <div className="lg:w-1/2 w-full bg-white px-6 py-4 lg:mt-6 md:mt-2 ">
            <div className="mt-9">
              <h1 className="font-bold border-b pb-2 text-2xl">Payment</h1>
            </div>

            <form className="mb-4" onSubmit={handleConfirmPayment}>
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div class="flex justify-center items-center mt-12 ">
                  <div>
                    <p class="text-center mb-4">
                      Enter Your 4-digit card PIN to confirm this payment
                    </p>
                    <div class="flex space-x-2 justify-center">
                      <input
                        type="text"
                        className="w-1/6 h-12 border rounded p-2 text-center text-2xl font-semibold"
                        maxlength="1"
                        pattern="\d{1}"
                        id="digit1"
                        value={digit1}
                        onChange={(e) => setDigit1(e.target.value)}
                      />
                      <input
                        type="text"
                        className="w-1/6 h-12 border rounded p-2 text-center text-2xl font-semibold"
                        maxlength="1"
                        pattern="\d{1}"
                        id="digit2"
                        value={digit2}
                        onChange={(e) => setDigit2(e.target.value)}
                      />
                      <input
                        type="text"
                        className="w-1/6 h-12 border rounded p-2 text-center text-2xl font-semibold"
                        maxlength="1"
                        pattern="\d{1}"
                        id="digit3"
                        value={digit3}
                        onChange={(e) => setDigit3(e.target.value)}
                      />
                      <input
                        type="text"
                        className="w-1/6 h-12 border rounded p-2 text-center text-2xl font-semibold"
                        maxlength="1"
                        pattern="\d{1}"
                        id="digit4"
                        value={digit4}
                        onChange={(e) => setDigit4(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center mt-16">
                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white rounded py-2 hover:bg-blue-600 mt-4 font-bold"
                >
                  Confirm Payment
                </button>
                {isPaymentConfirmed && <p>Payment confirmed!</p>}
              </div>
            </form>
            <div className="space-y-6 pb-4">
              <p className="text-sm">
                Your personal data would be use to process te order, support
                your experience throughout the website, and for other purpose in
                our privacy policy
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 w-full bg-white  py-4 mt-6 ">
            <div className="px-6">
              <div>
                <p className="font-bold text-3xl">Financial Data Analyst</p>
                <p>Online Beginner Course</p>
              </div>
              <div className="flex justify-between mt-6">
                <p>Billed Monthly</p>
                <p>$200</p>
              </div>

              <form className="mb-4 mt-10" onSubmit={discountSubmit}>
                <label htmlFor="enter">Have a discount code?</label>
                <input
                  type="text"
                  name="enter"
                  placeholder="Enter a discount code"
                  required
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                  className={`w-full border bg-gray-100 rounded px-3 py-2 focus:outline-none ${
                    isValid ? "border-gray-300" : "border-red-500"
                  } focus:border-blue-400`}
                />

                <button
                  type="submit"
                  className="w-1/3 bg-blue-900 text-white rounded py-2 hover:bg-blue-600 mt-4 font-bold"
                >
                  Apply Code
                </button>
              </form>
            </div>

            <div className="w-full flex justify-between px-6 py-6 border-b-2 border-t-2 mt-16 font-bold">
              <h1>Total </h1>
              <h1>200USD</h1>
            </div>
          </div>
        </div>
      </motion.div>
      ;
    </div>
  );
};

export default Card;
