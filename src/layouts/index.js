// import Footer from "@Components/footer";
import Header from "@Components/header";
import Login from "@Components/login";

function Layout() {
  return (
    <>
      <Header />
      <main className="h-full overflow-y-auto relative bg-white">
        <Login />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default Layout;
