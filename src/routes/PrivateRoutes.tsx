import { ReactElement, useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import useTokenChecker from "../hooks/useTokenChecker";
import Login from "../views/Login";

interface PrivateRouteProps {
  children: ReactElement;
}

function PrivateRoute({ children }: PrivateRouteProps): React.ReactElement {
  let [isTokenValid, isLoading] = useTokenChecker();
  const navigate = useNavigate();

  if (isLoading) return <>로딩중..</>;
  if (!isTokenValid) return <Navigate to="/login" />;
  return children;
}

export default PrivateRoute;
