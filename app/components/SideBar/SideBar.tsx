import React from "react";
import user_ico from "../../../public/user_ico.png";
import { NavLink, Outlet } from "@remix-run/react";

const SideBarItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: "ri-dashboard-fill"
  },
  {
    name: "Carteira",
    path: "/wallet",
    icon: "ri-wallet-3-fill"
  },
  {
    name: "Receita",
    path: "/revenue",
    icon: "ri-arrow-up-down-line"
  },
  {
    name: "Investimentos",
    path: "/investments",
    icon: "ri-line-chart-fill"
  }
];

export default function SideBar() {
  const [selectPath, setSelectPath] = React.useState("/dashboard");
  return (
    <div className="w-1/6 h-screen shadow-md shadow-zinc-400 select-none">
      <div className="bg-sky-900 relative w-full ">
        <div className="text-center p-2 text-white">
          <h2>Username</h2>
        </div>
        <div className="w-32 h-32">
          <img
            src={user_ico}
            alt="Teste"
            className="w-28 h-28 absolute top-1/2 left-1/2 -translate-x-1/2 border-t-white border-2 border-b-zinc-700 rounded-full"
          />
        </div>
      </div>
      <div className="py-6"></div>
      <div className="py-6 my-4">
        <ul>
          {SideBarItems.map((row, i) => (
            <li
              key={i}
              className={`hover:bg-blue-200 hover:shadow-xl bg-opacity-50 text-center p-2 cursor-pointer duration-300 ease-in-out rounded ${
                selectPath === row.path
                  ? "border-l-4 border-blue-700 bg-gradient-to-r  from-blue-200 to-white shadow-xl"
                  : ""
              }`}
              onClick={() => setSelectPath(row.path)}
            >
              <NavLink
                to={row.path}
                className="flex items-center gap-2 ml-3 p-1"
              >
                <i className={`${row.icon} text-2xl`}></i>
                <p className="text-lg">{row.name}</p>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
