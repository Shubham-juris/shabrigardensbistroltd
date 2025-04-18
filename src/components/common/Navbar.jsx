import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logo/Logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="bg-gray-100 shadow-md fixed top-0 left-0 right-0 z-50"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between itemis-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-16 w-16 rounded-full shadow-lg" />
            <h1 className="text-lg font-bold text-gray-700">ShabriGardensBistro</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 text-sm font-semibold text-gray-700">
            <Link to="/" className="hover:text-teal-600 transition-colors duration-300">
              Home
            </Link>
            <Link to="/menu" className="hover:text-teal-600 transition-colors duration-300">
              Menu
            </Link>
            <Link to="/contactus" className="hover:text-teal-600 transition-colors duration-300">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-yellow-50 px-6 pt-4 pb-6 space-y-4 text-sm font-medium text-gray-700 shadow-md"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block hover:text-teal-600 border-b border-gray-300 pb-2"
            >
              Home
            </Link>
            <Link
              to="/menu"
              onClick={() => setIsOpen(false)}
              className="block hover:text-teal-600 border-b border-gray-300 pb-2"
            >
              Menu
            </Link>
            <Link
              to="/contactus"
              onClick={() => setIsOpen(false)}
              className="block hover:text-teal-600"
            >
              Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;