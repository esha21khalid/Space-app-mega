import React from "react";
import { Link } from "react-router-dom";

export default function PaperCard({ paper, index }) {
  return (
    <div
      className="relative group bg-gradient-to-b from-gray-950 via-gray-900 to-black rounded-2xl p-6 border border-gray-800 
      shadow-md hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-500 
      hover:scale-[1.03] flex flex-col justify-between overflow-hidden"
    >
      {/* ✨ Subtle Dot Pattern Background */}
      <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.04] pointer-events-none"></div>

      {/* 💡 Glow Overlay on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-all duration-500 bg-blue-500 blur-2xl"></div>

      {/* 📄 Card Content */}
      <div className="relative z-10">
        <h2 className="text-xl font-semibold text-blue-400 mb-2 leading-snug">
          {paper.Title}
        </h2>
        <p className="text-sm text-gray-300 mb-2">
          <strong className="text-gray-400">Authors:</strong> {paper.Authors}
        </p>
        <p className="text-sm text-gray-400 mb-2">
          <strong className="text-gray-500">Journal:</strong> {paper.Journal}
        </p>
        <p className="text-xs text-gray-500 italic">{paper.Date}</p>
      </div>

      {/* 🚀 Button */}
      <Link
        to={`/paper/${index}`}
        className="relative mt-5 inline-block text-center bg-gradient-to-r from-blue-600 to-cyan-500 
        hover:from-blue-500 hover:to-cyan-400 text-white font-semibold py-2.5 rounded-lg 
        transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] active:scale-95 z-10"
      >
        View Details →
      </Link>
    </div>
  );
}



