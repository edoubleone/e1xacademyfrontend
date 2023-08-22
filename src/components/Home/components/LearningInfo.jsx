import React from "react";

function LearningInfo({ title }) {
  return (
    <div className="w-64 p-2">
      <div className="h-full bg-[#2d418d]  border border-[#297bf6]  flex flex-col justify-center items-center py-4 rounded-3xl text-white ">
        <p>{title}</p>
      </div>
    </div>
  );
}

export default LearningInfo;
