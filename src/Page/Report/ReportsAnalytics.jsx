import { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ReportsAnalytics = () => {
  const [data, setData] = useState({
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Income",
        data: [12000, 12000, 12000, 12000, 12000, 12000, 12000],
        borderColor: "rgba(34, 197, 94, 1)",
        fill: false,
      },
      {
        label: "Expense",
        data: [8000, 7500, 9000, 10000, 4500, 5000, 13000],
        borderColor: "rgba(239, 68, 68, 1)",
        fill: false,
      },
    ],
  });

  const exportToCSV = () => {
    // Logic for exporting data to CSV
    console.log("Exporting to CSV...");
  };

  const exportToPDF = () => {
    // Logic for exporting data to PDF
    console.log("Exporting to PDF...");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-4">হিসাব বিশ্লেষণ</h2>

      {/* Graph */}
      <div className="mb-6">
        <Line data={data} />
      </div>

      {/* Export Buttons */}
      <div className="flex space-x-4">
        <button
          onClick={exportToCSV}
          className="bg-blue-500 text-white px-6 py-2 rounded-md"
        >
          Export to CSV
        </button>
        <button
          onClick={exportToPDF}
          className="bg-blue-500 text-white px-6 py-2 rounded-md"
        >
          Export to PDF
        </button>
      </div>

      {/* Monthly & Yearly Comparison */}
      <div className="mt-8">
        <h3 className="font-semibold mb-2">Monthly & Yearly Comparison</h3>
        <p>Monthly vs Yearly Comparison Data goes here</p>
      </div>
    </div>
  );
};

export default ReportsAnalytics;
