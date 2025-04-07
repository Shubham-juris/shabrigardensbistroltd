import bg_img from "../../assets/contact/contact-background.jpg";

const ContactUs = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen flex flex-col items-center justify-center px-4 py-10"
      style={{
        backgroundImage: `url(${bg_img})`,
      }}
    >
      <h2 className="text-[#222222] text-3xl md:text-4xl font-serif mb-6 md:mb-8 drop-shadow-lg text-center">
        Contact Us
      </h2>

      <div className="bg-white bg-opacity-90 rounded-md shadow-lg p-6 md:p-8 w-full max-w-md md:max-w-xl text-center space-y-4">
        <p className="text-gray-700 font-medium text-base md:text-lg">
          shabribistrogarden@gmail.com
        </p>
        <p className="text-sm md:text-base text-gray-500">
          Sector 13|D Gandhinagar, Gujarat 382013, India
        </p>
        <p className="text-blue-700 font-semibold text-base md:text-lg">
          +91 9855825889
        </p>
        <p className="text-sm md:text-base text-gray-500">
          Open today 09:00 a.m. – 10:00 p.m.
        </p>

        <button className="bg-yellow-300 text-black font-semibold px-4 py-2 md:px-5 md:py-2 rounded-md shadow-md hover:bg-yellow-400 transition">
          Drop us a line!
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
