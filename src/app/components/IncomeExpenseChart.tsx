"use client";

import { Bar } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from "chart.js";

Chart.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const data = {
  labels: ["Jan", "Feb", "Mar"],
  datasets: [
    {
      label: "Income",
      data: [4000, 3000, 5000],
      backgroundColor: "#4CAF50",
    },
    {
      label: "Expenses",
      data: [2400, 2210, 2800],
      backgroundColor: "#F44336",
    },
  ],
};

export default function IncomeExpenseChart() {
  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <h2 className="text-xl font-semibold">Income vs. Expenses</h2>
      <Bar data={data} />
    </div>
  );
}
