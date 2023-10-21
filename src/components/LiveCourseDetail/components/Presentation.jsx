import React from "react";
import { useState } from "react";

const PresentationItem = ({ icon, title, duration, action }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const titleStyle = {
    color: isClicked ? "gray" : "blue",
    cursor: "pointer",
  };

  return (
    <div className="mb-5">
      <div
        className="flex items-center gap-3 text-blue-600"
        onClick={handleClick}
      >
        {icon}
        <div>
          <p style={titleStyle}>{title}</p>
        </div>
      </div>
      <div className="ml-8 mt-3">
        <div className="flex gap-3 text-blue-600">
          <p className="underline">{duration}</p>
          <p className="underline">{action}</p>
        </div>
      </div>
    </div>
  );
};

export default PresentationItem;
