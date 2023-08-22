import React from "react";

function InfoBlock({ imageSrc, title, description }) {
  return (
    <div className="p-4 text-center flex items-center justify-center space-x-6">
      <img src={imageSrc} alt={title} />
      <div className="flex flex-col">
        <h1 className="font-bold text-lg sm:text-xl md:text-2xl text-white">
          {title}
        </h1>
        <h2 className="text-md sm:text-xl md:text-xl font-semibold text-white">
          {description}
        </h2>
      </div>
    </div>
  );
}

export default InfoBlock;
