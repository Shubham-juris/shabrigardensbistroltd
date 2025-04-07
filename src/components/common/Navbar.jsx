import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/Logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-yellow-200 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="Logo" className="h-20 w-20" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <Link to="/" className="border-b-2 border-black pb-1">
              Home
            </Link>
            <Link to="/menu">Menu</Link>
            <Link to="/contactus">Contact</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-yellow-100 px-4 pb-4 space-y-2 text-sm font-medium">
          <Link to="/" className="block border-b border-black">
            Home
          </Link>
          <Link to="/menu" className="block">
            Menu
          </Link>
          <Link to="/contactus" className="block">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
