import React, { useState, useEffect } from "react";

const EmailVerificationForm = () => {
  const [email, setEmail] = useState("");
  const [verificationStatus, setVerificationStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Here, you can add the logic to send the email verification request to your backend.
    // For simplicity, let's assume a successful response sets verificationStatus to 'sent'.
    // You should modify this part to make an actual API call.
    try {
      // Simulate a backend request (replace with your actual API call)
      await fetch("your-backend-api-url", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      setVerificationStatus("sent");
    } catch (error) {
      // Handle errors here
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <form onSubmit={handleSubmit}>
        <h1 className="text-2xl font-semibold text-center mb-4">
          Verify Your Email
        </h1>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full border rounded p-2 focus:outline-none"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Send Verification Email
        </button>
      </form>
      {verificationStatus === "sent" && (
        <p className="text-green-500 text-center mt-2">
          Verification email sent!
        </p>
      )}
    </div>
  );
};

export default EmailVerificationForm;
