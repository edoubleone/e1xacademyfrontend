import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./global.css";
import App from "./App";
import { AuthProvider } from "./services/AuthContext";
import { LoginProvider } from "./services/LoginAuthContext";
import { CourseDetailProvider } from "./services/CourseDetails";
import { CourseProvider } from "./services/CourseContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CourseProvider>
      <CourseDetailProvider>
        <App />
      </CourseDetailProvider>
    </CourseProvider>
  </React.StrictMode>
);
