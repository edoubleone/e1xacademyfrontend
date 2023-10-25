import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./global.css";
import App from "./App";
import { AuthProvider } from "./services/AuthContext";
import { LoginProvider } from "./services/LoginAuthContext";
import { CourseDetailProvider } from "./services/CourseDetails";
import { CourseProvider } from "./services/CourseContext";
import { LiveCourseProvider } from "./services/LiveContext";
import { LiveCourseDetailProvider } from "./services/LiveCourseDetail";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoginProvider>
      <LiveCourseDetailProvider>
        <LiveCourseProvider>
          <CourseProvider>
            <CourseDetailProvider>
              <App />
            </CourseDetailProvider>
          </CourseProvider>
        </LiveCourseProvider>
      </LiveCourseDetailProvider>
    </LoginProvider>
  </React.StrictMode>
);
