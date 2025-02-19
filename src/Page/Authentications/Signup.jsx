import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
  
    setError("");
  
    try {
      const response = await axios.post("http://localhost:5000/api/users/register", {
        name: formData?.fullName,
        email: formData.email,
        password: formData.password,
      });
  
      if (response.status === 201) {
        Swal.fire({
          text: "Signup successful! You can now log in.",
          icon: "success",
          background: "#D1D5DB",
        });
        navigate("/login"); // Redirect after signup
      }
    } catch (error) {
        console.log(error)
      Swal.fire({
        text: error.response?.data?.message || "Signup failed",
        icon: "error",
        background: "#FDE2E4",
      });
    }
  };
  

  return (
    <div className="relative flex justify-center items-center h-screen  bg-gradient-to-br from-[#00796B] via-[#b9883d] to-[#37474F] overflow-hidden">
      {/* Floating TK Symbols */}
      {[...Array(20)].map((_, i) => (
        <span
          key={i}
          className="absolute text-white text-4xl font-bold opacity-30 animate-float"
          style={{
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            animationDuration: `${3 + Math.random() * 5}s`,
          }}
        >
          <img className="h-[160px] w-[160px] rounded-full" src="/uru.png" alt="" />
        </span>
      ))}

      <div className="relative bg-gray-900 bg-opacity-90 p-8 rounded-lg shadow-md w-96 text-white">
        <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-300">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div>
            <label className="block text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div>
            <label className="block text-gray-300">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div>
            <label className="block text-gray-300">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          {error && <p className="text-red-400 text-sm text-center">{error}</p>}

          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
            Sign Up
          </button>
        </form>
      </div>
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0); opacity: 0.5; }
            50% { transform: translateY(-20px); opacity: 1; }
            100% { transform: translateY(0); opacity: 0.5; }
          }

          .animate-float {
            animation: float 3s infinite ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default Signup;

/* CSS for floating TK animation */

