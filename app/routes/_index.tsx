import { redirect } from "@remix-run/node";
import React from "react";

export const loader = () => {
  return redirect("/login");
};

export default function index() {
  return <div>index</div>;
}
