import { redirect } from "@remix-run/node";
import React from "react";

export default function Form() {
  return (
    <div className="mx-auto min-h-80 border-white border-2 bg-white bg-opacity-20  rounded-lg shadow-lg shadow-zinc-600">
      <form className="text-center p-4 w-full">
        <div className="flex items-center justify-center gap-3">
          <i className="ri-money-dollar-circle-fill text-2xl text-zinc-300"></i>
          <h1 className="text-3xl text-white">Personal Wallet</h1>
          <i className="ri-money-dollar-circle-fill text-2xl text-zinc-300"></i>
        </div>
        <div className="p-2">
          <label
            className="block text-sm font-medium text-white text-left"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="w-full p-1 px-2 outline-none rounded-t border-0 bg-black bg-opacity-15 border-b text-white"
          />
        </div>
        <div className="p-2">
          <label
            className="block text-sm font-medium text-white text-left"
            htmlFor="password"
          >
            Senha
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full p-1 px-2 outline-none rounded-t border-0 bg-black bg-opacity-15 border-b text-white"
          />
        </div>
        <div className="p-3" >
          <button className="p-2 bg-green-700 w-full text-white rounded hover:bg-green-800 duration-500" onClick={() => redirect("/home")}>
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
}
