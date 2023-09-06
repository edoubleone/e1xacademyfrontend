import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConstent";

import Home from "./page/Home";
import Course from "./page/Courses";
import About from "./page/About";
import Contact from "./page/Contact";
import LiveCourse from "./page/LiveCourse";
import CourseDetails from "./page/CourseDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/course/:courseDetails" element={<CourseDetails />} />

        <Route path="/about" element={<About />} />
        <Route path="/live-course" element={<LiveCourse />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <CookieConsent />
    </BrowserRouter>
  );
}

export default App;
