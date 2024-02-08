import React from "react";
import { CardProps } from "types/Components/Card/type";

export default function Card({ title, value, icon }: CardProps) {
  return (
    <div className="w-full border-zinc-300 border text-center rounded-lg
     p-4">
      <div className="p-6">
        <i className={`${icon} text-3xl`}></i>
        <h2 className="text-xl">{title}</h2>
        <p
          className={`text-2xl ${
            value < 0 ? "text-red-600" : "text-green-600"
          }`}
        >
          {value}
        </p>
      </div>
    </div>
  );
}
