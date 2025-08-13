import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function DefaultLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      
    </div>
  );
}

export default DefaultLayout;