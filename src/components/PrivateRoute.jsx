// PrivateRoute.js
import { Navigate, Route } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../services/LoginAuthContext";

function PrivateRoute({ element, ...rest }) {
  const { user } = useContext(AuthContext);

  return (
    <Route {...rest} element={user ? element : <Navigate to="/sign-in" />} />
  );
}

export default PrivateRoute;
