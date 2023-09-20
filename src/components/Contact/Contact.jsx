import React from "react";
import contact from "../../assets/images/contact-us.jpg";
import BackgroundImage from "../LandingPage";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { MdMarkEmailRead } from "react-icons/md";
import { LuNavigation } from "react-icons/lu";
const Contact = () => {
  return (
    <div>
      <BackgroundImage imageUrl={contact} text="Contact Us" />;
      <div className="max-w-5xl  mx-auto shadow-md py-12">
        <div className="lg:flex ">
          <div className="lg:w-1/2 w-full  space-y-8 py-12 px-6">
            <div className="flex items-center  gap-4">
              <FaMapMarkerAlt className="w-[40px] h-[40px] text-[#e46601]" />
              <div>
                <h2 className="font-bold">Location</h2>
                <p>22 Baker Street, London, United Kingdom, W1U 3BW</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <BsFillTelephonePlusFill className="w-[40px] h-[40px] text-[#e46601]" />
              <div>
                <h2 className="font-bold">Make a Call</h2>
                <p>+44-20-7328-4499</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MdMarkEmailRead className="w-[40px] h-[40px] text-[#e46601]" />
              <div>
                <h2 className="font-bold">Send a Mail</h2>
                <p>info@yourdomain.com</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full py-6 ">
            <div className="px-4 space-y-6">
              <h2>Need Help</h2>
              <h1 className="font-bold text-3xl">Keep in Touch</h1>
              <p className="border-b w-full pb-2 ">Name</p>
              <div className="flex gap-3">
                <p className="border-b w-full pb-2 ">Phone</p>
                <p className="border-b w-full pb-2 ">Email</p>
              </div>

              <input
                type="text"
                id="userInput"
                name="userInput"
                placeholder="Type here"
                className="w-full h-[80px] border-0 outline-none border-b pb-4 "
              />
              <button className="bg-custom-button  flex items-center gap-3 py-3 px-6 font-bold text-white rounded-md">
                SEND MESSAGE
                <LuNavigation />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
