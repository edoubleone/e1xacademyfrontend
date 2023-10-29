import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { AuthContext } from "../services/LoginAuthContext";

export const EmailProtectedRoute = ({ Element, ...rest }) => {
  // Check if email is verified
  const { user, isEmailVerified } = useContext(AuthContext);

  if (user && isEmailVerified) {
    return Element;
  } else {
    return <Navigate to="/verify-email" replace />;
  }
};
