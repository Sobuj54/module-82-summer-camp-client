import { Outlet } from "react-router-dom";
import NavBar from "./Shared/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Outlet />
    </>
  );
}

export default App;
