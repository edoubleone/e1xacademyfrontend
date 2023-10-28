<<<<<<< HEAD
import React, { createContext, useEffect, useState } from "react";
=======
import React, { createContext, useState } from "react";
>>>>>>> 11558e6d411745085ec483755cd700c572f16543
import axios from "axios";

export const CourseContext = createContext();

export function CourseProvider({ children }) {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

<<<<<<< HEAD
  useEffect(() => {
    axios
      .get("/api/courses")
      .then((response) => {
        setCourses(response.data);
=======
  const fetchOnlineCourse = () => {
    axios
      .get("https://e1x.nueoffshore.com/api/courses/online/online-courses/all")
      .then((response) => {
        if (response.data) {
          setCourses(response.data);
        }
>>>>>>> 11558e6d411745085ec483755cd700c572f16543
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
<<<<<<< HEAD
  }, []);
=======
  };
>>>>>>> 11558e6d411745085ec483755cd700c572f16543

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
<<<<<<< HEAD
      value={{ courses, isLoading, error, fetchPaginatedData }}
=======
      value={{
        courses,
        isLoading,
        error,
        fetchOnlineCourse,
        fetchPaginatedData,
      }}
>>>>>>> 11558e6d411745085ec483755cd700c572f16543
    >
      {children}
    </CourseContext.Provider>
  );
}
