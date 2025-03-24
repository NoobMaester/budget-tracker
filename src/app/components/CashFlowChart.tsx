"use client";

import { Line } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from "chart.js";

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const data = {
  labels: ["Jan", "Feb", "Mar"],
  datasets: [
    {
      label: "Cash Flow",
      data: [5000, 4800, 5100],
      borderColor: "#8884d8",
      backgroundColor: "rgba(136,132,216,0.5)",
      tension: 0.4,
    },
  ],
};

export default function CashFlowChart() {
  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <h2 className="text-xl font-semibold">Cash Flow Over Time</h2>
      <Line data={data} />
    </div>
  );
}
