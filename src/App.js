import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConstent";

import Home from "./page/Home";
import Course from "./page/Courses";
import SuccessfulPage from "./page/SuccessfulPage";

import ContactPage from "./page/ContactPage";
import LiveCourse from "./page/LiveCourse";
import Payement from "./page/Payement";
import CheckOutPage from "./page/CheckOutPage";
import About from "./page/About";
import Login from "./page/Login";
import ResetPassword from "./page/ResetPassword";
import SignUp from "./page/SignUp";

import CourseDetailPage from "./page/CourseDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/courseDetail" element={<CourseDetailPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<CheckOutPage />} />
        <Route path="/payment" element={<Payement />} />
        <Route path="/success" element={<SuccessfulPage />} />

        <Route path="/live-course" element={<LiveCourse />} />

        <Route path="/contact" element={<ContactPage />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
      <Footer />
      <CookieConsent />
    </BrowserRouter>
  );
}

export default App;
