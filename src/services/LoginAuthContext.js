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
      console.log("le", token);

      localStorage.setItem("token", token);

     


      setUser(userData);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, error, login }}>
      {children}
    </AuthContext.Provider>
  );
}
