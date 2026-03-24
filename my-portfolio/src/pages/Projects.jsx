import { useState } from "react";

const PROJECTS = [

  {
    id: "YouTubeWeb",
    title: "YouTube Web Platform",
    subtitle: "React",
    category: "Fullstack & Backend",
    image: "/youtubeWeb.png",
    description:
      "Full YouTube-style web platform with authentication, video upload and playback.",
    tech: ["React","JavaScript", "Node.js", "REST API" , "JWT"],
    github: "https://github.com/maaayan3330/YouTube-web.git",
  },

  {
    id: "YouTubeServer",
    title: "YouTube Backend Server",
    subtitle: "Node.js",
    category: "Fullstack & Backend",
    image: "/code.webp",
    description:
      "Node.js backend with Express and MongoDB using MVC architecture.",
    tech: ["Node.js", "MongoDB", "MVC"],
    github: "https://github.com/maaayan3330/YouTube---server.git",
  },

  {
    id: "MemoryGame",
    title: "Memory Game – Brooklyn Nine-Nine Edition",
    subtitle: "React",
    category: "Fullstack & Backend",
    image: "/memoryGame.png",
    description:
      "Interactive memory card game built with React and Vite featuring card flip animations, move counter, and win detection.",
    tech: ["React", "JavaScript", "Vite"],
    github: "https://github.com/maaayan3330/MemoryGame.git",
    demo: "https://memory-game-two-rosy.vercel.app/",
  },
  {
  id: "WordScramble",
  title: "Word Scramble Game",
  subtitle: "React",
  category: "Fullstack & Backend",
  image: "/game_src.png",
  description:
    "Interactive word puzzle game built with React and Vite featuring random word generation, shuffled letters, hint system, smart input navigation, and win detection.",
  tech: ["React", "JavaScript", "Vite", "Tailwind CSS"],
  github: "https://github.com/maaayan3330/Word-Scramble.git",
  demo: "https://word-scramble-orcin-eight.vercel.app/",
},
  {
    id: "TicTacToe",
    title: "Tic-Tac-Toe – React Game",
    subtitle: "React",
    category: "Fullstack & Backend",
    image: "/tictoc.png",
    description:
      "Interactive Tic-Tac-Toe game built with React and Vite. Includes dynamic board updates, player name editing, and automatic win or draw detection.",
    tech: ["React", "JavaScript", "Vite"],
    github: "https://github.com/maaayan3330/Tic-Tac-Toe.git",
    demo: "https://tic-tac-toe-eight-gamma-91.vercel.app/",
  },

  {
    id: "Portfolio",
    title: "Personal Portfolio",
    subtitle: "React",
    category: "Fullstack & Backend",
    image: "/port.png",
    description:
      "Harry Potter themed developer portfolio built with React, Tailwind and Framer Motion.",
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com/maaayan3330/Portfolio.git",
  },
  {
    id: "YouTubeMobile",
    title: "YouTube Mobile App",
    subtitle: "Android",
    category: "Mobile Development",
    image: "/youtubemobile.png",
    description:
      "Android application allowing video upload and playback connected to a Node.js backend.",
    tech: ["Java", "Android Studio"],
    github: "https://github.com/maaayan3330/Project-YouTube-Android.git",
  },

  {
    id: "Sokoban1",
    title: "Sokoban 1 AI",
    subtitle: "Python",
    category: "AI & Algorithms",
    image: "/code.webp",
    description:
      "AI agent solving Sokoban puzzles using A* and Greedy Best-First Search with custom heuristics.",
    tech: ["Python", "A*", "GBFS", "Heuristics"],
    github: "https://github.com/maaayan3330/AI_exe1.git",
  },

  {
    id: "Sokoban2",
    title: "Sokoban 2 AI",
    subtitle: "Python",
    category: "AI & Algorithms",
    image: "/code.webp",
    description:
      "Extended Sokoban puzzle into a stochastic grid world using Markov Decision Processes and Value Iteration.",
    tech: ["Python", "MDP", "Value Iteration"],
    github: "https://github.com/maaayan3330/AI2.git",
  },

  {
    id: "Arkanoid",
    title: "Arkanoid Game",
    subtitle: "Java",
    category: "Java & OOP Projects",
    image: "/ark.png",
    description:
      "Developed a full-featured Arkanoid-style game in Java using OOP principles and modular design.",
    tech: ["Java", "OOP"],
    github: "https://github.com/maaayan3330/Arkanoid-Project.git",
  },
];

const CATEGORIES = [
  "Fullstack & Backend",
  "Mobile Development",
  "AI & Algorithms",
  "Java & OOP Projects",
];

function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition">

      <img
      src={project.image}
      alt={project.title}
      className="h-64 w-full object-cover"
    />

      <div className="p-4">

        <h3 className="text-lg font-semibold text-indigo-900">
          {project.title}
        </h3>

        <p className="text-sm text-gray-500 mb-2">{project.subtitle}</p>

        <p className="text-sm text-gray-700 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-3">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded"
            >
              {t}
            </span>
          ))}
        </div>

       <div className="flex gap-4 mt-4">

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-indigo-600 hover:underline"
          >
            View on GitHub →
          </a>

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-yellow-600 font-medium hover:underline"
            >
              Try it live →
            </a>
          )}

        </div>

      </div>
    </div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("Fullstack & Backend");

  const filteredProjects = PROJECTS.filter(
    (p) =>
      p.category === activeCategory ||
      (activeCategory === "Java & OOP Projects" && p.tech.includes("Java"))
  );

  return (
    <main className="min-h-screen bg-[#f5f5f5] px-6 py-10">

      <div className="max-w-6xl mx-auto">

        <header className="text-center mb-10">
          <h1 className="font-harry text-5xl text-yellow-500 drop-shadow-[0_0_10px_rgba(255,215,0,0.35)]">
            Projects
          </h1>
        </header>

        <div className="flex flex-wrap justify-center gap-4 mb-10">

          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-xl font-medium transition
                ${
                  activeCategory === cat
                    ? "bg-yellow-500 text-black"
                    : "bg-indigo-900 text-yellow-200 hover:bg-indigo-800"
                }`}
            >
              {cat}
            </button>
          ))}

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredProjects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}

        </div>

      </div>

    </main>
  );
}