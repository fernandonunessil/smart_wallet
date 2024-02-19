import React from "react";
import Card from "~/components/Card/Card";
import HistoryCard from "~/components/HistoryCard/HistoryCard";

export default function index() {
  return (
    <div className="w-[86%] p-4">
      <div className="p-4">
        <Card title="Valor Atual" value={10000000} icon="" />
      </div>
      <div className="p-4 flex items-center justify-between gap-8">
        <div className="text-center w-full">
          <h2 className="text-2xl p-2">Saidas</h2>
          <HistoryCard />
        </div>
        <div className="text-center w-full">
          <h2 className="text-2xl p-2">Entradas</h2>
          <HistoryCard />
        </div>
      </div>
      <div className="flex justify-between gap-8">
        <Card title="Total Saidas" value={-250.0} icon="" />
        <Card title="Total Entradas" value={100000} icon="" />
      </div>
    </div>
  );
}
