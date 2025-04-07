import Menu from "./Menu";

//first manu
import img1 from "../../assets/menu/im1.jpg";
import img2 from "../../assets/menu/img2.jpg";
import img3 from "../../assets/menu/img3.jpg";
import img4 from "../../assets/menu/img4.jpg";
import img5 from "../../assets/menu/img5.jpg";
import img6 from "../../assets/menu/img6.jpg";

//sweets images
import imgs1 from "../../assets/menu/desert/img1.jpg";
import imgs2 from "../../assets/menu/desert/img2.jpg";
import imgs3 from "../../assets/menu/desert/img3.jpg";
import imgs4 from "../../assets/menu/desert/img4.jpg";
import imgs5 from "../../assets/menu/desert/img5.jpg";
import imgs6 from "../../assets/menu/desert/img6.jpg";

//Kathyavadi images
import imgk1 from "../../assets/menu/kath/img.jfif";
import imgk2 from "../../assets/menu/kath/img1.jfif";
import imgk3 from "../../assets/menu/kath/img3.jfif";
import imgk4 from "../../assets/menu/kath/img3.jfif";
import imgk5 from "../../assets/menu/kath/img4.jfif";
import imgk6 from "../../assets/menu/kath/img5.jfif";

const menuItems3 = [
  { name: "Dhokla", price: 70, image: imgk1 },
  { name: "Poha", price: 100, image: imgk2 },
  { name: "Thepla", price: 65, image: imgk3 },
  { name: "Khandvi", price: 80, image: imgk4 },
  { name: "Fafda Jalebi", price: 110, image: imgk6 },
  { name: "Handvo", price: 70, image: imgk5 },
];

//Second Menu

const menuItems2 = [
  { name: "Baklava", price: 150, image: imgs1 },
  { name: "Tiramisu", price: 200, image: imgs2 },
  { name: "Macarons", price: 120, image: imgs3 },
  { name: "Pavlova", price: 180, image: imgs4 },
  { name: "Churros", price: 130, image: imgs6 },
  { name: "Cannoli", price: 170, image: imgs5 },
];

//Third Menu
const menuItems1 = [
  { name: "Sev Tameta", price: 90, image: img1 },
  { name: "Ringan no Olo", price: 100, image: img2 },
  { name: "Bajra Rotla", price: 80, image: img3 },
  { name: "Undhiyu", price: 150, image: img4 },
  { name: "Khichdi", price: 70, image: img6 },
  { name: "Gujarati Kadhi", price: 60, image: img5 },
];

export default function MenuMain() {
  return (
    <div>
      <div>
        <h1 className="text-center text-4xl mt-8">Breakfast Menu</h1>
        <Menu menuItems={menuItems1} />
      </div>
      <div>
        <h1 className="text-center text-4xl mt-8">Desert</h1>
        <Menu menuItems={menuItems2} />
      </div>
      <div>
        <h1 className="text-center text-4xl mt-8">Kathyavadi</h1>
        <Menu menuItems={menuItems3} />
      </div>
    </div>
  );
}
