import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

function DefaultLayout() {
  return (
    <div id="default-layout">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default DefaultLayout;
