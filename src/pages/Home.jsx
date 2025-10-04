import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function Home() {
  const navigate = useNavigate();
  const [init, setInit] = useState(false);

  // Initialize particle engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-black overflow-hidden text-center">
      {/* Particle Background */}
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
      <div className="relative z-10 px-6 flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-400 mb-4 drop-shadow-lg">
          🌌 Welcome to NASA SciLens
        </h1>

        <p className="text-gray-300 text-sm md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Discover how life thrives beyond Earth. Explore NASA’s space biology
          research — plants, microbes, and animals adapting to the final frontier.
        </p>

        <button
          onClick={() => navigate("/papers")}
          className="relative inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-blue-600 rounded-full transition-all hover:bg-blue-500 hover:shadow-[0_0_20px_2px_rgba(59,130,246,0.6)] active:scale-95"
        >
          🚀 Explore Research Papers
        </button>
      </div>

      {/* Floating Glow Orbs (Extra Decoration) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute animate-pulse w-3 h-3 bg-blue-400 rounded-full top-[20%] left-[25%] opacity-70 blur-sm"></div>
        <div className="absolute animate-pulse w-4 h-4 bg-cyan-300 rounded-full top-[60%] left-[65%] opacity-60 blur-md"></div>
        <div className="absolute animate-pulse w-2 h-2 bg-purple-400 rounded-full top-[80%] left-[45%] opacity-50 blur-sm"></div>
      </div>
    </div>
  );
}

