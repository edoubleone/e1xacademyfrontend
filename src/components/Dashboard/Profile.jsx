import React, { useState, useContext } from "react";
import Billing from "./Billing";
import Password from "./Password";
import Notification from "./Notification";
import Certificate from "./Certificate";
import Order from "./Order";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../services/UserContext";
import imageUrl from "../../assets/images/user-image-with-black-background.png";

const Profile = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [profession, setProfession] = useState("");

  const [activeTab, setActiveTab] = useState("profile");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/course");
  };

  return (
    <div className="custom-course-background">
      <div className="max-w-6xl py-10 mx-auto">
        <div className="flex-wrap px-4 lg:flex gap-14">
          <div className="w-full mb-4 lg:w-1/5">
            <ul className="bg-gray-300">
              {[
                "profile",
                "password",
                "notification",
                "billing",
                "order",
                "certificate",
              ].map((tab) => (
                <li
                  key={tab}
                  className={`hover:border-l-4 ${
                    activeTab === tab ? "border-blue-500" : ""
                  }`}
                  onClick={() => handleTabChange(tab)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="block p-2 capitalize">
                    <p>{tab === "order" ? "Order History" : tab}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full lg:w-3/4">
            {activeTab === "profile" && (
              <>
                <h1 className="text-4xl font-bold">Edit Profile</h1>
                <div className="flex">
                  <div className="w-1/5">
                    <img
                      src={imageUrl}
                      alt="user"
                      className="w-16 h-16 mx-auto rounded-full lg:h-32 lg:w-32"
                    />
                  </div>

                  <div className="w-3/4 px-4">
                    <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <label>Email</label>
                        <input
                          type="email"
                          value={user ? user.email : ""}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="w-full px-3 py-2 bg-gray-100 border rounded focus:outline-none focus:border-blue-400"
                        />
                      </div>

                      <div className="flex flex-col gap-4 mb-4 md:flex-row">
                        <div className="lg:w-1/2">
                          <label>First Name</label>
                          <input
                            type="text"
                            value={user ? user.firstname : ""}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                            className="w-full px-3 py-2 bg-gray-100 border rounded focus:outline-none focus:border-blue-400"
                          />
                        </div>

                        <div className="lg:w-1/2">
                          <label>Last Name</label>
                          <input
                            type="text"
                            value={user ? user.lastname : ""}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                            className="w-full px-3 py-2 bg-gray-100 border rounded focus:outline-none focus:border-blue-400"
                          />
                        </div>
                      </div>

                      <div className="mb-4">
                        <label>Company</label>
                        <input
                          type="text"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          required
                          className="w-full px-3 py-2 bg-gray-100 border rounded focus:outline-none focus:border-blue-400"
                        />
                      </div>

                      <div className="mb-4">
                        <label>Professional Title</label>
                        <input
                          type="text"
                          value={profession}
                          onChange={(e) => setProfession(e.target.value)}
                          required
                          className="w-full px-3 py-2 bg-gray-100 border rounded focus:outline-none focus:border-blue-400"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-40 mt-4 py-2 font-bold text-white rounded bg-custom-button hover:bg-blue-600"
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