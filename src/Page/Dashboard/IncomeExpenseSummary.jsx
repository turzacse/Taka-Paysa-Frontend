import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const IncomeExpenseSummary = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Income",
        data: [5000, 7000, 6000, 8000, 7500],
        backgroundColor: "#4CAF50",
      },
      {
        label: "Expense",
        data: [3000, 4500, 4000, 5000, 4800],
        backgroundColor: "#FF5722",
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Income & Expense Summary</h2>
      <Bar data={data} />
    </div>
  );
};

export default IncomeExpenseSummary;
