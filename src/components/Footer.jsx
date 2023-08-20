import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <div className="flex ">
          <div className="w-3/5 p-4">
            <div className="h-full  flex flex-col">
              <h2 className="text-3xl font-bold text-[#e46601]">EXE</h2>
            </div>
          </div>

          <div className="w-1/4 p-4">
            <div className="h-full  flex flex-col">
              <h2 className="font-bold">Product</h2>
            </div>
          </div>

          <div className="w-1/4 p-4">
            <div className="flex flex-col">
              <h2 className="font-bold">About Us</h2>
            </div>
          </div>

          <div className="w-1/4 p-4">
            <div className="h-full flex flex-col">
              <h2 className="font-bold">Company</h2>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-3/5 p-4">
            <div className="h-full  flex flex-col">
              <div className="flex  space-x-8">
                <FaFacebookSquare />
                <FaInstagram />
                <FaTwitterSquare />
                <FaGithubSquare />
                <FaDribbbleSquare />
              </div>
            </div>
          </div>

          <div className="w-1/4 p-4">
            <div className="h-full flex flex-col">
              <div className="space-y-2">
                <p>Home</p>
                <p>About</p>
                <p>Course</p>
              </div>
            </div>
          </div>

          <div className="w-1/4 p-4">
            <div className="h-full flex flex-col ">
              <div className="space-y-2">
                <p>Careers</p>
                <p>Contact Us</p>
              </div>
            </div>
          </div>

          <div className="w-1/4 p-4">
            <div className="h-full flex flex-col ">
              <div className="space-y-2">
                <p>Privacy Policy</p>
                <p>Terms & Condition</p>
                <p>Cookie Preference</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
