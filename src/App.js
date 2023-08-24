import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./page/Home";
import Footer from "./components/Footer";
import CookieConsent from "react-cookie-consent";
import { NavLink } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <Footer />
      <CookieConsent
        debug={true}
        location="top"
        buttonStyle={{ color: "#fff", background: "#e46601" }}
        expires={365}
      >
        This site uses cookies. See our{" "}
        <NavLink to="/privacy">privacy policy</NavLink>{" "}
      </CookieConsent>
    </BrowserRouter>
  );
}

export default App;
