import { Outlet, ScrollRestoration } from "react-router-dom";
import { SideNav } from "@/components/SideNav";

export const Layout = () => {
  return (
    <div className="min-h-screen w-full">
      <SideNav />
      <div className="lg:pl-72 xl:pl-80">
        <Outlet />
      </div>
      <ScrollRestoration />
    </div>
  );
};
