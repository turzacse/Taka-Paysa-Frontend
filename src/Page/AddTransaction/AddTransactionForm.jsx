import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddTransactionForm = () => {
  const [amount, setAmount] = useState("");
  const [transactionType, setTransactionType] = useState("Income");
  const [category, setCategory] = useState("Food");
  const [notes, setNotes] = useState("");
  const [transactionDate, setTransactionDate] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log({ amount, transactionType, category, notes, transactionDate });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">লেনদেন যোগ করুন</h2>
      <form onSubmit={handleSubmit}>
        {/* Amount */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border p-2 rounded-md w-full"
            required
          />
        </div>

        {/* Transaction Type */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Type</label>
          <div className="flex space-x-4">
            <button
              type="button"
              onClick={() => setTransactionType("Income")}
              className={`px-6 py-2 w-32 rounded-md text-white ${transactionType === "Income" ? "bg-green-500" : "bg-gray-300"}`}
            >
              Income
            </button>
            <button
              type="button"
              onClick={() => setTransactionType("Expense")}
              className={`px-6 py-2 w-32 rounded-md text-white ${transactionType === "Expense" ? "bg-red-500" : "bg-gray-300"}`}
            >
              Expense
            </button>
          </div>
        </div>

        {/* Category */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border p-2 rounded-md w-full"
          >
            <option value="Food">Food</option>
            <option value="Rent">Rent</option>
            <option value="Shopping">Shopping</option>
            <option value="Tution">Tution</option>
            <option value="Others">Others</option>
          </select>
        </div>

        {/* Notes */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Notes (Optional)</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="border p-2 rounded-md w-full"
            placeholder="Add some notes here"
          />
        </div>

        {/* Date Picker */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Date</label>
          <DatePicker
            selected={transactionDate}
            onChange={(date) => setTransactionDate(date)}
            className="border p-2 rounded-md w-full"
            dateFormat="dd/MM/yyyy"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-orange-500 text-white px-6 py-3 rounded-md w-full hover:bg-orange-600"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransactionForm;
