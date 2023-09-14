import React, { useState } from "react";
import validator from "validator";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!validator.isEmail(email)) {
      errors.username = "Invalid email address";
      isValid = false;
    }

    if (validator.isEmpty(password)) {
      errors.password = "Password is required";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // You can perform authentication here, e.g., make an API call to validate credentials.
      // For this example, we'll simply log the username and password.
      console.log("Username:", email);
      console.log("Password:", password);
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-6 ">
      <div className="flex flex-col md:flex-row">
        <div className="lg:w-1/2 w-full px-4 py-5  mx-auto">
          <div className="text-center">
            <h1 className="font-bold text-4xl text-red-600">Login</h1>
          </div>
          <form onSubmit={handleSubmit} className="border-b pb-3">
            <div className="mb-4">
              <label htmlFor="email " className="text-red-600">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
              />
              {errors.username && <p className="error">{errors.username}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="text-red-600">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
              />
              {errors.password && <p className="error">{errors.password}</p>}
              <NavLink to="/reset-password" className="text-xs ">
                Forgot password
              </NavLink>
            </div>

            <button
              type="submit"
              className="w-40  bg-custom-button text-white rounded py-2 hover:bg-blue-600"
            >
              Login
            </button>
          </form>

          <div className="flex items-center justify-center space-x-4 mt-4">
            <button class="border rounded-full py-2 px-2  hover:bg-[#d8c1ae]">
              <FcGoogle />
            </button>

            <button className="border rounded-full py-2 px-2  hover:bg-[#d8c1ae]">
              <FaFacebook />
            </button>
            <button className="border rounded-full py-2 px-2   hover:bg-[#d8c1ae]">
              <AiFillApple />
            </button>
          </div>
          <div>
            <p className="text-center mt-3 text-sm">
              Don't have an account?{" "}
              <NavLink to="/sign-up" className="text-sm">
                Sign-up
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
