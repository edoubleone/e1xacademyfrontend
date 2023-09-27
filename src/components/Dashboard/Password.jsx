import React, { useState } from "react";

const Password = () => {
  const [password, setPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [retryPassword, setRetryPassword] = useState("");

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleCurrentPassword = (e) => {
    setCurrentPassword(e.target.value);
  };

  const handleRetryPassword = (e) => {
    setRetryPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Username:", password);
    console.log("confirm", currentPassword);
    console.log("retry", retryPassword);
  };
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4 "> Change Password </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="email"
            value={password}
            placeholder="Email"
            onChange={handlePassword}
            required
            className="w-full border bg-gray-100 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirm">Current Password</label>
          <input
            type="password"
            name="confirm"
            value={currentPassword}
            placeholder="Email"
            onChange={handleCurrentPassword}
            required
            className="w-full border bg-gray-100 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="retry">Retry Password</label>
          <input
            type="password"
            name="retry"
            value={retryPassword}
            placeholder="Email"
            onChange={handleRetryPassword}
            required
            className="w-full border bg-gray-100 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-40 bg-custom-button font-bold text-white rounded py-2 hover:bg-blue-600 mt-4"
        >
          update
        </button>
      </form>
    </div>
  );
};

export default Password;
