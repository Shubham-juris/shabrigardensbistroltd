import chef from "../../assets/home/chef.jpg";
import ourproduct from "../../assets/home/ourproduct.jpg";

export default function HeroThree() {
  return (
    <div className="py-10">
      <h2 className="text-center text-3xl font-bold mb-6">Our Team</h2>
      <p className="text-center text-lg mb-8">
        Our team consists of experienced professionals who are passionate about
        what they do and dedicated to providing the best possible service to our
        customers.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-10 px-6">
        <div className="w-full md:w-1/2">
          <img src={chef} alt="Food products" className="shadow-md w-full" />
          <h3 className="text-xl font-semibold mb-4 mt-4 md:mt-0">
            Our Mission
          </h3>
          <p>
            At Shabri Garden Bistro, immerse yourself in the rich history of
            Gujarati cuisine and savor the authentic flavors of{" "}
            <span className="italic">Gujarati food</span>.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src={ourproduct}
            alt="Team cooking"
            className="shadow-md w-full"
          />
          <h3 className="text-xl font-semibold mb-4 mt-4 md:mt-0">
            Our Products
          </h3>
          <p>
            We offer a wide range of high-quality food by keeping in mind the
            security measure.
          </p>
        </div>
      </div>
    </div>
  );
}
