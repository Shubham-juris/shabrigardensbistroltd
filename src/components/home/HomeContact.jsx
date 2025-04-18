import contact from "../../assets/home/contact.jpg";

const HomeContactUs = () => {
  return (
    <div className=" py-10 px-6">
      {/* Header */}
      <h2 className="text-center text-xl font-serif text-gray-700 uppercase mb-1">
        Contact Us
      </h2>
      <hr className=" mx-auto border-gray-400 mb-8" />

      {/* Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Text Info */}
        <div className="space-y-4 text-gray-700">
          <p>
            We love our customers, so feel free to visit during normal business
            hours.
          </p>

          <div>
            <h3 className="font-semibold text-lg">Shabri Garden Bistro</h3>
            <p>Sector 13,Ludhiana, India</p>
            <p className="text-black mt-1 font-medium">+91 9855825889</p>
          </div>

          <button className="mt-4 bg-black text-white px-6 py-2 font-semibold rounded hover:bg-gray-800 transition">
            Drop us a line!
          </button>
        </div>

        {/* Right Image */}
        <div>
          <img
            src={contact}
            alt="Soup Dish"
            className="w-full h-80 object-cover rounded shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeContactUs;
