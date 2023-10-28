import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./global.css";
import App from "./App";
import { AuthProvider } from "./services/AuthContext";
import { LoginProvider } from "./services/LoginAuthContext";
<<<<<<< HEAD
=======
import { CourseDetailProvider } from "./services/CourseDetails";
import { CourseProvider } from "./services/CourseContext";
import { LiveCourseProvider } from "./services/LiveContext";
import { UserProvider } from "./services/UserContext";
import { LiveCourseDetailProvider } from "./services/LiveCourseDetail";
>>>>>>> 11558e6d411745085ec483755cd700c572f16543

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <App />
=======
    <UserProvider>
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
    </UserProvider>
>>>>>>> 11558e6d411745085ec483755cd700c572f16543
  </React.StrictMode>
);
