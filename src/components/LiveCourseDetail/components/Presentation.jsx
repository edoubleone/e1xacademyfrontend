import React from "react";

const PresentationItem = ({ icon, title, duration, action }) => {
  return (
    <div className="mb-5">
      <div className="flex items-center gap-3 text-blue-600">
        {icon}
        <div>
          <p>{title}</p>
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
