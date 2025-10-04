import React, { useState, useCallback } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import publications from "../data/publications.json";
import Card from "../components/Card";

export default function Papers() {
  const [search, setSearch] = useState("");
  const [init, setInit] = useState(false);

  // Initialize particles engine
  React.useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Filter papers
  const filteredPapers =
    search.trim() === ""
      ? []
      : publications.filter((paper) =>
          paper.Title?.toLowerCase().includes(search.toLowerCase())
        );

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start py-30 px-6 overflow-hidden bg-black text-white">
      {/* Background Particles */}
      {init && (
        <Particles
          id="tsparticles"
          options={{
            background: { color: "#000000" },
            fpsLimit: 120,
            interactivity: {
              events: {
                onHover: { enable: true, mode: "repulse" },
                resize: true,
              },
              modes: { repulse: { distance: 100, duration: 0.5 } },
            },
            particles: {
              color: { value: "#00bfff" },
              links: {
                color: "#00bfff",
                distance: 130,
                enable: true,
                opacity: 0.3,
                width: 1,
              },
              move: {
                enable: true,
                speed: 1.5,
                outModes: { default: "out" },
              },
              number: { value: 80, density: { enable: true, area: 800 } },
              opacity: { value: 0.5 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
          className="absolute inset-0 z-0"
        />
      )}

      {/* Main Content */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <h1 className="text-4xl font-bold text-blue-400 mb-8 text-center">
          🔍 Search Research Papers
        </h1>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Type to search papers by Tags or Title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-2xl px-5 py-3 rounded-xl bg-gray-900/70 text-white 
                     border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 
                     outline-none transition-all duration-300 mb-10 shadow-lg shadow-blue-900/30
                     backdrop-blur-sm"
        />

        {/* Results */}
        <div className="w-full max-w-6xl grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPapers.length > 0 ? (
            filteredPapers.map((paper, index) => (
              <Card key={index} paper={paper} index={index} />
            ))
          ) : search.trim() === "" ? (
            <p className="text-gray-500 text-center col-span-full">
              Start typing to search papers...
            </p>
          ) : (
            <p className="text-gray-400 text-center col-span-full">
              No results found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

