import React from "react";
import {
  Accredication,
  Course,
  Instructor,
  Learning,
  Main,
  Operation,
  Start,
  Subscribe,
} from "../components/Home/index";

function Home() {
  return (
    <div>
      <div className="px-2">
        <Main />
      </div>

      <Learning />
      <Course />
      <Start />
      <Accredication />
      <Instructor />
      <Operation />
      <Subscribe />
    </div>
  );
}

export default Home;
