import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FROG_IMG = "/chocolate-frog.png";

const PROJECTS = [
  { id: "Arkanoid Game", title: "Arkanoid Game", subtitle: "Java",
    description: "Developed a full-featured Arkanoid-style game in Java, applying key OOP principles.Implemented listeners, inheritance, and interfaces to handle user input, collisions, and game flow.The project demonstrates a strong understanding of Java architecture, encapsulation, and modular design.",
    tech: ["OOP", "Java"],
    github: "https://github.com/maaayan3330/Arkanoid-Project.git"
  },
  { id: "Sokoban 1 AI", title: "Sokoban 1 AI", subtitle: "Python",
    description: "Developed intelligent agent to solve the Sokoban: puzzle a pressure-plate game requiring door/key logic and spatial reasoning. Implemented A* and Greedy Best-First Search (GBFS) with a custom heuristic combining Manhattan distance and door penalties. Demonstrated strong understanding of state-space search, heuristic design, and goal-oriented planning.",
    tech: ["Python", "A* Search", "Heuristic Functions", "Path Planning", "GBFS"],
    github: "https://github.com/maaayan3330/AI_exe1.git"
  },
  { id: "Sokoban 2 AI", title: "Sokoban 2 AI", subtitle: "Python",
    description: "A direct continuation of the KobanGan (Assignment 1) puzzle, this project extended the deterministic environment into a stochastic grid world. Implemented an intelligent controller based on Markov Decision Processes (MDP) and Value Iteration, using rewards and transition probabilities. Integrated the deterministic A* path as a guiding heuristic for optimal policy learning under uncertainty.",
    tech: ["Python", "MDP", "Value Iteration", "A* Guidance", "Stochastic AI"],
    github: "https://github.com/maaayan3330/AI2.git"
  },
  { id: "Seminar on distributed algorithms", title: "Seminar", subtitle: "distributed algorithms - PN Models",
    description: "A seminar exploring distributed computation through Port-Numbered (PN) networks. Implemented and analyzed distributed algorithms such as: 3-coloring in path graphs, using local state machines and synchronous message passing. Maximal matching in bipartite graphs, with formal runtime and correctness proofs. The project emphasized understanding communication rounds, state transitions, and local decision-making in distributed systems.",
    tech: ["Distributed Systems", "PN Model", "Graph Algorithms", "Synchrony"],
    github: "https://github.com/maaayan3330/Seminar-on-distributed-algorithms.git"
  },
  { id: "portfolio", title: "Personal Portfolio", subtitle: "React",
    description: "Designed and developed a Harry Potter inspired personal portfolio website with rich micro-interactions and magical aesthetics. Built using React, Vite, and Tailwind CSS, featuring interactive “Chocolate Frog” project cards, and smooth animations powered by Framer Motion. The project demonstrates strong frontend architecture, UI/UX design, and creative component logic.",
    tech: ["React", "Vite", "Tailwind", "Framer Motion", "UX Design", "Animation"],
    github: "https://github.com/maaayan3330/Portfolio.git"
  },
  { id: "YouTube Mobile App", title: "YouTube Mobile App", subtitle: "Android Studio",
    description: "Developed a YouTube-style Android application as part of a team of three, within a complete client–server system that also included a React-based web platform. The app allows video upload and playback, connecting directly to a Node.js server with a MongoDB database where all user data and media are stored. Focused on building a smooth, modern interface and ensuring full synchronization between the mobile app and the website.",
    tech: ["Java", "Android Studio", "Room"], 
    github: "https://github.com/maaayan3330/Project-YouTube-Android.git"
  },
  { id: "YouTube Web Platform", title: "YouTube Web Platform", subtitle: "React",
    description: "Developed a YouTube-style web platform using React, as part of a team of three, alongside the Android app and shared backend server. Implemented video upload, playback, and user authentication through a Node.js + MongoDB REST API, where all videos and user data are securely stored. Designed a clean and responsive interface with HTML, CSS, and React components, ensuring smooth integration with the Android version.",
    tech: ["Node.js", "Express", "React", "CSS", "HTML", "REST API"] ,
    github: "https://github.com/maaayan3330/YouTube-web.git"
  },
  { id: "YouTube Web Server", title: "YouTube Web Server", subtitle: "JavaScript",
    description: "Built the backend for a YouTube-style platform as part of a 3-person team. Developed using Node.js, Express, and MongoDB in an MVC architecture, with modular controllers for videos, users, and comments. Handled video uploads, user management, and comment routing, ensuring scalability and clear separation of logic. The server connects directly to the React-based web app and Android client for real-time data synchronization.",
    tech: ["Node.js", "MongoDB", "React", "MVC", "JavaScript", "REST API", "Team Project"] ,
    github: "https://github.com/maaayan3330/YouTube---server.git"
  },
];

