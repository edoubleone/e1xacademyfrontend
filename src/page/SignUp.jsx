import React, { useState, useEffect } from "react";
import { useContext } from "react";
import axios from 'axios';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import imagePage from "../assets/images/pretty-black-woman-feeling-happy-facing-challenge-celebrating-agenda-concept_1194-339851.jpg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import validator from "validator";
import { AuthProvider } from "../services/AuthContext";

const SignUp = () => {
  // const { user, setUser, apiData, isLoading, error } = useContext(AuthProvider);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [agreed, setAgreed] = useState(false); // State for checkbox
  const [errors, setErrors] = useState({});
  const [csrfToken, setCsrfToken] = useState('');
  // const [accessToken, setAccessToken] = useState('');
  useEffect(() => {
    //console.log('Hello', process.env)
    let headers = {
      'Content-Type': 'application/json',
      'X-CSRF-Token': csrfToken,
      'Authorization': localStorage.getItem('bearer_token'), // Include the CSRF token in the request headers
    };
    // Fetch the CSRF token from the server
    axios.get(`${process.env.REACT_APP_DOMAIN_URL}/api/csrf-token`, headers).then(function (response) {
      setCsrfToken(response);
  });
  }, []);

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

    if (!validator.isEmpty(telephone)) {
      errors.telephone = "Invalid telephone number";
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

  const checkLoginCheck = () => {
    let headers = {
      'Content-Type': 'application/json',
      'X-CSRF-Token': csrfToken,
      'Authorization': localStorage.getItem('bearer_token'), // Include the CSRF token in the request headers
    };
    axios.post(`${process.env.REACT_APP_DOMAIN_URL}/api/user`, headers).then(function (response) {
      if(response.status === true){
        let data = response;
       console.log(data);
      }else{
         console.log('errors');
      }
  })
}


  const handleSubmit = (event) => {
    event.preventDefault();
    validateForm();
    const formData = new FormData();
    formData.set('firstname', firstName);
    formData.set('lastname', lastName);
    formData.set('email', email);
    formData.set('telephone', telephone);
    formData.set('password', password);


  let headers = {
    'Content-Type': 'application/json',
    'X-CSRF-Token': csrfToken  // Include the CSRF token in the request headers
  };

    axios.post(`${process.env.REACT_APP_DOMAIN_URL}/api/auth/register`, formData, headers).then(function (response) {

    console.log(response);
      if(response.data.status === true) {
          localStorage.setItem('bearer_token', response.token);
          toast('Account created successfully', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            type: "success"
            });
          // alert("Register success");
          navigate('/dashboard');
      }else{
        let data = response.data.errors;
       // console.log(data);
        let error = '';
        for (const key in data) {
          error += `${key}: ${data[key]}`;
      }
        toast(error, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          type: "warning"
          });
      }
  }).catch(error => {
      console.log(error);
      if(error.response) {
          if (error.response.data.errors) {
              setErrors(error.response.data.errors);
          }
      }
  });
    
       
  };

  return (
    
    <div className="custom-course-background">
      <div className="max-w-5xl px-4 py-12 mx-auto">
        <div className="flex flex-col md:flex-row ">
          <div className="w-full lg:w-1/2">
            <img
              src={imagePage}
              alt="signImage"
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>
          <ToastContainer />
          <div className="w-full px-4 py-5 mx-auto bg-white shadow-sm lg:w-1/2">
            <div className="text-center">
              <h1 className="font-bold text-red-700 lg:text-4xl ">
                Create A New Account
              </h1>
            </div>
            <form onSubmit={handleSubmit} className="pb-3 mt-6 border-b">
              <div className="mb-4">
                <div className="flex flex-col gap-4 md:flex-row">
                  <div className="lg:w-1/2">
                    <label htmlFor="FirstName">First Name</label>
                    <input
                      type="text"
                      name="FirstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="First Name"
                      required
                      className="w-full px-3 py-2 bg-gray-100 border rounded focus:outline-none focus:border-blue-400"
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
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Last Name"
                      required
                      className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
                    />
                    {errors.fullName && (
                      <p className="error">{errors.fullName}</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="mb-4">
              <div className="flex flex-col gap-4 md:flex-row">
              <div className="lg:w-1/2">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Email"
                   onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-3 py-2 bg-gray-100 border rounded focus:outline-none focus:border-blue-400"
                />
                {errors.email && <p className="error">{errors.email}</p>}
              </div>
              <div className="lg:w-1/2">
                <label htmlFor="telephone">Telephone</label>
                <input
                  type="text"
                  name="telephone"
                  value={telephone}
                  placeholder="Telephone"
                  onChange={(e) => setTelephone(e.target.value)}
                  required
                  className="w-full px-3 py-2 bg-gray-100 border rounded focus:outline-none focus:border-blue-400"
                />
                {errors.telephone && <p className="error">{errors.telephone}</p>}
              </div>
              </div>
              </div>
              <div className="mb-4">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                   onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
                />
                {errors.password && <p className="error">{errors.password}</p>}
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="agree"
                  className="w-4 h-4 text-indigo-600 transition duration-150 ease-in-out form-checkbox"
                  checked={agreed}
                   onChange={(e) => setAgreed(e.target.value)}
                />
                <label htmlFor="agree" className="block ml-2 text-sm leading-5">
                  I agree to the terms and conditions
                </label>
              </div>

              {errors.agreed && (
                <p className="mt-2 text-sm error">{errors.agreed}</p>
              )}

              <button
                type="submit"
                className="w-40 py-2 mt-4 text-white rounded bg-custom-button hover:bg-blue-600"
              >
                Sign Up
              </button>
            </form>

            <div className="flex items-center justify-center mt-4 space-x-4">
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
              <p className="mt-3 text-sm text-center">
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
