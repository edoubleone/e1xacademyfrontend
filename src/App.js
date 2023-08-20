import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Learning from "./components/Learning";
import Course from "./components/Course";
import Start from "./components/Start";
import Accredication from "./components/Accredication";
import Instructor from "./components/Instructor";
import Operation from "./components/Operation";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Main />
      <Learning />
      <Course />
      <Start />
      <Accredication />
      <Instructor />
      <Operation />
      <Subscribe />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