function ChocolateFrogCard({ project, onFocus, isOpen }) {
  return (
    <button
      onClick={() => onFocus(isOpen ? null : project)}
      className="relative group focus:outline-none"
      aria-label={`Open ${project.title}`}
    >
      <div className="[perspective:1200px] w-[6rem] h-[6rem] sm:w-[6.5rem] sm:h-[6.5rem] md:w-[7rem] md:h-[7rem] lg:w-[8rem] lg:h-[8rem]">
        <div
          className="relative w-full h-full rounded-[18px] shadow-lg ring-2 ring-yellow-500/60 bg-gradient-to-br from-indigo-900 via-indigo-800 to-violet-900 p-[2px] transition-transform duration-300 group-hover:scale-105 group-active:scale-95"
          style={{ clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)" }}
        >
          <div className="absolute inset-0 rounded-[14px]">
            <div className="absolute inset-0 rounded-[14px] bg-cover bg-center" style={{ backgroundImage: `url(${FROG_IMG})` }} />
          </div>
        </div>
      </div>
    </button>
  );
}

/* ==== UPDATED: FocusedFrog ==== */
/* ==== UPDATED: FocusedFrog – expands to rectangle when open ==== */
function FocusedFrog({ project, onClose }) {
  const [flipped, setFlipped] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    function onKey(e) { if (e.key === "Escape") handleClose(); }
    if (project) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [project]);


  useEffect(() => {
    if (project) {
      setFlipped(false);
      setExpanded(false);
      const t = setTimeout(() => setExpanded(true), 120);
      return () => clearTimeout(t);
    } else {
      setExpanded(false);
    }
  }, [project]);

  const PENTAGON = "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)";

  function handleClose() {
    setFlipped(false);
    setExpanded(false);
    onClose();
  }

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key={project.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50"
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" onClick={handleClose} />

          <div className="absolute inset-0 grid place-items-center">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 200, damping: 22 }}
              className="[perspective:2000px]"
            >
              <motion.div
                className="relative"
                style={{ transformStyle: "preserve-3d" }}
                animate={{
                  width: expanded ? "min(92vw, 720px)" : "min(88vw, 520px)",
                  height: expanded ? "min(92vh, 640px)" : "min(88vh, 600px)",
                  rotateY: flipped ? 180 : 0,
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >

                <div
                  onClick={() => setFlipped(true)}
                  className="absolute inset-0 flex flex-col items-center justify-center text-yellow-200 cursor-pointer select-none"
                  style={{
                    clipPath: PENTAGON,
                    background: "linear-gradient(180deg,#291a6b 0%,#3c2590 60%,#1f1555 100%)",
                    boxShadow: "0 18px 48px rgba(0,0,0,.45), inset 0 0 0 10px #d2a43b, inset 0 0 0 16px #6b4ca6",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <img src={FROG_IMG} alt="" className="w-24 drop-shadow-lg opacity-80" />
                  <h3 className="font-harry text-5xl text-yellow-300 mt-3">{project.title}</h3>
                  <p className="text-yellow-100/70 text-sm mt-1">{project.subtitle}</p>
                  <p className="text-yellow-100/80 text-base mt-5">Click to flip </p>
                </div>

                <div
                  className="absolute inset-0 text-yellow-100"
                  style={{
                    clipPath: expanded ? "none" : PENTAGON,     
                    borderRadius: expanded ? "20px" : "0px",    
                    background: "linear-gradient(180deg,#0f0b2e 0%,#1b1360 55%,#2a1778 100%)",
                    boxShadow: "0 18px 48px rgba(0,0,0,.45), inset 0 0 0 10px #d2a43b, inset 0 0 0 16px #6b4ca6",
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden",
                    transition: "clip-path 0.6s ease-in-out, border-radius 0.6s ease-in-out",
                  }}
                >

                  <div className="absolute inset-0 overflow-auto px-8 md:px-10 py-8">
                    <div className="max-w-[60ch] mx-auto text-center">
                      <h3 className="font-harry text-3xl md:text-4xl text-yellow-300 drop-shadow-sm leading-tight">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-yellow-200/80 uppercase tracking-wide text-xs">
                        {project.subtitle}
                      </p>

                      <p className="mt-4 leading-relaxed text-sm md:text-base text-yellow-100/90">
                        {project.description}
                      </p>

                      {project.github && (
                        <p className="mt-3 text-sm">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-yellow-300 hover:text-yellow-200 underline underline-offset-2 transition"
                          >
                            View project on GitHub
                          </a>
                        </p>
                      )}

                      <div className="mt-6">
                        <h4 className="text-sm font-semibold text-yellow-300/90">Tech & Focus</h4>
                        <ul className="mt-2 flex flex-wrap justify-center gap-2">
                          {project.tech.map((t) => (
                            <li key={t} className="px-3 py-1 text-xs md:text-[13px] rounded-full bg-yellow-500/10 ring-1 ring-yellow-400/30">
                              {t}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button
                        onClick={handleClose}
                        className="mt-7 px-5 py-2 rounded-xl bg-yellow-500 text-black font-medium hover:bg-yellow-400 transition"
                      >
                        Back to Projects
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ==== END FocusedFrog ==== */

export default function ProjectsChocolateFrogs() {
  const [focused, setFocused] = useState(null);

  return (
    <main className="min-h-[100dvh] bg-[#f5f5f5] text-zinc-800 px-6 py-4">
      <div className="mx-auto max-w-6xl">
        <header className="text-center mb-2">
          <h1 className="font-harry text-4xl md:text-5xl text-yellow-500 drop-shadow-[0_0_10px_rgba(255,215,0,0.35)]">Projects</h1>
          <p className="mt-1 text-yellow-500 text-xs md:text-sm">Click on a Chocolate Frog card  for details 🪄</p>
        </header>

        <section className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-3 place-items-center">
          {PROJECTS.map((p) => (
            <div key={p.id} className="flex flex-col items-center">
              <ChocolateFrogCard
                project={p}
                isOpen={focused?.id === p.id}
                onFocus={(value) => {
                  if (value && focused?.id === value.id) setFocused(null);
                  else setFocused(value);
                }}
              />
              <div className="mt-1 text-center">
                <p className="text-[12px] md:text-sm font-medium text-zinc-700">{p.title}</p>
                <p className="text-[10px] md:text-xs text-zinc-500">{p.subtitle}</p>
              </div>
            </div>
          ))}
        </section>
      </div>

      <FocusedFrog project={focused} onClose={() => setFocused(null)} />
    </main>
  );
}
