import React, { useState, useEffect, createContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [apiData, setApiData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
<<<<<<< HEAD
      const response = await fetch("https://e1x.nueoffshore.com/api/auth/register");
=======
      const response = await fetch("your-api-endpoint");
>>>>>>> 11558e6d411745085ec483755cd700c572f16543
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setApiData(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data from the API:", error);
      setError(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  <AuthContext.Provider value={{ user, setUser, apiData, isLoading, error }}>
    {children}
  </AuthContext.Provider>;
}
