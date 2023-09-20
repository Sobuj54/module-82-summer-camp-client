import { Outlet } from "react-router-dom";
import NavBar from "./Shared/NavBar/NavBar";
import Footer from "./Shared/Footer/Footer";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Outlet />
      <Footer></Footer>
    </>
  );
}

export default App;
