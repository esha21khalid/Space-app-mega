import React from "react";
import { useParams, Link } from "react-router-dom";
import publications from "../data/publications.json";

export default function Detail() {
  const { id } = useParams();
  const paper = publications[id];

  if (!paper) {
    return (
      <div className="min-h-screen bg-black flex flex-col justify-center items-center text-center text-white px-6">
        <h1 className="text-2xl font-bold text-red-500 mb-4">Paper not found!</h1>
        <Link
          to="/papers"
          className="text-blue-400 underline hover:text-blue-500 transition"
        >
          ← Back to Papers
        </Link>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <AnimatedBackground />

      {/* --- Main content --- */}
      <div className="relative z-10 pt-28 pb-12 px-4 sm:px-6 md:px-10 flex flex-col items-center">
        <div className="w-full max-w-5xl bg-black border border-gray-800 rounded-2xl p-6 sm:p-8 md:p-10 shadow-[0_0_40px_rgba(59,130,246,0.15)]">
          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-400 mb-6 text-center leading-snug">
            {paper.Title}
          </h1>

          {/* Info section */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 sm:gap-6 mb-8 text-sm sm:text-base text-center">
            {paper.Authors && (
              <p className="text-gray-300">
                <span className="text-blue-400 font-semibold">Authors:</span>{" "}
                {paper.Authors}
              </p>
            )}
            {paper.Journal && (
              <p className="text-gray-400">
                <span className="text-blue-400 font-semibold">Journal:</span>{" "}
                {paper.Journal}
              </p>
            )}
            {paper.Date && (
              <p className="text-gray-500">
                <span className="text-blue-400 font-semibold">Date:</span>{" "}
                {paper.Date}
              </p>
            )}
          </div>

          {/* Sections */}
          <div className="space-y-8 text-gray-300 leading-relaxed">
            {paper.Abstract && <Section title="Abstract" content={paper.Abstract} />}
            {paper.Sections && <Section title="Sections" content={paper.Sections} />}
            {paper.Figures && <Section title="Figures" content={paper.Figures} />}
            {paper.Tables && <Section title="Tables" content={paper.Tables} />}
            {paper.summary && <Section title="Summary" content={paper.summary} />}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12">
            <Link
              to="/papers"
              className="w-full sm:w-auto text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-transform duration-300 hover:scale-105 shadow-lg shadow-blue-900/40"
            >
              ← Back to Papers
            </Link>

            <Link
              to={`/summary/${id}`}
              className="w-full sm:w-auto text-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-xl transition-transform duration-300 hover:scale-105 shadow-lg shadow-indigo-900/40"
            >
              🧠 View Summary
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ title, content }) {
  return (
    <section>
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-400 mb-3 border-b border-gray-800 pb-1">
        {title}
      </h2>
      <p className="text-gray-300 text-justify tracking-wide leading-7 sm:leading-8">
        {content}
      </p>
    </section>
  );
}

function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      <div className="bg-gradient-to-b from-black via-gray-950 to-black animate-pulse-slow"></div>
      <div className="stars"></div>
      <style>{`
        .stars {
          position: absolute;
          width: 200%;
          height: 200%;
          background-repeat: repeat;
          background-size: 50px 50px;
          background-image: radial-gradient(1px 1px at 10px 10px, rgba(255,255,255,0.4), transparent);
          animation: moveStars 100s linear infinite;
          opacity: 0.15;
        }

        @keyframes moveStars {
          from { transform: translateY(0); }
          to { transform: translateY(-1000px); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.9; }
        }

        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}







