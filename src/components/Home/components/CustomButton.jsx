import React from "react";
import { NavLink } from "react-router-dom";

function CustomButton({ text, link }) {
  return (
    <NavLink to={link}>
      <button className="bg-custom-button hover:bg-custom-button text-white py-4 px-1 rounded-lg lg:w-72 w-full">
        {text}
      </button>
    </NavLink>
  );
}

export default CustomButton;
