import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import DashboardNavbar from "./components/Dashboard/Dashboard_Navbar";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConstent";

import Home from "./page/Home";
import Course from "./page/Courses";
import SuccessfulPage from "./page/SuccessfulPage";
import DashboardCourse from "./components/Dashboard/Course";
import ContactPage from "./page/ContactPage";
import Payement from "./page/Payement";
import CheckOutPage from "./page/CheckOutPage";
import About from "./page/About";
import Login from "./page/Login";
import ResetPassword from "./page/ResetPassword";
import LiveCourseDetail from "./page/LiveCourseDetail";
import Dashboard from "./components/Dashboard/Dashboard";
import SignUp from "./page/SignUp";
import LiveCourses from "./page/LiveCourse";
import NotFound from "./page/NotFound";
import PrivateRoute from "./components/PrivateRoute";
import Callback from "./page/Callback"; 
import CourseDetailPage from "./page/CourseDetails";

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();

  const isDashboardPath = location.pathname.startsWith("/dashboard");

  return (
    <>
      {isDashboardPath ? <DashboardNavbar /> : <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/course/:uuid" element={<CourseDetailPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<CheckOutPage />} />
        <Route path="/payment" element={<Payement />} />
        <Route path="/payment-complete/:reference" element={<Callback />} />
        <Route path="/success" element={<SuccessfulPage />} />
        <Route path="/live-course" element={<LiveCourses />} />
        <Route path="/live-course/:uuid" element={<LiveCourseDetail />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />

        <Route
          path="/dashboard"
          element={<PrivateRoute Element={<Dashboard />} />}
        />

        <Route
          path="/dashboard/course"
          element={<PrivateRoute Element={<DashboardCourse />} />}
        />

        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <CookieConsent />
    </>
  );
}

export default App;
