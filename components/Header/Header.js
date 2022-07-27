import Navbar from "./Navbar";
import Hero from "./Hero";

const Header = () => {
  return (
    <div className="bg-regal-blue w-full h-16 flex flex-col items-center justify-center py-6">
      <div className="bg-regal-blue absolute z-[-1] w-full h-[800px]"></div>
      <Navbar />
      <Hero />
    </div>
  );
};

export default Header;
