import { Navigate, RouteProps } from "react-router-dom";

const PrivateRoute = ({ element, ...rest }: RouteProps) => {
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{element}</>;
};

export default PrivateRoute;
