import img1 from "../../assets/home/gallery/img1.jpg";
import img2 from "../../assets/home/gallery/img2.jpg";
import img3 from "../../assets/home/gallery/img3.jpg";
import img4 from "../../assets/home/gallery/img4.jpg";
import img5 from "../../assets/home/gallery/img5.jpg";
import img6 from "../../assets/home/gallery/img6.jpg";

const images = [img1, img2, img3, img4, img5, img6];

const HeroGallery = () => {
  return (
    <div className="bg-yellow-100 py-10 px-4">
      <h2 className="text-xl font-serif text-gray-700 mb-2 uppercase">
        Gallery
      </h2>
      <hr className="mb-6 border-gray-400" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-md shadow hover:scale-105 transition-transform duration-300"
          >
            <img
              src={src}
              alt={`Dish ${index + 1}`}
              className="w-full h-60 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroGallery;
