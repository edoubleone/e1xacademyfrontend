import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CourseContext = createContext();

export function CourseProvider({ children }) {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("/api/courses")
      .then((response) => {
        setCourses(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, []);

  const fetchPaginatedData = (page, perPage) => {
    setIsLoading(true);
    axios
      .get(`/api/courses?page=${page}&perPage=${perPage}`)
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
    <CourseContext.Provider
      value={{ courses, isLoading, error, fetchPaginatedData }}
    >
      {children}
    </CourseContext.Provider>
  );
}
