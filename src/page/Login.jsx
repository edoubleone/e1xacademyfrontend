<<<<<<< HEAD
import React, { useState } from "react";

import validator from "validator";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import imagePage from "../assets/images/pretty-black-woman-feeling-happy-facing-challenge-celebrating-agenda-concept_1194-339851.jpg";
import { LoginProvider } from "../services/LoginAuthContext";

const Login = () => {
  // const { user, login, isLoading, error } = useContext(LoginProvider);
=======
// Login.js
import React, { useState } from "react";
import validator from "validator";
import { NavLink, useNavigate } from "react-router-dom";
import imagePage from "../assets/images/pretty-black-woman-feeling-happy-facing-challenge-celebrating-agenda-concept_1194-339851.jpg";
import { AuthContext } from "../services/LoginAuthContext";
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";

const Login = () => {
  const navigate = useNavigate();
  const { user, error, login } = useContext(AuthContext);

>>>>>>> 11558e6d411745085ec483755cd700c572f16543
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

<<<<<<< HEAD
  // useEffect(() => {

  // }, [isLoading, error]);

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!validator.isEmail(email)) {
      errors.username = "Invalid email address";
=======
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    if (!validator.isEmail(email)) {
      newErrors.email = "Invalid email address";
>>>>>>> 11558e6d411745085ec483755cd700c572f16543
      isValid = false;
    }

    if (validator.isEmpty(password)) {
<<<<<<< HEAD
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
      console.log("Username:", email);
      console.log("Password:", password);
=======
      newErrors.password = "Password is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Assuming login function is an async function
      await login(email, password); // Wait for the login operation to complete
      // If login is successful and user is set in context, navigate to dashboard
      if (user) {
        navigate("/dashboard"); // Redirect to the dashboard page
      }
>>>>>>> 11558e6d411745085ec483755cd700c572f16543
    }
  };

  return (
<<<<<<< HEAD
    <div className="custom-course-background ">
      <div className="max-w-4xl mx-auto py-12 ">
=======
    <div className="custom-course-background">
      <div className="max-w-4xl mx-auto py-12">
>>>>>>> 11558e6d411745085ec483755cd700c572f16543
        <div className="flex flex-col md:flex-row">
          <div className="lg:w-1/2 w-full">
            <img
              src={imagePage}
              alt="image"
              className="w-full h-full object-cover"
            />
          </div>
<<<<<<< HEAD
          <div className="lg:w-1/2 w-full px-4 py-5  mx-auto bg-white shadow-sm ">
=======
          <div className="lg:w-1/2 w-full px-4 py-5 mx-auto bg-white shadow-sm">
>>>>>>> 11558e6d411745085ec483755cd700c572f16543
            <div className="text-center">
              <h1 className="font-bold text-4xl text-red-700">Login</h1>
            </div>
            <form onSubmit={handleSubmit} className="border-b pb-3">
              <div className="mb-4">
<<<<<<< HEAD
                <label htmlFor="email ">Email</label>
=======
                <label htmlFor="email">Email</label>
>>>>>>> 11558e6d411745085ec483755cd700c572f16543
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                  placeholder="Email"
                  className="w-full border bg-gray-100 border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
                />
<<<<<<< HEAD
                {errors.username && <p className="error">{errors.username}</p>}
=======
                {errors.email && <p className="error">{errors.email}</p>}
>>>>>>> 11558e6d411745085ec483755cd700c572f16543
              </div>
              <div className="mb-4">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                  placeholder="Password"
<<<<<<< HEAD
                  className="w-full bg-slate-100  border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
                />
                {errors.password && <p className="error">{errors.password}</p>}
                <NavLink to="/reset-password" className="text-xs ">
=======
                  className="w-full bg-slate-100 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
                />
                {errors.password && <p className="error">{errors.password}</p>}
                {/* {error && (
                  <p className="text-red-400 text-sm">
                    An error occurred. Please try again later.
                  </p>
                )} */}

                <NavLink to="/reset-password" className="text-xs">
>>>>>>> 11558e6d411745085ec483755cd700c572f16543
                  Forgot password
                </NavLink>
              </div>

              <button
                type="submit"
<<<<<<< HEAD
                className="w-40  bg-custom-button text-white rounded py-2 hover:bg-blue-600"
=======
                className="w-40 bg-custom-button text-white rounded py-2 hover:bg-blue-600"
>>>>>>> 11558e6d411745085ec483755cd700c572f16543
              >
                Login
              </button>
            </form>

            <div className="flex items-center justify-center space-x-4 mt-4">
<<<<<<< HEAD
              <button class="border rounded-full py-2 px-2  hover:bg-[#d8c1ae]">
                <FcGoogle />
              </button>

              <button className="border rounded-full py-2 px-2  hover:bg-[#d8c1ae]">
                <FaFacebook className="text-blue-600" />
              </button>
              <button className="border rounded-full py-2 px-2   hover:bg-[#d8c1ae]">
                <AiFillApple />
              </button>
=======
              <SocialButton icon={<FcGoogle />} />
              <SocialButton icon={<FaFacebook />} className="text-blue-600" />
              <SocialButton icon={<AiFillApple />} />
>>>>>>> 11558e6d411745085ec483755cd700c572f16543
            </div>
            <div>
              <p className="text-center mt-3 text-sm">
                Don't have an account?{" "}
<<<<<<< HEAD
                <NavLink to="/sign-up" className="text-sm ">
=======
                <NavLink to="/sign-up" className="text-sm">
>>>>>>> 11558e6d411745085ec483755cd700c572f16543
                  Sign-up
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
=======
// SocialButton component for social media icons
const SocialButton = ({ icon, className }) => (
  <button
    className={`border rounded-full py-2 px-2 hover:bg-[#d8c1ae] ${className}`}
  >
    {icon}
  </button>
);

>>>>>>> 11558e6d411745085ec483755cd700c572f16543
export default Login;
