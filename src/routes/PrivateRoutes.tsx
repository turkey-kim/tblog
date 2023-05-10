import { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import useTokenChecker from "../hooks/useTokenChecker";

interface PrivateRouteProps {
  children: ReactElement;
}

function PrivateRoute({ children }: PrivateRouteProps): React.ReactElement {
  let [isTokenValid, isLoading] = useTokenChecker();
  if (isLoading) return <>로딩중..</>;
  if (!isTokenValid) return <Navigate to="/login" />;
  return children;
}

export default PrivateRoute;
