import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div>
        <h2>Loading.........</h2>
      </div>
    );
  }
  if (user && user.uid) {
    return children;
  }
  return <Navigate to="login"></Navigate>;
};

export default PrivateRoute;
