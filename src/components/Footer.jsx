import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-300 border-t border-gray-800 overflow-hidden mt-16">
      
      {/* ✨ Animated Star Dots */}
      <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:24px_24px] opacity-10 animate-pulse"></div>

      {/* ✨ Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-gray-900/20 to-transparent"></div>

      {/* 🌌 Main Footer Content */}
      <div className="relative container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left z-10">
        
        {/* 🚀 Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400 mb-3 tracking-wide">
            🚀  NASA SciLens
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Exploring life beyond Earth  connecting data, discovery, and imagination
            to uncover how life adapts to the stars.
          </p>
        </div>

        {/* 🌠 Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-blue-400 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-blue-300 transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/papers" className="hover:text-blue-300 transition duration-300">
                Papers
              </Link>
            </li>
            <li>
              <Link to="/missions" className="hover:text-blue-300 transition duration-300">
                Missions
              </Link>
             
            </li>
            <li>
              <Link to="/experiments" className="hover:text-blue-300 transition duration-300">
                Biological Experiments
              </Link>
            </li>
           
          </ul>
        </div>

        {/* 🌌 Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-blue-400 mb-3">Connect</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-transform transform hover:scale-110"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:lifespacex@space.org"
              className="hover:text-blue-400 transition-transform transform hover:scale-110"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-transform transform hover:scale-110"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* 🌙 Bottom Bar */}
      <div className="relative border-t border-gray-800 py-4 text-center text-xs text-gray-500 z-10 bg-black/50 backdrop-blur-sm">
        <p className="tracking-wider">
          © {new Date().getFullYear()}{" "}
          <span className="text-blue-400 font-semibold">LifeSpaceX</span> — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

