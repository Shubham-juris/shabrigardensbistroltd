import { motion } from "framer-motion";
import hotelimg from "../../assets/home/hotel.jpg";

const HeroBottom = () => {
  return (
    <div className="hero-bottom py-16 px-4 md:px-16 bg-white">
      <motion.h2
        className="hero-title text-center pt-11 text-4xl md:text-5xl font-extrabold text-gray-800 border-b-4 border-teal-500 inline-block mx-auto pb-4 mb-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        About Shabri Garden Bistro
      </motion.h2>

      <motion.div
        className="hero-image-container flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        <img
          src={hotelimg}
          alt="Shabri Garden Bistro"
          className="hero-image rounded-2xl shadow-2xl w-full max-w-4xl object-cover"
        />
      </motion.div>
    </div>
  );
};

export default HeroBottom;
