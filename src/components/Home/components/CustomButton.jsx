import React from "react";

function CustomButton({ text }) {
  return (
    <button className="bg-[#e46601] hover:bg-[#e46601] text-white py-4 px-1 rounded-lg w-72  ">
      {text}
    </button>
  );
}

export default CustomButton;
