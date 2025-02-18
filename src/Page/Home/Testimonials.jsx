const Testimonials = () => {
    const reviews = [
      { name: "Rahim Uddin", feedback: "TakaPaysa makes my daily expense tracking super easy!" },
      { name: "Sara Rahman", feedback: "Best tool for managing tuition payments and expenses." },
      { name: "Alamin Khan", feedback: "The UI is clean and the analytics are really helpful!" },
    ];
  
    return (
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold">What Our Users Say</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
                <p className="text-gray-800">"{review.feedback}"</p>
                <h4 className="mt-4 font-semibold text-orange-500">{review.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  