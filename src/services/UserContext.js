// UserContext.js
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const updateUser = async () => {
    try {
      const authToken = localStorage.getItem("token");

      if (!authToken) {
        setError("User is not logged in");
        setIsLoading(false);
        return;
      }

      const config = {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      };

      const response = await axios.get(
        "https://e1x.nueoffshore.com/api/user",
        config
      );
      const userData = response.data;
      setUser(userData);
      setIsLoading(false);
      setError(null);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  // Fetch initial user data on component mount
  useEffect(() => {
    updateUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, isLoading, error, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}
