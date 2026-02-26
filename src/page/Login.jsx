import React, { useState, useContext } from "react";
import validator from "validator";
import "react-toastify/dist/ReactToastify.css";
import { NavLink, useNavigate } from "react-router-dom";
import imagePage from "../assets/images/pretty-black-woman-feeling-happy-facing-challenge-celebrating-agenda-concept_1194-339851.jpg";
import { AuthContext } from "../services/LoginAuthContext";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const { user, login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    if (!validator.isEmail(email)) {
      newErrors.email = "Invalid email address";
      isValid = false;
    }

    if (validator.isEmpty(password)) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        await login(email, password);
        toast("Login successful", { type: "success" });
        navigate("/dashboard");
      } catch (err) {
        toast("Login failed.", { type: "error" });
      }
    }
  };

  return (
    <div className="custom-course-background">
      <div className="max-w-4xl py-12 mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="w-full lg:w-1/2">
            <img
              src={imagePage}
              alt="login"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="w-full px-4 py-5 mx-auto bg-white shadow-sm lg:w-1/2">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-red-700">Login</h1>
            </div>

            <form onSubmit={handleSubmit} className="pb-3 border-b">
              <div className="mb-4">
                <label>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full px-3 py-2 bg-gray-100 border rounded focus:outline-none focus:border-blue-400"
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div className="mb-4">
                <label>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full px-3 py-2 bg-gray-100 border rounded focus:outline-none focus:border-blue-400"
                />
                {errors.password && (
                  <p className="text-sm text-red-500">{errors.password}</p>
                )}

                <NavLink to="/reset-password" className="text-xs">
                  Forgot password
                </NavLink>
              </div>

              <button
                type="submit"
                className="w-40 py-2 text-white rounded bg-custom-button hover:bg-blue-600"
              >
                Login
              </button>
            </form>

            <div className="flex items-center justify-center mt-4 space-x-4">
              <SocialButton icon={<FcGoogle />} />
              <SocialButton icon={<FaFacebook />} />
              <SocialButton icon={<AiFillApple />} />
            </div>

            <p className="mt-3 text-sm text-center">
              Don't have an account?{" "}
              <NavLink to="/sign-up">Sign-up</NavLink>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

const SocialButton = ({ icon }) => (
  <button className="px-2 py-2 border rounded-full hover:bg-[#d8c1ae]">
    {icon}
  </button>
);

export default Login;