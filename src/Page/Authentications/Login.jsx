// import { useState, useContext } from "react";
// import { AuthContext } from "../../Context/AuthContext";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const { login } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const success = await login(formData);
//     if (success) {
//       navigate("/"); // Redirect after successful login
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="bg-gray-400 p-8 rounded-lg shadow-md w-96">
//         <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-gray-700">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700">Password</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//             />
//           </div>

//           <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;




import { useState, useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(formData);
    if (success) {
      navigate("/"); // Redirect after successful login
    }
  };

  return (
    <div className="relative h-screen flex justify-center items-center bg-gradient-to-r from-[#00796B] via-[#b9883d] to-[#37474F] overflow-hidden">
      {/* Animated Floating TKs */}
      {[...Array(10)].map((_, i) => (
        <span
          key={i}
          className="absolute text-white text-3xl font-bold animate-float"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          <img className="h-[160px] w-[160px] rounded-full" src="/uru.png" alt="" />
        </span>
      ))}

      <div className="bg-gray-900 bg-opacity-80 p-8 rounded-lg shadow-md w-96 text-white relative z-10">
        <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 bg-gray-700 text-white"
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
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 bg-gray-700 text-white"
            />
          </div>

          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
            Login
          </button>
        </form>
      </div>

      {/* Floating Animation CSS */}
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

export default Login;