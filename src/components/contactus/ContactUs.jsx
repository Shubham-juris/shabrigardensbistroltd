import { motion } from "framer-motion";
import bg_img from "../../assets/contact/contact-background.jpg";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const ContactUs = () => {
  return (
    <motion.div
      className="bg-cover bg-center min-h-screen flex flex-col items-center justify-center px-4 py-10"
      style={{ backgroundImage: `url(${bg_img})` }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h2
        className="text-[#222222] text-4xl md:text-5xl font-serif mb-6 md:mb-10 drop-shadow-lg text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Contact Us
      </motion.h2>

      <motion.div
        className="bg-white bg-opacity-90 rounded-xl shadow-2xl p-6 md:p-10 w-full max-w-md md:max-w-xl text-center space-y-5"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <p className="text-gray-800 font-medium text-base md:text-lg">
          📧 shabribistrogarden@gmail.com
        </p>
        <p className="text-sm md:text-base text-gray-600">
          📍 Sector 13|D, Gandhinagar, Gujarat 382013, India
        </p>
        <p className="text-blue-700 font-semibold text-base md:text-lg">
          📞 +91 98558 25889
        </p>
        <p className="text-sm md:text-base text-gray-600">
          🕘 Open today: 09:00 a.m. – 10:00 p.m.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="bg-yellow-300 text-black font-semibold px-5 py-2 md:px-6 md:py-3 rounded-md shadow-md hover:bg-yellow-400 transition"
        >
          Drop us a line!
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default ContactUs;
