import React, { useEffect, useState, useRef, useContext } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.jpeg";
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { AuthContext } from "../../services/LoginAuthContext";

import { IoIosArrowDown } from "react-icons/io";

function DashboardNavbar() {
  const { user } = useContext(AuthContext);
  const [nav, setNav] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const navRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setNav(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`p-4 ${isSticky ? "sticky-navbar" : ""}`}>
      <nav className="max-w-6xl flex items-center justify-between mx-auto   md:px-2">
        <div className="flex items-center gap-8">
          <NavLink
            to="/dashboard"
            exact
            activeClassName="active"
            className="text-4xl font-semibold text-[#e46601] flex items-center"
          >
            <img src={Logo} alt="logo" width="100" height="80" />
          </NavLink>

          <li className="list-none">
            <NavLink
              to="/dashboard/course"
              exact
              className={`text-lg ${
                activeLink === "/dashboard/course"
                  ? "text-blue-500"
                  : "text-black"
              } hover:text-blue-500`}
              onClick={() => setActiveLink("/")}
            >
              All Course
            </NavLink>
          </li>

          <li className="list-none">
            <NavLink
              to="/dashboard"
              exact
              className={`text-lg ${
                activeLink === "/dashboard" ? "text-blue-500" : "text-black"
              } hover:text-blue-500`}
              onClick={() => setActiveLink("/")}
            >
              Dashboard
            </NavLink>
          </li>
        </div>

        <ul className="hidden md:flex space-x-10 text-md"></ul>

        <div className="hidden md:flex items-center space-x-4">
          <div
            to="/sign-in"
            activeClassName="active"
            className="text-lg relative"
            onClick={toggleDropdown}
          >
            <div className="flex items-center gap-2">
              <p></p>
              <img src="" alt="profile" className="h-4 w-4 rounded-full" />
              <div>
                <IoIosArrowDown />
              </div>
            </div>
            {isDropdownOpen && (
              <div className="text-sm absolute top-full left-8 bg-white border rounded-lg shadow-lg p-4">
                <ul className="space-y-2">
                  <li>
                    <NavLink> Profile</NavLink>
                  </li>
                  <li>
                    <NavLink> Notification</NavLink>
                  </li>
                  <li>
                    <NavLink> Billing</NavLink>
                  </li>
                  <li>
                    <NavLink> Logout</NavLink>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div onClick={handleNav} className="block md:hidden">
          {!nav ? (
            <FiMenu style={{ color: "#00AFFF" }} />
          ) : (
            <AiOutlineClose style={{ color: "#00AFFF" }} />
          )}
        </div>

        <div
          ref={navRef}
          className={
            nav
              ? "fixed left-0 top-0 w-[70%] h-full border-r border-r-gray bg-white ease-in-out duration-300 z-10"
              : "fixed left-[-100%]"
          }
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%", // Extend to the full height of the parent container
          }}
        >
          <ul className="uppercase flex-col items-center justify-center  p-4 ">
            <div className="flex  p-4">
              <NavLink
                to="/"
                exact
                activeClassName="active"
                className="text-4xl font-semibold text-[#e46601] flex items-center"
              >
                <img src={Logo} alt="logo" width="100" height="80" />
              </NavLink>
            </div>
            <li href="./" className="p-4">
              <NavLink
                to="/"
                exact
                className={`text-lg ${
                  activeLink === "/" ? "text-blue-500" : "text-black"
                }`}
                onClick={() => setActiveLink("/")}
              >
                Home
              </NavLink>
            </li>
            <li href="./" className="p-4">
              <NavLink
                to="/about"
                className={`text-lg ${
                  activeLink === "/about" ? "text-blue-500" : "text-black"
                }`}
                onClick={() => setActiveLink("/about")}
              >
                About
              </NavLink>
            </li>
            <li className="p-4">
              <NavLink
                to="/about-us"
                className="p-4 text-customBlue"
                activeClassName="active-link"
              >
                Contact Us
              </NavLink>
            </li>
            <li className="p-4 ">
              <NavLink
                to="/contact-us"
                className="p-4 text-customBlue"
                activeClassName="active-link"
              >
                Sign In
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default DashboardNavbar;
