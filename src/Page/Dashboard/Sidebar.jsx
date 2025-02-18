const Sidebar = () => {
    return (
      <aside className="bg-[#006666] text-white w-64 min-h-screen p-6">
        <h2 className="text-2xl font-bold">TakaPaysa</h2>
        <ul className="mt-6 space-y-4">
          <li><a href="#" className="block p-2 hover:bg-[#004c4c] rounded">Dashboard</a></li>
          <li><a href="#" className="block p-2 hover:bg-[#004c4c] rounded">Reports</a></li>
          <li><a href="#" className="block p-2 hover:bg-[#004c4c] rounded">Transactions</a></li>
          <li><a href="#" className="block p-2 hover:bg-[#004c4c] rounded">Settings</a></li>
        </ul>
      </aside>
    );
  };
  
  export default Sidebar;
  