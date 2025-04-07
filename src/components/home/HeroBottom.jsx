import hotelimg from "../../assets/home/hotel.jpg";

const HeroBottom = () => {
  return (
    <div className="hero-bottom py-8">
      <h2 className="hero-title text-3xl font-bold text-left pb-8 text-gray-800 border-b mb-4">
        About Shabri Garden Bistro
      </h2>
      <div className="hero-image-container flex justify-center mb-6 mt-12">
        <img
          src={hotelimg}
          alt="Shabri Garden Bistro"
          className="hero-image shadow-lg"
        />
      </div>
    </div>
  );
};

export default HeroBottom;
