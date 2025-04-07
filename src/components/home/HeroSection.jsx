import heroImg from "../../assets/home/foodHero.jpg";

export default function HeroSection() {
return (
    <div className="flex flex-col lg:flex-row items-center justify-between mt-10 px-4 sm:px-8 space-y-8 lg:space-y-0 lg:space-x-8 py-10">
        <div className="text-4xl sm:text-5xl lg:text-6xl basis-1/2 font-serif font-semibold text-gray-800 space-y-2 text-center lg:text-left border-l-2 pl-4 sm:pl-8">
            <h1>Taste you</h1>
            <h1>WILL</h1>
            <h1>REMEMBER</h1>
        </div>

        <div className="mt-8 lg:mt-0 basis-1/2 flex justify-center items-center">
            <img src={heroImg} alt="Dish" className="w-[90%] sm:w-[80%] lg:w-[100%] border-4 shadow-lg" />
        </div>
    </div>
);
}
