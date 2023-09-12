import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.jpeg";
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef(null);
  const timeoutRef = useRef(null); // Ref for the timeout

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

  const handleDropdownOpen = () => {
    clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleDropdownClose = () => {
    clearTimeout(timeoutRef.current);

    // Set a timeout to close the dropdown after 1 second (adjust as needed)
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 1000); // 1000 milliseconds = 1 second
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
      <nav className="max-w-6xl flex items-center justify-between mx-auto md:px-2">
        <div>
          <NavLink
            to="/"
            exact
            activeClassName="active"
            className="text-4xl font-semibold text-[#e46601] flex items-center"
          >
            <img src={Logo} alt="logo" width="100" height="80" />
          </NavLink>
        </div>

        <ul className="hidden md:flex space-x-10">
          <li>
            <NavLink to="/" exact activeClassName="active" className="text-lg">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active" className="text-lg">
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/courseDetail"
              activeClassName="active"
              className="text-lg"
            >
              courseDetail
            </NavLink>
          </li>
          <li
            className="relative group"
            ref={navRef}
            onMouseEnter={handleDropdownOpen}
            onMouseLeave={handleDropdownClose}
          >
            <NavLink
              to="/course"
              activeClassName="active"
              className="text-lg cursor-pointer"
            >
              Course
            </NavLink>
            <div
              className={`absolute left-[-2] top-full mt-2 w-60 bg-white border border-gray-300 rounded-lg shadow-lg ${
                isDropdownOpen ? "" : "hidden"
              }`}
              onMouseEnter={handleDropdownOpen}
              onMouseLeave={handleDropdownClose}
              style={{ zIndex: isDropdownOpen ? 1 : -1 }}
            >
              <NavLink
                to="/course "
                activeClassName="active-link"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Online Course
              </NavLink>
              <NavLink
                to="/live-course"
                activeClassName="active-link"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Live Course
              </NavLink>
            </div>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active" className="text-lg">
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="hidden md:flex items-center space-x-4">
          <NavLink to="/sign-in" activeClassName="active" className="text-lg">
            Sign In
          </NavLink>

          <button className="bg-custom-button hover:bg-custom-button text-white font-bold py-2 px-4 rounded">
            <NavLink to="/sign-up" activeClassName="active">
              Sign Out
            </NavLink>
          </button>
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
                to="/sign-up"
                className="p-4 text-customBlue"
                activeClassName="active-link"
              >
                Home
              </NavLink>
            </li>
            <li href="./" className="p-4">
              <NavLink
                to="/sign-up"
                className="p-4 text-customBlue"
                activeClassName="active-link"
              >
                About Us
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

export default Navbar;
