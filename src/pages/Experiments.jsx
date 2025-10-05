import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import experimentsData from "../data/experiements.json";

const Experiments = () => {
  const [init, setInit] = useState(false);
  const [experiments, setExperiments] = useState([]);

  // ✅ Load JSON data
  useEffect(() => {
    setExperiments(experimentsData);
  }, []);

  // ✅ Initialize particles animation
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-gray-200 overflow-hidden">
      {/* 🌌 Dot Animation Background */}
      {init && (
        <Particles
          id="experimentParticles"
          className="fixed inset-0 w-full h-full z-0"
          options={{
            background: { color: "#000" },
            fpsLimit: 120,
            interactivity: {
              events: { onHover: { enable: true, mode: "repulse" } },
              modes: { repulse: { distance: 120, duration: 0.5 } },
            },
            particles: {
              number: { value: 120, density: { enable: true, area: 900 } },
              color: { value: ["#00bfff", "#6366f1", "#14b8a6"] },
              shape: { type: "circle" },
              opacity: { value: 0.6 },
              size: { value: { min: 1, max: 3 } },
              links: {
                enable: true,
                distance: 130,
                color: "#38bdf8",
                opacity: 0.3,
                width: 1,
              },
              move: { enable: true, speed: 1.2, outModes: { default: "out" } },
            },
            detectRetina: true,
          }}
        />
      )}

      {/* 🌠 Page Content */}
      <div className="relative z-10 py-20 px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-white drop-shadow-[0_0_25px_rgba(59,130,246,0.7)]">
            🧪 NASA Experiments
          </h1>
          <p className="text-gray-300 mt-4 max-w-3xl mx-auto text-lg leading-relaxed">
            Explore NASA’s biological and physical science experiments designed
            to study life and materials in space.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {experiments.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-900/70 border border-gray-800 rounded-2xl shadow-lg p-6 
                         hover:scale-105 hover:shadow-[0_0_25px_rgba(0,191,255,0.6)] 
                         transition-all duration-300 backdrop-blur-sm"
            >
              <h2 className="text-xl font-semibold text-blue-400 mb-3">
                {exp.Title}
              </h2>
              <p className="text-sm text-gray-400 mb-2">
                <strong>Organism:</strong> {exp.Organism}
              </p>
              <p className="text-sm text-gray-400 mb-2">
                <strong>Factors:</strong> {exp.Factors}
              </p>
              <p className="text-sm text-gray-400 mb-2">
                <strong>Assay Types:</strong> {exp.Assay_Types}
              </p>
              <p className="text-sm text-gray-400 mb-2">
                <strong>Release Date:</strong> {exp.Release_Date}
              </p>
              <p className="text-gray-300 mb-4">{exp.Description}</p>
              <p className="text-sm mb-3">
                <strong>OSD ID:</strong>{" "}
                <span className="text-blue-400">{exp.OSD_ID}</span>
              </p>

              {/* 🌐 URL Button */}
              <a
                href={exp.URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold 
                           px-5 py-2 rounded-full shadow-md transition-transform hover:scale-105"
              >
                🔗 View Experiment
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiments;

