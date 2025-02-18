import Sidebar from "./Sidebar";
import DashboardHeader from "./DashboardHeader";
import IncomeExpenseSummary from "./IncomeExpenseSummary";
import ReportsSection from "./ReportsSection";
import RecentTransactions from "./RecentTransactions";
import QuickAddForm from "./QuickAddForm";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* <Sidebar /> */}
      <main className="flex-1 p-6 bg-gray-100">
        <DashboardHeader />
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <IncomeExpenseSummary />
          <QuickAddForm />
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <ReportsSection />
          <RecentTransactions />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
