type Transaction = { id: number; name: string; amount: number };

const TransactionList = ({ transactions }: { transactions: Transaction[] }) => (
  <div className="mt-6 bg-white p-4 shadow rounded-lg">
    <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
    <ul>
      {transactions.map((tx) => (
        <li key={tx.id} className="flex justify-between border-b py-2">
          <span>{tx.name}</span>
          <span className={tx.amount < 0 ? "text-red-500" : "text-green-500"}>${tx.amount}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default TransactionList;
