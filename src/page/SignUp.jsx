import React, { useState, useEffect } from "react";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import imagePage from "../assets/images/pretty-black-woman-feeling-happy-facing-challenge-celebrating-agenda-concept_1194-339851.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import validator from "validator";

const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState({});
  const [csrfToken, setCsrfToken] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_DOMAIN_URL}/api/csrf-token`)
      .then((response) => {
        setCsrfToken(response.data?.csrf_token);
      })
      .catch((err) => console.log(err));
  }, []);

  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    if (validator.isEmpty(firstName)) {
      newErrors.firstName = "First name is required";
      isValid = false;
    }

    if (validator.isEmpty(lastName)) {
      newErrors.lastName = "Last name is required";
      isValid = false;
    }

    if (!validator.isEmail(email)) {
      newErrors.email = "Invalid email address";
      isValid = false;
    }

    if (validator.isEmpty(password)) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    if (!agreed) {
      newErrors.agreed = "You must agree to the terms";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    const formData = {
      firstname: firstName,
      lastname: lastName,
      email,
      telephone,
      password,
    };

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_DOMAIN_URL}/api/auth/register`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": csrfToken,
          },
        }
      );

      if (response.data?.status === true) {
        localStorage.setItem("bearer_token", response.data.token);
        toast("Account created successfully", { type: "success" });
        navigate("/dashboard");
      } else {
        toast("Registration failed", { type: "warning" });
      }
    } catch (error) {
      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors);
      }
      toast("Something went wrong", { type: "error" });
    }
  };

  return (
    <div className="custom-course-background">
      <div className="max-w-5xl px-4 py-12 mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="w-full lg:w-1/2">
            <img
              src={imagePage}
              alt="signImage"
              className="object-cover w-full h-full"
            />
          </div>

          <ToastContainer />

          <div className="w-full px-4 py-5 mx-auto bg-white shadow-sm lg:w-1/2">
            <div className="text-center">
              <h1 className="font-bold text-red-700 lg:text-4xl">
                Create A New Account
              </h1>
            </div>

            <form onSubmit={handleSubmit} className="pb-3 mt-6 border-b">
              <div className="flex gap-4 mb-4">
                <div className="w-1/2">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full px-3 py-2 bg-gray-100 border rounded"
                  />
                  {errors.firstName && (
                    <p className="text-sm text-red-500">{errors.firstName}</p>
                  )}
                </div>

                <div className="w-1/2">
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full px-3 py-2 bg-gray-100 border rounded"
                  />
                  {errors.lastName && (
                    <p className="text-sm text-red-500">{errors.lastName}</p>
                  )}
                </div>
              </div>

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 mb-4 bg-gray-100 border rounded"
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email}</p>
              )}

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 mb-4 bg-gray-100 border rounded"
              />
              {errors.password && (
                <p className="text-sm text-red-500">{errors.password}</p>
              )}

              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={() => setAgreed(!agreed)}
                  className="w-4 h-4"
                />
                <label className="ml-2 text-sm">
                  I agree to the terms and conditions
                </label>
              </div>

              {errors.agreed && (
                <p className="text-sm text-red-500">{errors.agreed}</p>
              )}

              <button
                type="submit"
                className="w-40 py-2 mt-4 text-white rounded bg-custom-button hover:bg-blue-600"
              >
                Sign Up
              </button>
            </form>

            <div className="flex justify-center mt-4 space-x-4">
              <button className="px-2 py-2 border rounded-full hover:bg-[#d8c1ae]">
                <FcGoogle />
              </button>
              <button className="px-2 py-2 border rounded-full hover:bg-[#d8c1ae]">
                <FaFacebook />
              </button>
              <button className="px-2 py-2 border rounded-full hover:bg-[#d8c1ae]">
                <AiFillApple />
              </button>
            </div>

            <p className="mt-3 text-sm text-center">
              Already have an account?{" "}
              <NavLink to="/sign-in">Sign-in</NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;