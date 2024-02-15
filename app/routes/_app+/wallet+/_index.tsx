import React from "react";
import Card from "~/components/Card/Card";
import HistoryCard from "~/components/HistoryCard/HistoryCard";

export default function index() {
  return (
    <div className="w-[86%] p-4">
      <div className="p-4">
        <Card title="Valor Atual" value={"100.000,00"} icon="" />
      </div>
      <div className="p-4 flex items-center gap-8">
        <HistoryCard />
        <HistoryCard />
      </div>
    </div>
  );
}
