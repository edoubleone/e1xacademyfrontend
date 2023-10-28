import React, { createContext, useState } from "react";
import axios from "axios";

export const CourseDetailContext = createContext();

export function CourseDetailProvider({ children }) {
  const [courses, setCourses] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCourseDetails = (uuid) => {
    axios
      .get(
        `
        https://e1x.nueoffshore.com/api/courses/online/live-courses/details/${uuid}
      `
      )
      .then((response) => {
        setCourses(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  };

  return (
    <CourseDetailContext.Provider
      value={{ courses, isLoading, error, fetchCourseDetails }}
    >
      {children}
    </CourseDetailContext.Provider>
  );
}
