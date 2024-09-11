import { Route, Routes } from "react-router-dom";
import PublicRoute from "./publicRoute";
import ProtectedRoute from "./protectedRoute";
import AuthPagesLayout from "../layouts/AuthPagesLayout";
import BuyerLogin from "../views/AuthPages/BuyerAuth/Login";
import App from "../App";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<ProtectedRoute />} />
      <Route element={<PublicRoute />}>
        <Route path="/" element={<App />} />
        {/* <Route path="/login" element={<div>Login</div>} /> */}
      </Route>
      <Route element={<AuthPagesLayout />}>
        <Route path="/login" element={<BuyerLogin />} />
      </Route>
    </Routes>
  );
}
export default AppRoutes;
