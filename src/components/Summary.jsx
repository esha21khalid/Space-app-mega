import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import summarizedPublications from "../data/summarized_publications.json";

export default function Summary() {
  const { id } = useParams();
  const summary = summarizedPublications[id];
  const [isSpeaking, setIsSpeaking] = useState(false);

  if (!summary) {
    return (
      <div className="min-h-screen bg-black flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-2xl md:text-3xl font-bold text-red-400 mb-3">
          ❌ No summary found!
        </h1>
        <Link
          to="/papers"
          className="text-blue-400 underline hover:text-blue-500 transition"
        >
          ← Back to Papers
        </Link>
      </div>
    );
  }

  // 🎧 Text-to-speech function
  const handleSpeak = () => {
    const synth = window.speechSynthesis;

    if (isSpeaking) {
      synth.cancel();
      setIsSpeaking(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(summary.Summary);
    utterance.lang = "en-US";
    utterance.rate = 1;
    utterance.pitch = 1;

    synth.cancel();
    synth.speak(utterance);
    setIsSpeaking(true);

    utterance.onend = () => setIsSpeaking(false);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white flex justify-center items-center px-4 py-16 overflow-hidden">
      {/* Dotted animation background */}
      <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:22px_22px] opacity-10 animate-pulse"></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/70 to-black opacity-80"></div>

      {/* Summary Card */}
      <div className="relative z-10 max-w-3xl w-full bg-gray-800/70 backdrop-blur-md rounded-2xl p-6 sm:p-8 md:p-10 border border-gray-700 shadow-2xl shadow-blue-900/30">

        {/* 🎧 Read Aloud button */}
        <div className="flex justify-end mb-3">
          <button
            onClick={handleSpeak}
            className={`text-xs sm:text-sm px-3 py-1.5 rounded-md font-semibold transition duration-300 ${
              isSpeaking
                ? "bg-red-600 hover:bg-red-700"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isSpeaking ? "🛑 Stop" : "🔊 Read Aloud"}
          </button>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-400 mb-4 text-center drop-shadow-lg">
          📘 Research Summary
        </h1>

        <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-justify">
          {summary.Summary}
        </p>

        {/* Button Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
          <Link
            to="/papers"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-xl transition transform hover:scale-105 shadow-lg shadow-blue-900/40 w-full sm:w-auto text-center"
          >
            ← Back to Papers
          </Link>
        </div>
      </div>
    </div>
  );
}



