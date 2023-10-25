import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export function LoginProvider({ children }) {
  const [user, setUser] = useState(null);
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

      // Save the token to local storage
      localStorage.setItem("authToken", token);

      setUser(userData);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchInitialUserData = async () => {
      try {
        const response = await axios.get(
          " https://e1x.nueoffshore.com/api/user"
        );
        const userData = response.data;

        setUser(userData);
        console.log("better", userData);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchInitialUserData();
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading, error, login }}>
      {children}
    </AuthContext.Provider>
  );
}
