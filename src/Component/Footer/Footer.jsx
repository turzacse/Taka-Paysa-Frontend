import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#37474F] text-white py-10">
      <div className=" mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About Section */}
        <div>
          {/* <h2 className="text-2xl font-bold">TakaPaysa</h2> */}
          <img className="h-[80px] rounded-sm" src="/tp2.PNG" />
          <p className="mt-3 text-gray-300">
            A simple and effective daily income & expense tracker to manage finances effortlessly.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li><a href="#" className="hover:text-[#FF9800] transition">Home</a></li>
            <li><a href="#" className="hover:text-[#FF9800] transition">Features</a></li>
            <li><a href="#" className="hover:text-[#FF9800] transition">Pricing</a></li>
            <li><a href="#" className="hover:text-[#FF9800] transition">Contact</a></li>
          </ul>
        </div>

        {/* Social Media & Contact */}
        <div>
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <div className="flex space-x-4 mt-3">
            <a href="#" className="hover:text-[#FF9800] transition"><Facebook size={24} /></a>
            <a href="#" className="hover:text-[#FF9800] transition"><Twitter size={24} /></a>
            <a href="#" className="hover:text-[#FF9800] transition"><Instagram size={24} /></a>
          </div>
          <p className="mt-3 text-gray-300">Email: support@hisabkhata.com</p>
        </div>

      </div>

      {/* Copyright Section */}
      <div className="text-center mt-8 text-gray-400">
        <p>© {new Date().getFullYear()} HisabKhata. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
