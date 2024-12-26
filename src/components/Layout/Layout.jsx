import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";

const Layout = () => {
  return (
    <div>
      <div>
        <AppBar />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
