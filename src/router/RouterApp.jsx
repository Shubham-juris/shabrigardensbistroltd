import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MenuPage from "../pages/MenuPage";
import ContactPage from "../pages/ContactPage";

export default function RouterApp() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/contactus" element={<ContactPage />} />
    </Routes>
  );
}
