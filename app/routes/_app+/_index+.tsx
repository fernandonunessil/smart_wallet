import React from "react";
import user_ico from "../../../public/user_ico.png";
import { NavLink, Outlet } from "@remix-run/react";
import SideBar from "~/components/SideBar/SideBar";

export default function index() {
  const [selectPath, setSelectPath] = React.useState("/dashboard");
  return (
    <div className="w-full flex">
      <div className="w-1/6 h-screen "></div>
      <SideBar />

      <Outlet />
    </div>
  );
}
