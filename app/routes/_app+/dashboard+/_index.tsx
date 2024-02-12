import React from "react";
import Card from "~/components/Card/Card";
import Chart from "~/components/Chart/Chart";

export default function index() {
  return (
    <div className="w-full">
      <div className="p-4 flex items-center justify-between w-full gap-8 overflow-x-auto">
        <Card title="Carteira" value={166.06} icon="ri-wallet-3-line" />
        <Card title="Investimentos" value={692.06} icon="ri-wallet-3-line" />
        <Card title="Entradas" value={1800} icon="ri-wallet-3-line" />
        <Card title="Saidas" value={-732.32} icon="ri-wallet-3-line" />
      </div>
      <div>
        <Chart />
      </div>
    </div>
  );
}
