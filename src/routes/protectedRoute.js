import { Outlet, Navigate, useLocation } from "react-router-dom";

function ProtectedRoute() {
  const location = useLocation();
  const isLogin = localStorage.getItem("token");
  if (isLogin) {
    return <Outlet />;
  }

  return (
    <Navigate
      to="/login"
      replace
      state={{
        prevLocation: location.pathname,
        error: "You need to login first!"
      }}
    />
  );
}

export default ProtectedRoute;
