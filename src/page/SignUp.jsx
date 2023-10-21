import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import imagePage from "../assets/images/pretty-black-woman-feeling-happy-facing-challenge-celebrating-agenda-concept_1194-339851.jpg";

import validator from "validator";
import { AuthProvider } from "../services/AuthContext";

const SignUp = () => {
  // const { user, setUser, apiData, isLoading, error } = useContext(AuthProvider);
  const navigate = useNavigate();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [agreed, setAgreed] = useState(false); // State for checkbox
  const [errors, setErrors] = useState({});

  // useEffect(() => {
  //   if (!isLoading && apiData) {
  //     console.log("API Data:", apiData);
  //   }
  // }, [apiData, isLoading]);

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (validator.isEmpty(firstName)) {
      errors.fullName = "First name is required";
      isValid = false;
    }
    if (validator.isEmpty(lastName)) {
      errors.fullName = "Last name is required";
      isValid = false;
    }

    if (!validator.isEmail(email)) {
      errors.email = "Invalid email address";
      isValid = false;
    }

    if (validator.isEmpty(password)) {
      errors.password = "Password is required";
      isValid = false;
    }

    if (!agreed) {
      errors.agreed = "You must agree to the terms and conditions";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleCheckboxChange = () => {
    setAgreed(!agreed); // Toggle checkbox state
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="custom-course-background">
      <div className="max-w-5xl mx-auto py-12 px-4">
        <div className="flex flex-col md:flex-row ">
          <div className="lg:w-1/2 w-full">
            <img
              src={imagePage}
              alt="signImage"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="lg:w-1/2 w-full px-4 py-5 mx-auto bg-white shadow-sm">
            <div className="text-center">
              <h1 className="font-bold lg:text-4xl text-red-700 ">
                Create A New Account
              </h1>
            </div>
            <form onSubmit={handleSubmit} className="border-b pb-3 mt-6">
              <div className="mb-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="lg:w-1/2">
                    <label htmlFor="FirstName">First Name</label>
                    <input
                      type="text"
                      name="FirstName"
                      value={firstName}
                      onChange={handleFirstNameChange}
                      placeholder="First Name"
                      required
                      className="w-full border bg-gray-100 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
                    />
                    {errors.fullName && (
                      <p className="error">{errors.fullName}</p>
                    )}
                  </div>
                  <div className="lg:w-1/2">
                    <label htmlFor="LastName">Last Name</label>
                    <input
                      type="LastName"
                      name="LastName"
                      value={lastName}
                      onChange={handleLastNameChange}
                      placeholder="Last Name"
                      required
                      className="w-full border bg-gray-100 border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
                    />
                    {errors.fullName && (
                      <p className="error">{errors.fullName}</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Email"
                  onChange={handleEmailChange}
                  required
                  className="w-full border bg-gray-100 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
                />
                {errors.email && <p className="error">{errors.email}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                  className="w-full border bg-gray-100 border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
                />
                {errors.password && <p className="error">{errors.password}</p>}
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="agree"
                  className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  checked={agreed}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="agree" className="ml-2 block text-sm leading-5">
                  I agree to the terms and conditions
                </label>
              </div>

              {errors.agreed && (
                <p className="error text-sm mt-2">{errors.agreed}</p>
              )}

              <button
                type="submit"
                className="w-40 bg-custom-button text-white rounded py-2 hover:bg-blue-600 mt-4"
              >
                Sign Up
              </button>
            </form>

            <div className="flex items-center justify-center space-x-4 mt-4">
              <button className="border rounded-full py-2 px-2 hover:bg-[#d8c1ae]">
                <FcGoogle />
              </button>

              <button className="border rounded-full py-2 px-2 hover:bg-[#d8c1ae]">
                <FaFacebook className="text-blue-700" />
              </button>
              <button className="border rounded-full py-2 px-2 hover:bg-[#d8c1ae]">
                <AiFillApple />
              </button>
            </div>
            <div>
              <p className="text-center mt-3 text-sm">
                Already have an account?{" "}
                <NavLink to="/sign-in" className="text-sm">
                  Sign-in
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
