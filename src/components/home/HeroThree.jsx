import { motion } from "framer-motion";
import chef from "../../assets/home/chef.jpg";
import ourproduct from "../../assets/home/ourproduct.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
};

export default function HeroThree() {
  return (
    <div className="py-10">
      <motion.h2
        className="text-center text-3xl font-bold mb-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        Our Team
      </motion.h2>

      <motion.p
        className="text-center text-lg mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        Our team consists of experienced professionals who are passionate about
        what they do and dedicated to providing the best possible service to our
        customers.
      </motion.p>

      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-10 px-6">
        {/* Left Side */}
        <motion.div
          className="w-full md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariant}
        >
          <motion.img
            src={chef}
            alt="Food products"
            className="shadow-md w-full rounded-2xl"
            whileHover={{ scale: 1.03 }}
          />
          <motion.h3
            className="text-xl font-semibold mb-4 mt-4 md:mt-0"
            variants={fadeInUp}
          >
            Our Mission
          </motion.h3>
          <motion.p variants={fadeInUp}>
            At Shabri Garden Bistro, immerse yourself in the rich history of
            Gujarati cuisine and savor the authentic flavors of{" "}
            <span className="italic">Gujarati food</span>.
          </motion.p>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="w-full md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariant}
        >
          <motion.img
            src={ourproduct}
            alt="Team cooking"
            className="shadow-md w-full rounded-2xl"
            whileHover={{ scale: 1.03 }}
          />
          <motion.h3
            className="text-xl font-semibold mb-4 mt-4 md:mt-0"
            variants={fadeInUp}
          >
            Our Products
          </motion.h3>
          <motion.p variants={fadeInUp}>
            We offer a wide range of high-quality food by keeping in mind the
            security measure.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
