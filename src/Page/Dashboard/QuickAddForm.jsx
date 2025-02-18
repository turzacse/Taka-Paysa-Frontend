import { useState } from "react";

const QuickAddForm = () => {
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("Income");

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Quick Add</h2>
      <input 
        type="number" 
        placeholder="Amount" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2 rounded-md w-full mb-4"
      />
      <select 
        value={type} 
        onChange={(e) => setType(e.target.value)}
        className="border p-2 rounded-md w-full mb-4"
      >
        <option value="Income">Income</option>
        <option value="Expense">Expense</option>
      </select>
      <button className="bg-orange-500 px-6 py-3 rounded-md text-white w-full hover:bg-orange-600">
        Add Transaction
      </button>
    </div>
  );
};

export default QuickAddForm;
