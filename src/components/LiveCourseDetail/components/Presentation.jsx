import React from "react";
import { useState } from "react";

const PresentationItem = ({ icon, title, duration, action }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const titleStyle = {
<<<<<<< HEAD
    color: isClicked ? "gray" : "blue", // Set the color based on the click state
    cursor: "pointer", // Add a pointer cursor to indicate it's clickable
=======
    color: isClicked ? "gray" : "blue",
    cursor: "pointer",
>>>>>>> 11558e6d411745085ec483755cd700c572f16543
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
