import { motion } from "framer-motion";
import img1 from "../../assets/home/gallery/img1.jpg";
import img2 from "../../assets/home/gallery/img2.jpg";
import img3 from "../../assets/home/gallery/img3.jpg";
import img4 from "../../assets/home/gallery/img4.jpg";
import img5 from "../../assets/home/gallery/img5.jpg";
import img6 from "../../assets/home/gallery/img6.jpg";

const images = [img1, img2, img3, img4, img5, img6];

// Animation variants for container and individual items
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const HeroGallery = () => {
  return (
    <div className="bg-yellow-50 py-16 px-4 md:px-16">
      <motion.h2
        className="text-3xl md:text-4xl font-serif font-bold text-center text-gray-800 uppercase tracking-wide mb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Gallery
      </motion.h2>

      <motion.hr
        className="mb-10 border-gray-400 w-24 mx-auto border-t-4 border-teal-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ transformOrigin: "center" }}
      />

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {images.map((src, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <img
              src={src}
              alt={`Dish ${index + 1}`}
              className="w-full h-60 object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default HeroGallery;
