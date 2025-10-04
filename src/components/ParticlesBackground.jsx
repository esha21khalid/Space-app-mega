import Particles, { initParticlesEngine } from "@tsparticles/react";
import React,{ useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    init && (
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: "#111f", // dark bg
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "connect" }, // 👈 sirf hover/touch par
              onClick: { enable: false },
            },
            modes: {
              connect: {
                distance: 180,
                links: { opacity: 0.6 },
              },
            },
          },
          particles: {
            number: { value: 70 },
            color: { value: "#00bfff" },
            links: {
              enable: false, // 👈 always visible lines disabled
            },
            move: {
              enable: true,
              speed: 1.2,
            },
            opacity: { value: 0.4 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
      />
    )
  );
};

export default ParticlesBackground;
