import React, { createContext, useState, useEffect } from "react";
<<<<<<< HEAD
=======
import axios from "axios";
>>>>>>> 11558e6d411745085ec483755cd700c572f16543

export const AuthContext = createContext();

export function LoginProvider({ children }) {
  const [user, setUser] = useState(null);
<<<<<<< HEAD
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUserData = async () => {
    try {
      const response = await fetch("/api/user"); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      const userData = await response.json();
=======

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await axios.post(
        "https://e1x.nueoffshore.com/api/auth/login",
        {
          email,
          password,
        }
      );

      const { token, ...userData } = response.data;
      console.log("le", token);

      localStorage.setItem("token", token);

      const storedToken = localStorage.getItem("token");

      console.log("stored", storedToken);

>>>>>>> 11558e6d411745085ec483755cd700c572f16543
      setUser(userData);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

<<<<<<< HEAD
  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading, error }}>
=======
  return (
    <AuthContext.Provider value={{ user, isLoading, error, login }}>
>>>>>>> 11558e6d411745085ec483755cd700c572f16543
      {children}
    </AuthContext.Provider>
  );
}
