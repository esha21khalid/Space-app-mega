import React, { useState, useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import publications from "../data/publications.json";
import Card from "../components/Card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function Papers() {
  const [search, setSearch] = useState("");
  const [init, setInit] = useState(false);
  const [showChart, setShowChart] = useState(false);
  const [showAll, setShowAll] = useState(false);

  // 🌌 Initialize particles
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  // 🔍 Filtered papers (show 3 by default)
  const filteredPapers =
    search.trim() === ""
      ? showAll
        ? publications
        : publications.slice(0, 3)
      : publications.filter((paper) =>
          paper.Title?.toLowerCase().includes(search.toLowerCase())
        );

  // 📊 Tag count for only visible papers (search or all)
  const tagCount = {};
  filteredPapers.forEach((paper) => {
    if (Array.isArray(paper.Tags)) {
      paper.Tags.forEach((tag) => {
        tagCount[tag] = (tagCount[tag] || 0) + 1;
      });
    } else if (typeof paper.Tags === "string") {
      paper.Tags.split(",").forEach((tag) => {
        const cleanTag = tag.trim();
        if (cleanTag) {
          tagCount[cleanTag] = (tagCount[cleanTag] || 0) + 1;
        }
      });
    }
  });

  // 🎨 Random colorful palette
  const colors = [
    "#00bfff",
    "#ff6b6b",
    "#ffd93d",
    "#9b5de5",
    "#00f5d4",
    "#ff8fab",
    "#f15bb5",
    "#38b000",
    "#ff9f1c",
    "#4361ee",
  ];

  const chartData = Object.entries(tagCount).map(([name, value], index) => ({
    name,
    value,
    fill: colors[index % colors.length],
  }));

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start py-20 px-6 overflow-hidden bg-black text-white">
      {/* 🌌 Background animation */}
      {init && (
        <Particles
          id="tsparticles"
          options={{
            background: { color: "#000000" },
            fpsLimit: 120,
            interactivity: {
              events: { onHover: { enable: true, mode: "repulse" }, resize: true },
              modes: { repulse: { distance: 100, duration: 0.5 } },
            },
            particles: {
              color: { value: ["#00bfff", "#ff6b6b", "#ffd93d"] },
              links: {
                color: "#00bfff",
                distance: 130,
                enable: true,
                opacity: 0.3,
                width: 1,
              },
              move: { enable: true, speed: 1.5, outModes: { default: "out" } },
              number: { value: 70, density: { enable: true, area: 800 } },
              opacity: { value: 0.5 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
          className="absolute inset-0 z-0"
        />
      )}

      {/* 📄 Main content */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <h1 className="text-4xl font-bold text-blue-400 mb-8 text-center">
          📚 Research Papers
        </h1>

        {/* 🔎 Search bar */}
        <input
          type="text"
          placeholder="Search by paper title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-2xl px-5 py-3 rounded-xl bg-gray-900/70 text-white 
                     border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 
                     outline-none transition-all duration-300 mb-10 shadow-lg shadow-blue-900/30
                     backdrop-blur-sm"
        />

        {/* 🧾 Cards */}
        <div className="w-full max-w-6xl grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPapers.length > 0 ? (
            filteredPapers.map((paper, index) => (
              <Card key={index} paper={paper} index={index} />
            ))
          ) : (
            <p className="text-gray-400 text-center col-span-full">
              No papers found.
            </p>
          )}
        </div>

        {/* 🔘 Show More/Less */}
        {search.trim() === "" && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-8 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg shadow-md shadow-blue-900/30 transition transform hover:scale-105"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        )}

        {/* 📊 Toggle Chart Button */}
        <button
          onClick={() => setShowChart(!showChart)}
          className="mt-10 bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 text-white px-6 py-3 rounded-lg shadow-lg shadow-purple-900/40 transition transform hover:scale-105"
        >
          {showChart ? "Hide Chart" : "📊 View Chart"}
        </button>

        {/* 📈 Colorful Bar Chart */}
        {showChart && (
          <div className="mt-10 w-full max-w-3xl bg-gray-900/80 p-6 rounded-2xl border border-gray-700 shadow-lg">
            <h2 className="text-2xl font-semibold text-blue-400 mb-6 text-center">
              Tag Frequency (Dynamic Bar Graph)
            </h2>
            {chartData.length > 0 ? (
              <ResponsiveContainer width="100%" height={350}>
                <BarChart
                  data={chartData}
                  margin={{ top: 20, right: 30, left: 0, bottom: 50 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis
                    dataKey="name"
                    stroke="#ccc"
                    angle={-20}
                    textAnchor="end"
                    height={60}
                  />
                  <YAxis stroke="#ccc" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1f2937",
                      borderRadius: "8px",
                      border: "1px solid #333",
                    }}
                    itemStyle={{ color: "#fff" }}
                  />
                  {chartData.map((entry, index) => (
                    <Bar
                      key={index}
                      dataKey="value"
                      fill={entry.fill}
                      barSize={40}
                      radius={[6, 6, 0, 0]}
                      animationDuration={900}
                    />
                  ))}
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <p className="text-gray-400 text-center">No tags available.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}







