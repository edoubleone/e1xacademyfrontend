import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./page/Home";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConstent";
import { NavLink } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <Footer />
      <CookieConsent />
    </BrowserRouter>
  );
}

export default App;
