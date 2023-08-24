import React, { useState } from "react";

const CookieConsent = () => {
  const [consent, setConsent] = useState(
    localStorage.getItem("cookieConsent") === "true"
  );

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setConsent(true);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "false");
    setConsent(false);
  };

  if (consent) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 p-4 text-white">
      <p className="text-center">
        We use cookies to improve your experience. Accept?
      </p>
      <div className="flex justify-center mt-2">
        <button
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 mr-4 rounded"
          onClick={handleAccept}
        >
          Accept
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          onClick={handleDecline}
        >
          Decline
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
