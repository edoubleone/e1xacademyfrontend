<<<<<<< HEAD
// CourseDetailContext.js

import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
=======
import React, { createContext, useState } from "react";
import axios from "axios";
>>>>>>> 11558e6d411745085ec483755cd700c572f16543

export const CourseDetailContext = createContext();

export function CourseDetailProvider({ children }) {
<<<<<<< HEAD
  const [course, setCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { courseId } = useParams();
  useEffect(() => {
    axios
      .get(`/api/courses/${courseId}`)
      .then((response) => {
        setCourse(response.data);
=======
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
>>>>>>> 11558e6d411745085ec483755cd700c572f16543
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
<<<<<<< HEAD
  }, [courseId]);

  return (
    <CourseDetailContext.Provider value={{ course, isLoading, error }}>
=======
  };

  return (
    <CourseDetailContext.Provider
      value={{ courses, isLoading, error, fetchCourseDetails }}
    >
>>>>>>> 11558e6d411745085ec483755cd700c572f16543
      {children}
    </CourseDetailContext.Provider>
  );
}
