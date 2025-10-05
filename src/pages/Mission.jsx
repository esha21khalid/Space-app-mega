import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Mission = () => {
  const navigate = useNavigate();
  const [init, setInit] = useState(false);

  // ✅ Initialize particles immediately
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const missions = [
    {
      name: "Apollo 11",
      year: 1969,
      description:
        "The first successful crewed lunar landing mission. Neil Armstrong and Buzz Aldrin became the first humans to walk on the Moon.",
      status: "Completed",
    },
    {
      name: "Voyager 1",
      year: 1977,
      description:
        "A space probe launched to study the outer Solar System. It is now the farthest human-made object from Earth, exploring interstellar space.",
      status: "Active",
    },
    {
      name: "Mars Perseverance Rover",
      year: 2020,
      description:
        "A rover designed to explore Mars' surface and collect rock samples to search for signs of ancient life.",
      status: "Active",
    },
    {
      name: "James Webb Space Telescope",
      year: 2021,
      description:
        "The most advanced space telescope designed to observe distant galaxies, stars, and planetary systems in unprecedented detail.",
      status: "Active",
    },
    {
      name: "Artemis I",
      year: 2022,
      description:
        "An uncrewed mission testing NASA’s Space Launch System and Orion spacecraft for future lunar exploration missions.",
      status: "Completed",
    },
  ];

  return (
    <div className="relative min-h-screen bg-black text-gray-200 overflow-hidden">
      {/* 🌌 Full-Screen Particle Background */}
      {init && (
        <Particles
          id="missionParticles"
          className="fixed inset-0 w-full h-full z-0"
          options={{
            background: { color: "#000" },
            fpsLimit: 120,
            interactivity: {
              events: {
                onHover: { enable: true, mode: "repulse" },
                resize: true,
              },
              modes: { repulse: { distance: 120, duration: 0.5 } },
            },
            particles: {
              number: { value: 100, density: { enable: true, area: 900 } },
              color: { value: ["#00bfff", "#38bdf8", "#6366f1", "#14b8a6"] },
              shape: { type: "circle" },
              opacity: { value: 0.5 },
              size: { value: { min: 1, max: 3 } },
              links: {
                enable: true,
                distance: 130,
                color: "#00bfff",
                opacity: 0.3,
                width: 1,
              },
              move: {
                enable: true,
                speed: 1.2,
                outModes: { default: "out" },
              },
            },
            detectRetina: true,
          }}
        />
      )}

      {/* 🌠 Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center py-20 px-6">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-[0_0_25px_rgba(59,130,246,0.7)]">
            🚀 NASA Missions
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-3xl mx-auto leading-relaxed">
            Explore NASA’s legendary missions that shaped our understanding of
            the universe  from Apollo to Artemis and beyond.
          </p>
        </div>

        {/* Mission Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl">
          {missions.map((mission, index) => (
            <div
              key={index}
              className="bg-gray-900/70 border border-gray-800 rounded-2xl shadow-lg p-6 
                         hover:scale-105 hover:shadow-[0_0_25px_rgba(0,191,255,0.6)] 
                         transition-all duration-300 backdrop-blur-sm"
            >
              <h2 className="text-2xl font-bold text-blue-400 mb-3">
                {mission.name}
              </h2>
              <p className="text-sm text-gray-400 mb-2">
                <strong>Year:</strong> {mission.year}
              </p>
              <p className="text-gray-300 mb-3 leading-relaxed">
                {mission.description}
              </p>
              <p
                className={`font-semibold ${
                  mission.status === "Active" ? "text-green-400" : "text-gray-500"
                }`}
              >
                Status: {mission.status}
              </p>
            </div>
          ))}
        </div>

        {/* Back Button */}
        <div className="flex justify-center mt-16">
          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-10 py-3 rounded-full 
                       shadow-lg transition-all transform hover:scale-110 
                       hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]"
          >
            🔙 Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mission;





