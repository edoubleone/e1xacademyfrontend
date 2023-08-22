import React from "react";

function CustomButton({ text }) {
  return (
    <button className="bg-[#e46601] hover:bg-[#e46601] text-white   py-3 px-8 rounded-lg w-60">
      {text}
    </button>
  );
}

export default CustomButton;
