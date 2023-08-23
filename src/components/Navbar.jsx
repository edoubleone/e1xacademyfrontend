import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.jpeg";

function Navbar() {
  return (
    <div className="p-4">
      <nav className="container  flex items-center justify-between  mx-auto">
        <div>
          <NavLink
            to="/"
            exact
            activeClassName="active"
            className="text-4xl font-semibold text-[#e46601]"
          >
            <img src={Logo} alt="logo" width="100" height="80" />
          </NavLink>
        </div>

        <ul className="flex  space-x-10">
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
            <NavLink to="/course" activeClassName="active" className="text-lg">
              Course
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active" className="text-lg">
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="flex items-center space-x-4">
          <NavLink to="/signin" activeClassName="active" className="text-lg">
            Sign In
          </NavLink>

          <button className="bg-[#e46601] hover:bg-[#e46601] text-white font-bold py-2 px-4 rounded">
            <NavLink to="/signout" activeClassName="active">
              Sign Out
            </NavLink>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
