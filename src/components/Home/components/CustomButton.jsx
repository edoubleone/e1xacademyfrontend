import React from "react";
<<<<<<< HEAD

function CustomButton({ text }) {
  return (
    <button className="bg-custom-button hover:bg-custom-button text-white py-4 px-1 rounded-lg lg:w-72 w-full  ">
      {text}
    </button>
=======
import { NavLink } from "react-router-dom";

function CustomButton({ text, link }) {
  return (
    <NavLink to={link}>
      <button className="bg-custom-button hover:bg-custom-button text-white py-4 px-1 rounded-lg lg:w-72 w-full">
        {text}
      </button>
    </NavLink>
>>>>>>> 11558e6d411745085ec483755cd700c572f16543
  );
}

export default CustomButton;
