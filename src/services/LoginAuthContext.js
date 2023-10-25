import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export function LoginProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [csrfToken, setCsrfToken] = useState(null); // New state for CSRF token

  const login = async (username, password) => {
    try {
      // Include the CSRF token in the request headers
      const response = await axios.post(
        "https://e1x.nueoffshore.com/api/auth/login",
        {
          username,
          password,
        },
        {
          headers: {
            "X-CSRF-Token": csrfToken,
          },
        }
      );

      const userData = response.data;
      console.log(userData);
      setUser(userData);
    } catch (error) {
      console.log(error.message);
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
