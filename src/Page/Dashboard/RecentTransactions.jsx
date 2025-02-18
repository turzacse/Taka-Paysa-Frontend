const RecentTransactions = () => {
    const transactions = [
      { type: "Income", amount: "৳5000", date: "Jan 15, 2025" },
      { type: "Expense", amount: "৳2000", date: "Jan 14, 2025" },
      { type: "Income", amount: "৳7000", date: "Jan 13, 2025" },
    ];
  
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Recent Transactions</h2>
        <ul>
          {transactions.map((tx, index) => (
            <li key={index} className="flex justify-between border-b py-2">
              <span className={tx.type === "Income" ? "text-green-500" : "text-red-500"}>
                {tx.type}
              </span>
              <span>{tx.amount}</span>
              <span className="text-gray-500">{tx.date}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default RecentTransactions;
  