// CourseDetailContext.js

import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const CourseDetailContext = createContext();

export function CourseDetailProvider({ children }) {
  const [course, setCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { courseId } = useParams();
  useEffect(() => {
    axios
      .get(`/api/courses/${courseId}`)
      .then((response) => {
        setCourse(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, [courseId]);

  return (
    <CourseDetailContext.Provider value={{ course, isLoading, error }}>
      {children}
    </CourseDetailContext.Provider>
  );
}
