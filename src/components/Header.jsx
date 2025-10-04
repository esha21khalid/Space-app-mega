import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 left-0 z-50 backdrop-blur-md bg-gradient-to-b from-black via-gray-950 to-black border-b border-gray-800 shadow-lg">
      <div className="relative container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* ✨ Animated Dots Background */}
        <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none"></div>

        {/* 🚀 Logo */}
        <Link
          to="/"
          className="relative text-blue-400 font-extrabold text-2xl tracking-wide hover:text-blue-500 transition duration-300 z-10"
        >
          🚀 NASA SciLens
        </Link>

        {/* 🌌 Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium relative z-10">
          <Link
            to="/"
            className="text-gray-300 hover:text-blue-400 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/papers"
            className="text-gray-300 hover:text-blue-400 transition duration-300"
          >
            Papers
          </Link>
        </nav>

        {/* 📱 Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none text-gray-300 hover:text-blue-400 transition relative z-10"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* 🌠 Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-gray-950 via-gray-900 to-black border-t border-gray-800 shadow-lg animate-fadeIn">
          <nav className="flex flex-col space-y-3 p-4 text-center">
            <Link
              to="/"
              className="text-gray-300 hover:text-blue-400 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/papers"
              className="text-gray-300 hover:text-blue-400 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Papers
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

