const FeaturesSection = () => {
    const features = [
      { title: "Expense Tracking", desc: "Monitor your daily spending effortlessly." },
      { title: "Income Management", desc: "Keep track of your earnings in one place." },
      { title: "Tution Payments", desc: "Manage student payments & due reminders." },
      { title: "Advanced Analytics", desc: "Get insights with charts & reports." },
    ];
  
    return (
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold">Why Choose TakaPaysa?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600 mt-2">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default FeaturesSection;
  