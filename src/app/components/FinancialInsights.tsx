"use client";

import { useState, useEffect } from "react";

export default function FinancialInsights() {
  const [insight, setInsight] = useState("Generating insights...");

  useEffect(() => {
    async function fetchInsights() {
      const transactions = [
        { category: "Groceries", amount: 200 },
        { category: "Rent", amount: 1200 },
        { category: "Dining Out", amount: 100 },
      ];

      const res = await fetch("/api/ai-insights", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ transactions }),
      });

      const data = await res.json();
      console.log(data);
      setInsight(data.insight || "No insights available.");
    }

    fetchInsights();
  }, []);

  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <h2 className="text-xl font-semibold">AI Financial Insights</h2>
      <p className="text-gray-700">{insight}</p>
    </div>
  );
}
