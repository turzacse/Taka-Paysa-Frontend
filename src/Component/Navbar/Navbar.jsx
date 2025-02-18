// import { useContext, useState } from "react";
// import { Menu, X } from "lucide-react";
// import { AuthContext } from "../../Context/AuthContext";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const {currentUser} = useContext(AuthContext);

//   return (
//     <nav className="bg-[#00796B] text-white fixed w-full shadow-md">
//       <div className=" mx-auto px-6 lg:px-12 flex justify-between items-center h-16">
        
//         {/* Logo */}
//         <img className="h-[50px] rounded-sm" src="/tp2.PNG" />

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-6">
//           <li><a href="#" className="hover:text-[#FF9800] transition">Home</a></li>
//           <li><a href="#" className="hover:text-[#FF9800] transition">Features</a></li>
//           <li><a href="#" className="hover:text-[#FF9800] transition">Pricing</a></li>
//           <li><a href="#" className="hover:text-[#FF9800] transition">Contact</a></li>
//         </ul>

//         {/* Mobile Menu Button */}
//         <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div className={`md:hidden bg-[#00796B] py-4 space-y-4 ${isOpen ? "block" : "hidden"}`}>
//         <a href="#" className="block text-center text-lg hover:text-[#FF9800]">Home</a>
//         <a href="#" className="block text-center text-lg hover:text-[#FF9800]">Features</a>
//         <a href="#" className="block text-center text-lg hover:text-[#FF9800]">Pricing</a>
//         <a href="#" className="block text-center text-lg hover:text-[#FF9800]">Contact</a>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import { useContext, useState } from "react";
import { Menu, X } from "lucide-react";
import { AuthContext } from "../../Context/AuthContext";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <nav className="bg-[#00796B] text-white fixed w-full shadow-md">
      <div className="mx-auto px-6 lg:px-12 flex justify-between items-center h-16">
        
        {/* Logo */}
        <NavLink to="/">
          <img className="h-[50px] rounded-sm" src="/tp2.PNG" alt="Logo" />
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><NavLink to="/" className="hover:text-[#FF9800] transition">Home</NavLink></li>
          <li><NavLink to="/features" className="hover:text-[#FF9800] transition">Features</NavLink></li>
          <li><NavLink to="/pricing" className="hover:text-[#FF9800] transition">Pricing</NavLink></li>
          <li><NavLink to="/contact" className="hover:text-[#FF9800] transition">Contact</NavLink></li>
        </ul>

        {/* Login/Logout Button */}
        {currentUser ? (
          <button
            onClick={() => {
              logout();
              navigate("/login");
            }}
            className="hidden md:block bg-red-600 px-4 py-2 rounded text-white hover:bg-red-700 transition"
          >
            Logout
          </button>
        ) : (
          <NavLink
            to="/login"
            className="hidden md:block bg-white px-4 py-2 rounded text-black hover:bg-gray-200 transition"
          >
            Login
          </NavLink>
        )}

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-[#00796B] py-4 space-y-4 ${isOpen ? "block" : "hidden"}`}>
        <NavLink to="/" className="block pl-6 text-lg hover:text-[#FF9800]" onClick={() => setIsOpen(false)}>Home</NavLink>
        <NavLink to="/features" className="block pl-6 text-lg hover:text-[#FF9800]" onClick={() => setIsOpen(false)}>Features</NavLink>
        <NavLink to="/pricing" className="block pl-6 text-lg hover:text-[#FF9800]" onClick={() => setIsOpen(false)}>Pricing</NavLink>
        <NavLink to="/contact" className="block pl-6 text-lg hover:text-[#FF9800]" onClick={() => setIsOpen(false)}>Contact</NavLink>
        {currentUser ? (
          <button
            onClick={() => {
              logout();
              navigate("/login");
              setIsOpen(false);
            }}
            className="block pl-6 w-full bg-red-600  py-2 rounded text-white hover:bg-red-700 transition text-left"
          >
            Logout
          </button>
        ) : (
          <NavLink
            to="/login"
            className="block pl-6 w-full bg-white py-2 rounded text-black hover:bg-gray-200 transition"
            onClick={() => setIsOpen(false)}
          >
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;