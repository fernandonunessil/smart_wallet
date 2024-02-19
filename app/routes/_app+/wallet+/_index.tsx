import React from "react";
import Card from "~/components/Card/Card";
import HistoryCard from "~/components/HistoryCard/HistoryCard";

export default function index() {
  return (
    <div className="w-[86%] p-4">
      <div className="p-4">
        <Card title="Valor Atual" value={"100.000,00"} icon="" />
      </div>
      <div className="p-4 flex items-center justify-between gap-8">
        <div className="text-center w-full">
          <h2 className="text-2xl">Saidas</h2>
          <HistoryCard />
        </div>
        <div className="text-center w-full">
          <h2 className="text-2xl">Entradas</h2>
          <HistoryCard />
        </div>
      </div>
    </div>
  );
}
