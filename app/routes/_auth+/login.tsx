import React from "react";

export default function login() {
  return (
    <div className="w-full h-screen bg-zinc-800 flex justify-center items-center">
      <div className="w-1/3 min-h-80 border-white border-2 bg-white bg-opacity-20  rounded-lg shadow-lg shadow-zinc-600">
        <form className="text-center p-4 ">
          <h1 className="text-3xl text-white">Personal Wallet</h1>
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
          <div className="p-3">
            <button className="p-2 bg-green-700 w-full text-white rounded">Entrar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
