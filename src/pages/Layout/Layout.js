import { Outlet } from "react-router-dom";

// Components
import { Header } from "../../components";

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
