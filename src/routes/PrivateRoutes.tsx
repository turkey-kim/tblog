import React, { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import axios from "axios";

function PrivateRoute() {
  const [isTokenValid, setIsTokenValid] = useState(true);

  if (isTokenValid) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
}

export default PrivateRoute;
