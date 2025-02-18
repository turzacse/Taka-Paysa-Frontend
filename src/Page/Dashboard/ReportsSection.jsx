const ReportsSection = () => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Reports</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-gray-100 p-4 rounded-md">
            <h3 className="font-semibold">Daily Report</h3>
            <p className="text-gray-600">৳5000 Earned | ৳2000 Spent</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-md">
            <h3 className="font-semibold">Weekly Report</h3>
            <p className="text-gray-600">৳30,000 Earned | ৳12,000 Spent</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-md">
            <h3 className="font-semibold">Monthly Report</h3>
            <p className="text-gray-600">৳120,000 Earned | ৳50,000 Spent</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default ReportsSection;
  