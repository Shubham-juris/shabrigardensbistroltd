import { motion } from "framer-motion";
import Menu from "./Menu";

// First Menu Images
import img1 from "../../assets/menu/im1.jpg";
import img2 from "../../assets/menu/img2.jpg";
import img3 from "../../assets/menu/img3.jpg";
import img4 from "../../assets/menu/img4.jpg";
import img5 from "../../assets/menu/img5.jpg";
import img6 from "../../assets/menu/img6.jpg";

// Sweets Images
import imgs1 from "../../assets/menu/desert/img1.jpg";
import imgs2 from "../../assets/menu/desert/img2.jpg";
import imgs3 from "../../assets/menu/desert/img3.jpg";
import imgs4 from "../../assets/menu/desert/img4.jpg";
import imgs5 from "../../assets/menu/desert/img5.jpg";
import imgs6 from "../../assets/menu/desert/img6.jpg";

// Kathiyawadi Images
import imgk1 from "../../assets/menu/kath/img.jfif";
import imgk2 from "../../assets/menu/kath/img1.jfif";
import imgk3 from "../../assets/menu/kath/img3.jfif";
import imgk4 from "../../assets/menu/kath/img3.jfif";
import imgk5 from "../../assets/menu/kath/img4.jfif";
import imgk6 from "../../assets/menu/kath/img5.jfif";

const menuItems1 = [
  { name: "Sev Tameta", price: 90, image: img1 },
  { name: "Ringan no Olo", price: 100, image: img2 },
  { name: "Bajra Rotla", price: 80, image: img3 },
  { name: "Undhiyu", price: 150, image: img4 },
  { name: "Khichdi", price: 70, image: img6 },
  { name: "Gujarati Kadhi", price: 60, image: img5 },
];

const menuItems2 = [
  { name: "Baklava", price: 150, image: imgs1 },
  { name: "Tiramisu", price: 200, image: imgs2 },
  { name: "Macarons", price: 120, image: imgs3 },
  { name: "Pavlova", price: 180, image: imgs4 },
  { name: "Churros", price: 130, image: imgs6 },
  { name: "Cannoli", price: 170, image: imgs5 },
];

const menuItems3 = [
  { name: "Dhokla", price: 70, image: imgk1 },
  { name: "Poha", price: 100, image: imgk2 },
  { name: "Thepla", price: 65, image: imgk3 },
  { name: "Khandvi", price: 80, image: imgk4 },
  { name: "Fafda Jalebi", price: 110, image: imgk6 },
  { name: "Handvo", price: 70, image: imgk5 },
];

export default function MenuMain() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-yellow-50 py-10">
      {/* Breakfast */}
      <motion.div
        className="mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={sectionVariants}
      >
        <h1 className="text-center mt-17 text-4xl font-bold text-gray-800 mb-6 relative">
          Breakfast Menu
          <span className="block w-24 h-1 bg-teal-500 mx-auto mt-2 rounded"></span>
        </h1>
        <Menu menuItems={menuItems1} />
      </motion.div>

      {/* Dessert */}
      <motion.div
        className="mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        variants={sectionVariants}
      >
        <h1 className="text-center text-4xl font-bold text-gray-800 mb-6 relative">
          Dessert
          <span className="block w-24 h-1 bg-teal-500 mx-auto mt-2 rounded"></span>
        </h1>
        <Menu menuItems={menuItems2} />
      </motion.div>

      {/* Kathiyawadi */}
      <motion.div
        className="mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        variants={sectionVariants}
      >
        <h1 className="text-center text-4xl font-bold text-gray-800 mb-6 relative">
          Kathiyawadi
          <span className="block w-24 h-1 bg-teal-500 mx-auto mt-2 rounded"></span>
        </h1>
        <Menu menuItems={menuItems3} />
      </motion.div>
    </div>
  );
}
