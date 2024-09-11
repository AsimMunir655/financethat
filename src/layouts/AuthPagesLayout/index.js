import Header from "@Components/header";
import { Outlet } from "react-router-dom";

function AuthPagesLayout() {
  return (
    <>
      <Header />
      <main className="h-full overflow-y-auto relative bg-white">
        <Outlet />
      </main>
    </>
  );
}

export default AuthPagesLayout;
