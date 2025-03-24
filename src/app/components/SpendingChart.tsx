"use client"; // Required for Next.js App Router

import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Groceries", "Rent", "Entertainment", "Transport"],
  datasets: [
    {
      label: "Spending Breakdown",
      data: [400, 1200, 300, 150],
      backgroundColor: ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"],
      hoverOffset: 4,
    },
  ],
};

export default function SpendingChart() {
  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <h2 className="text-xl font-semibold">Spending Breakdown</h2>
      <Pie data={data} />
    </div>
  );
}
