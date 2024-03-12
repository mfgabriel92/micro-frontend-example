import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

function RootLayout() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <Outlet />
    </div>
  );
}

export { RootLayout };
