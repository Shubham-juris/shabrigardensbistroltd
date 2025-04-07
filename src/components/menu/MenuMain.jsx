//first manu
import img1 from "../../assets/menu/im1.jpg";
import img2 from "../../assets/menu/img2.jpg";
import img3 from "../../assets/menu/img3.jpg";
import img4 from "../../assets/menu/img4.jpg";
import img5 from "../../assets/menu/img5.jpg";
import img6 from "../../assets/menu/img6.jpg";
import Menu from "./Menu";

const menuItems1 = [
  { name: "Dhokla", price: 70, image: img1 },
  { name: "Poha", price: 100, image: img2 },
  { name: "Thepla", price: 65, image: img3 },
  { name: "Khandvi", price: 80, image: img4 },
  { name: "Fafda Jalebi", price: 110, image: img6 },
  { name: "Handvo", price: 70, image: img5 },
];

//Second Menu

export default function MenuMain() {
  return (
    <div>
      <div>
        <h1 className="text-center text-4xl mt-8">Breakfast Menu</h1>
        <Menu menuItems={menuItems1} />
      </div>
      <div>
        <h1 className="text-center text-4xl mt-8">Kathyavadi</h1>
        <Menu menuItems={menuItems1} />
      </div>
      <div>
        <h1 className="text-center text-4xl mt-8">Desert</h1>
        <Menu menuItems={menuItems1} />
      </div>
    </div>
  );
}
