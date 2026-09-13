import { useState } from "react";
import logoText from "../assets/logo-text.png";
import hamburgerIcon from "../assets/hamburger.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-100">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-1.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            <img
              src={hamburgerIcon}
              alt="Menu"
              className="h-6 w-6 object-contain"
            />
          </button>

          <div className="hidden md:block">
            <img src={logoText} alt="DevStack Logo" className="h-9 w-auto" />
          </div>
        </div>

        <div className="md:hidden flex items-center">
          <img src={logoText} alt="DevStack Logo" className="h-8 w-auto" />
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
          <a href="#" className="hover:text-slate-900 ">
            Home
          </a>
          <a href="#" className="hover:text-slate-900 ">
            Technologies
          </a>
          <a href="#" className="hover:text-slate-900 ">
            Projects
          </a>
          <a href="#" className="hover:text-slate-900 ">
            About
          </a>
          <a href="#" className="hover:text-slate-900 ">
            Contact
          </a>
        </div>
        <div className="flex items-center gap-4 text-sm font-medium">
          <button className="text-slate-700 font-semibold hover:text-slate-900 cursor-pointer">
            Sign In
          </button>
          <button className="text-white font-semibold bg-[#D91B7E] hover:bg-[#c2146e] rounded-full px-5 py-2 cursor-pointer shadow-xs">
            Sign Up
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 py-3 shadow-lg transition-all">
          <div className="flex flex-col gap-1 text-sm font-medium text-slate-700">
            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-slate-900"
            >
              Home
            </a>
            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-slate-900"
            >
              Technologies
            </a>
            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-slate-900"
            >
              Projects
            </a>
            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-slate-900"
            >
              About
            </a>
            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-slate-900 "
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
