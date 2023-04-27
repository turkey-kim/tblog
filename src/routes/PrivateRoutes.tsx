import React, { ReactElement } from "react";
import { Outlet, Navigate } from "react-router-dom";

import useTokenChecker from "../hooks/useTokenChecker";

interface PrivateRouteProps {
  children?: React.ReactElement;
}

function PrivateRoute(): React.ReactElement | null {
  const [tokenValid] = useTokenChecker();
  console.log("asd" + tokenValid);
  if (tokenValid === true) {
    return <Outlet />;
  } else {
    console.log(tokenValid);
    return <Navigate to="/login" />;
  }
}
export default PrivateRoute;
