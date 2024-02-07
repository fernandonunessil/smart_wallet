import React from "react";
import Form from "~/components/LoginForm/Form";

export default function login() {
  return (
    <div className="w-full h-screen bg-zinc-800 flex justify-between items-center gap-3 px-6 text-white">
      <div className="w-1/2">
        <div className="flex items-center pl-4">
          {/* <i className="ri-wallet-3-line text-4xl"></i> */}
          <i className="ri-money-dollar-box-fill text-4xl"></i>
          <h2 className="text-3xl p-2 font-semibold">Sua Carteira Pessoal</h2>
        </div>
        <p className="p-3 text-justify">
          {" "}
          Em um mundo cada vez mais conectado, a gestão financeira pessoal
          tornou-se uma habilidade crucial. Pensando nisso, apresentamos o
          "Finanças em Foco", um aplicativo inovador projetado para simplificar
          e potencializar sua jornada rumo ao sucesso financeiro.
        </p>
      </div>
      <div className="w-1/2">
        <div className="w-1/2 mx-auto">
          <Form />
        </div>
      </div>
    </div>
  );
}
