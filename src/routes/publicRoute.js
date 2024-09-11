import { Navigate, Outlet } from "react-router-dom";

function PublicRoute() {
  //   useEffect(() => {
  //     document.title = meta.title;
  //     document.head.children.description.content = meta.description;
  //   }, [meta]);
  return localStorage.getItem("token") ? <Navigate to="/" /> : <Outlet />;
}

export default PublicRoute;
