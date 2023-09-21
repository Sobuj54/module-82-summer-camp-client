import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./Shared/NavBar/NavBar";
import Footer from "./Shared/Footer/Footer";

function App() {
  const location = useLocation();

  const noFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("register");
  return (
    <>
      <NavBar></NavBar>
      <Outlet />
      {noFooter || <Footer></Footer>}
    </>
  );
}

export default App;
