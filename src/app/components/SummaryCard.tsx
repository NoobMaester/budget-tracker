type SummaryCardProps = { title: string; amount: number; color: string };

const SummaryCard = ({ title, amount, color }: SummaryCardProps) => (
  <div className="bg-white p-4 shadow rounded-lg">
    <h2 className="text-xl font-semibold">{title}</h2>
    <p className={`text-2xl font-bold ${color}`}>${amount}</p>
  </div>
);

export default SummaryCard;
