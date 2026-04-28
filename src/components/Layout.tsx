import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { SideNav } from "@/components/SideNav";

export const Layout = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen w-full">
      <SideNav />
      <div className="lg:pl-72 xl:pl-80">
        <Outlet />
      </div>
    </div>
  );
};
