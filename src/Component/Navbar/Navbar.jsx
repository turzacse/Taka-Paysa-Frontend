import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#00796B] text-white fixed w-full shadow-md">
      <div className=" mx-auto px-6 lg:px-12 flex justify-between items-center h-16">
        
        {/* Logo */}
        <img className="h-[50px] rounded-sm" src="/tp2.PNG" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#" className="hover:text-[#FF9800] transition">Home</a></li>
          <li><a href="#" className="hover:text-[#FF9800] transition">Features</a></li>
          <li><a href="#" className="hover:text-[#FF9800] transition">Pricing</a></li>
          <li><a href="#" className="hover:text-[#FF9800] transition">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-[#00796B] py-4 space-y-4 ${isOpen ? "block" : "hidden"}`}>
        <a href="#" className="block text-center text-lg hover:text-[#FF9800]">Home</a>
        <a href="#" className="block text-center text-lg hover:text-[#FF9800]">Features</a>
        <a href="#" className="block text-center text-lg hover:text-[#FF9800]">Pricing</a>
        <a href="#" className="block text-center text-lg hover:text-[#FF9800]">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
