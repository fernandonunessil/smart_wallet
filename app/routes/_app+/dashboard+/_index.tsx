import { faker } from "@faker-js/faker";
import React from "react";
import { Bar } from "react-chartjs-2";
import Card from "~/components/Card/Card";
import { data, options } from "~/components/Chart/Chart";

export default function index() {
  return (
    <div className="w-[86%]">
      <div className="p-4 flex items-center justify-between w-full gap-8 overflow-x-auto">
        <Card title="Carteira" value={166.06} icon="ri-wallet-3-line" />
        <Card title="Investimentos" value={692.06} icon="ri-wallet-3-line" />
        <Card title="Entradas" value={1800} icon="ri-wallet-3-line" />
        <Card title="Saidas" value={-732.32} icon="ri-wallet-3-line" />
      </div>
      <div className="p-8 text-center font-semibold text-2xl text-zinc-600">
        <h2>Saidas e Entradas Anual</h2>
        <Bar data={data} options={options} />
      </div>
      <div className="p-8 text-center font-semibold text-2xl text-zinc-600">
        <h2>Tipos Saida/Entrada Mensal</h2>
        <div className="flex w-full">
          <div className="w-full">
            <Bar
              data={{
                labels: [
                  "Transporte",
                  "Comida",
                  "Roupas",
                  "Estudos",
                  "Entreterimento"
                ],
                datasets: [
                  {
                    label: "Saida",
                    data: [
                      "Transporte",
                      "Comida",
                      "Roupas",
                      "Estudos",
                      "Entreterimento"
                    ].map(() => faker.datatype.number({ min: 0, max: 1000 })),
                    backgroundColor: "rgba(255, 99, 132, 0.5)"
                  }
                ]
              }}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: "top" as const
                  },
                  title: {
                    display: true,
                    text: "Tipos de Saida"
                  }
                }
              }}
            />
          </div>
          <div className="w-full">
            <Bar
              data={{
                labels: ["Salario", "Investimentos", "Jogos", "Serviços"],
                datasets: [
                  {
                    label: "Entrada",
                    data: [
                      "Transporte",
                      "Comida",
                      "Roupas",
                      "Estudos",
                      "Entreterimento"
                    ].map(() => faker.datatype.number({ min: 0, max: 1000 })),
                    backgroundColor: "rgba(111, 235, 53, 0.5)"
                  }
                ]
              }}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: "top" as const
                  },
                  title: {
                    display: true,
                    text: "Tipos de Entrada"
                  }
                }
              }}
            />
          </div>
        </div>
        <div className="w-full my-8">
          <h2 className="text-2xl font-semibold text-zinc-600">Patrimonio</h2>
          <Bar
            data={{
              labels: [
                "Janeiro",
                "Fevereiro",
                "Março",
                "Abril",
                "Maio",
                "Junho",
                "Julho",
                "Agosto",
                "Setembro",
                "Outubro",
                "Novembro",
                "Dezembro"
              ],
              datasets: [
                {
                  label: "Entrada",
                  data: [
                    "Janeiro",
                    "Fevereiro",
                    "Março",
                    "Abril",
                    "Maio",
                    "Junho",
                    "Julho",
                    "Agosto",
                    "Setembro",
                    "Outubro",
                    "Novembro",
                    "Dezembro"
                  ].map(() => faker.datatype.number({ min: 0, max: 1000 })),
                  backgroundColor: "rgba(111, 235, 53, 0.5)"
                }
              ]
            }}
            options={{
              responsive: true
            }}
          />
        </div>
      </div>
    </div>
  );
}
