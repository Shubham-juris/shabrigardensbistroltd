import HeroBottom from "../components/home/HeroBottom";
import HeroGallery from "../components/home/HeroGallery";
import HeroSection from "../components/home/HeroSection";
import HeroThree from "../components/home/HeroThree";
import HomeContactUs from "../components/home/HomeContact";
import HomeMap from "../components/home/HomeMap";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <HeroBottom />
      <HeroThree />
      <HeroGallery />
      <HomeContactUs />
      <HomeMap />
    </div>
  );
}
