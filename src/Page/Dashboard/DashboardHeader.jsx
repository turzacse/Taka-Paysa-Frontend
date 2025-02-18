const DashboardHeader = () => {
    return (
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Welcome to TakaPaysa Dashboard</h1>
        <input 
          type="text" 
          placeholder="Search..." 
          className="border p-2 rounded-md w-64"
        />
      </header>
    );
  };
  
  export default DashboardHeader;
  