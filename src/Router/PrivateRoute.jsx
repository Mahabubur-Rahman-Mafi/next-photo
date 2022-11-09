import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import { UserAuth } from "../Auth/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(UserAuth);
  const location = useLocation();
  if (loader) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PrivateRoute;
