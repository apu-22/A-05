import logoText from "../assets/logo-text.png";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex items-center justify-between p-4 bg-amber-20 container mx-auto  ">
        <div>
          <img src={logoText} alt="Logo" className="h-10 w-auto" />
        </div>

        <div>
          <nav className="flex gap-8">
            <a href="#" className=" hover:text-gray-400">
              Home
            </a>
            <a href="#" className=" hover:text-gray-400">
              Technologies
            </a>
            <a href="#" className=" hover:text-gray-400">
              Projects
            </a>
            <a href="#" className=" hover:text-gray-400">
              About
            </a>
            <a href="#" className=" hover:text-gray-400">
              Contact
            </a>
          </nav>
        </div>
        <div className="flex gap-4 items-center">
          <button className="bg-transparent border-none cursor-pointer">
            Sign In
          </button>
          <button className="text-white bg-[#D91B7E] border border-[#D91B7E] rounded-[20px] px-4 py-2 cursor-pointer">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
