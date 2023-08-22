import React from "react";

import background from "../../assets/images/partners.png";

function Operation() {
  const backgroundImageStyle = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center", // Center the background image
  };

  return (
    <div
      className="flex justify-center items-center h-screen w-screen" // Set width as well
      style={{ ...backgroundImageStyle }}
    ></div>
  );
}

export default Operation;
