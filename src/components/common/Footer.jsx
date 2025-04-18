import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <motion.footer
      className="bg-white border-t py-8"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Navigation Links */}
      <motion.nav
        className="flex justify-center gap-10 text-sm md:text-base font-medium mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {["Home", "Menu", "Contact"].map((label, idx) => (
          <Link
            key={idx}
            to={`/${label.toLowerCase()}`}
            className="text-gray-700 relative group transition duration-300"
          >
            {label}
            <span className="block h-0.5 w-0 bg-teal-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
        ))}
      </motion.nav>

      {/* Copyright */}
      <motion.div
        className="text-center text-xs text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        &copy; {new Date().getFullYear()}{" "}
        <span className="font-semibold text-gray-700">
          shabrigardensbistro.com
        </span>{" "}
        — All Rights Reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
