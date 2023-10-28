import React from "react";
<<<<<<< HEAD
import { useState } from "react";
=======
import { useState, useContext, useEffect } from "react";
>>>>>>> 11558e6d411745085ec483755cd700c572f16543
import Billing from "./Billing";

import Password from "./Password";
import Notification from "./Notification";
import Certificate from "./Certificate";
import Order from "./Order";
<<<<<<< HEAD

import imageUrl from "../../assets/images/user-image-with-black-background.png";

const Profile = () => {
=======
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../services/UserContext";
import imageUrl from "../../assets/images/user-image-with-black-background.png";

const Profile = () => {
  const navigate = useNavigate();
  const { user, isLoading, error } = useContext(UserContext);
  console.log(user);

>>>>>>> 11558e6d411745085ec483755cd700c572f16543
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [profession, setProfession] = useState("");

  const [activeTab, setActiveTab] = useState("profile");

  const handleTabChange = (tab) => {
    console.log("activetab", tab);
    setActiveTab(tab);
  };

<<<<<<< HEAD
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };
  const handleCompany = (e) => {
    setCompany(e.target.value);
  };

  const handleProfession = (e) => {
    setProfession(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Username:", email);

    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
=======
  const handleSubmit = async (e) => {
    e.preventDefault();

    navigate("/");
>>>>>>> 11558e6d411745085ec483755cd700c572f16543
  };
  return (
    <div className="custom-course-background">
      <div className="max-w-6xl mx-auto py-10">
        <div className="lg:flex flex-wrap gap-14 px-4 ">
          <div className="lg:w-1/5 w-full mb-4 ">
            <ul className="bg-gray-300">
              <li
                className={`hover:border-l-4 ${
                  activeTab === "profile" ? "border-blue-500" : ""
                }`}
                onClick={() => handleTabChange("profile")}
                style={{ cursor: "pointer" }}
              >
                <div className="block p-2">
                  <p>Profile</p>
                </div>
              </li>

              <li
                className={`hover:border-l-4 ${
                  activeTab === "password" ? "border-blue-500" : ""
                }`}
                onClick={() => handleTabChange("password")}
                style={{ cursor: "pointer" }}
              >
                <div className="block p-2">
                  <p>Password</p>
                </div>
              </li>

              <li
                className={`hover:border-l-4 ${
                  activeTab === "notification" ? "border-blue-500" : ""
                }`}
                onClick={() => handleTabChange("notification")}
                style={{ cursor: "pointer" }}
              >
                <div className="block p-2">
                  <p>Notification</p>
                </div>
              </li>

              <li
                className={`hover:border-l-4 ${
                  activeTab === "billing" ? "border-blue-500" : ""
                }`}
                onClick={() => handleTabChange("billing")}
                style={{ cursor: "pointer" }}
              >
                <div className="block p-2">
                  <p>Billing</p>
                </div>
              </li>

              <li
                className={`hover:border-l-4 ${
                  activeTab === "order" ? "border-blue-500" : ""
                }`}
                onClick={() => handleTabChange("order")}
                style={{ cursor: "pointer" }}
              >
                <div className="block p-2">
                  <p>Order History</p>
                </div>
              </li>

              <li
                className={`hover:border-l-4 ${
                  activeTab === "certificate" ? "border-blue-500" : ""
                }`}
                onClick={() => handleTabChange("certificate")}
                style={{ cursor: "pointer" }}
              >
                <div className="block p-2">
                  <p>Certificate</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="lg:w-3/4 w-full">
            {activeTab === "profile" && (
              <>
                <h1 className="text-4xl font-bold ">Edit Profile </h1>
                <div className="flex">
                  <div className="w-1/5 ">
                    <img
                      src={imageUrl}
                      alt="image-url"
                      className="lg:h-32 lg:w-32 h-16 w-16 rounded-full mx-auto"
                    />
                  </div>
                  <div className="w-3/4 px-4">
<<<<<<< HEAD
                    <form onSubmit={handleSubmit}>
=======
                    <form>
>>>>>>> 11558e6d411745085ec483755cd700c572f16543
                      <div className="mb-4">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          name="email"
<<<<<<< HEAD
                          value={email}
                          placeholder="Email"
                          onChange={handleEmailChange}
=======
                          value={user ? user.email : ""}
                          placeholder="Email"
                          onChange={(e) => setEmail(e.target.value)}
>>>>>>> 11558e6d411745085ec483755cd700c572f16543
                          required
                          className="w-full border bg-gray-100 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
                        />
                      </div>
                      <div className="mb-4">
                        <div className="flex flex-col md:flex-row gap-4 ">
                          <div className="lg:w-1/2">
                            <label htmlFor="FirstName">First Name</label>
                            <input
                              type="text"
                              name="FirstName"
<<<<<<< HEAD
                              value={firstName}
                              onChange={handleFirstNameChange}
=======
                              value={user ? user.firstname : ""}
                              onChange={(e) => setFirstName(e.target.value)}
>>>>>>> 11558e6d411745085ec483755cd700c572f16543
                              placeholder="First Name"
                              required
                              className="w-full border bg-gray-100 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
                            />
                          </div>
                          <div className="lg:w-1/2">
                            <label htmlFor="LastName">Last Name</label>
                            <input
                              type="LastName"
                              name="LastName"
<<<<<<< HEAD
                              value={lastName}
                              onChange={handleLastNameChange}
=======
                              value={user ? user.lastname : ""}
                              onChange={(e) => setLastName(e.target.value)}
>>>>>>> 11558e6d411745085ec483755cd700c572f16543
                              placeholder="Last Name"
                              required
                              className="w-full border bg-gray-100 border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="w-full mb-4">
                        <label htmlFor="LastName">Company</label>
                        <input
                          type="LastName"
                          name="LastName"
                          value={company}
<<<<<<< HEAD
                          onChange={handleCompany}
=======
                          onChange={(e) => setCompany(e.target.value)}
>>>>>>> 11558e6d411745085ec483755cd700c572f16543
                          placeholder="Company"
                          required
                          className="w-full border bg-gray-100 border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
                        />
                      </div>

                      <div className="w-full mb-4">
                        <label htmlFor="LastName">Professional Title</label>
                        <input
                          type="LastName"
                          name="LastName"
                          value={profession}
<<<<<<< HEAD
                          onChange={handleProfession}
=======
                          onChange={(e) => setProfession(e.target.value)}
>>>>>>> 11558e6d411745085ec483755cd700c572f16543
                          placeholder="Professional Title"
                          required
                          className="w-full border bg-gray-100 border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-40 bg-custom-button font-bold text-white rounded py-2 hover:bg-blue-600 mt-4"
<<<<<<< HEAD
=======
                        onSubmit={handleSubmit}
>>>>>>> 11558e6d411745085ec483755cd700c572f16543
                      >
                        Save Changes
                      </button>
                    </form>
                  </div>
                </div>
              </>
            )}
            {activeTab === "billing" && <Billing />}

            {activeTab === "password" && <Password />}
            {activeTab === "notification" && <Notification />}
            {activeTab === "order" && <Order />}
            {activeTab === "certificate" && <Certificate />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
