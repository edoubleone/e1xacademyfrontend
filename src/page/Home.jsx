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
      <Main />

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
