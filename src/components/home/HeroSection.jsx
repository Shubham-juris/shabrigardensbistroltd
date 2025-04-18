import heroImg from "../../assets/home/foodHero.jpg";
import { motion } from "framer-motion";
 // Import your desired texture

const heroTextVariants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeInOut" } },
};

const heroImageVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeInOut" } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

export default function HeroSection() {
  return (
    <div
      className="flex flex-col lg:flex-row items-center justify-between mt-10 px-4 sm:px-8 space-y-8 lg:space-y-0 lg:space-x-8 py-10"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1707274860723-52233290a977?q=80&w=2123&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        backgroundRepeat: "repeat",
        // You can adjust these properties for a better texture effect
        // backgroundSize: "auto",
         backgroundColor: "rgba(255, 255, 255, 5)", // Optional overlay for better text visibility
      }}
    >
      <motion.div
        className="text-4xl sm:text-5xl lg:text-6xl basis-1/2 font-serif font-semibold text-orange-500 space-y-2 text-center lg:text-left border-l-4 pl-4 sm:pl-8" // Increased border thickness for better visibility
        variants={heroTextVariants}
        initial="initial"
        animate="animate"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6, ease: "easeInOut" } }}
        >
          Taste you
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.6, ease: "easeInOut" } }}
          className="text-green-600" // Attractive color
        >
          WILL
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.6, ease: "easeInOut" } }}
        >
          REMEMBER
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.8, duration: 0.6, ease: "easeInOut" } }}
          className="text-lg text-white mt-4" // Added a tagline
        >
          Experience unforgettable flavors crafted with passion.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1, transition: { delay: 1, duration: 0.5, ease: "easeInOut" } }}
          whileHover={{ scale: 1.05, backgroundColor: "#6366f1", color: "white", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }} // Interactive button
          className="bg-green-500 text-white py- px-5 rounded-full mt-6 font-semibold shadow-md"
        >
        
        </motion.button>
      </motion.div>

      <motion.div
        className="mt-8 lg:mt-0 basis-1/2 flex justify-center items-center"
        variants={heroImageVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
      >
        <img
          src={heroImg}
          alt="Delicious Dish" // Improved alt text
          className="w-[90%] sm:w-[80%] lg:w-[100%] border-8 border-white shadow-xl rounded-lg" // Increased border, white color, rounded corners for better aesthetics
        />
      </motion.div>
    </div>
  );
}