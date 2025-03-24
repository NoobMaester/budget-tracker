import SummaryCard from "./components/SummaryCard";
import TransactionList from "./components/TransactionList";
import SpendingChart from "./components/SpendingChart";
import IncomeExpenseChart from "./components/IncomeExpenseChart";
import CashFlowChart from "./components/CashFlowChart";
import FinancialInsights from "./components/FinancialInsights";

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <SpendingChart />
        <IncomeExpenseChart />
        <CashFlowChart />
      </div>

      <div className="mt-4">
        <FinancialInsights />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <SummaryCard title="Total Balance" amount={5000} color="text-green-600" />
        <SummaryCard title="Monthly Spending" amount={-2100} color="text-red-600" />
        <SummaryCard title="Remaining Budget" amount={1400} color="text-blue-600" />
      </div>

      <TransactionList transactions={[
        { id: 1, name: "🛒 Groceries", amount: -120 },
        { id: 2, name: "💼 Salary", amount: 3000 },
        { id: 3, name: "🚗 Gas", amount: -50 }
      ]} />
    </div>
  );
}
