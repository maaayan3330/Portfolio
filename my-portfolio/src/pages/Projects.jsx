import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FROG_IMG = "/chocolate-frog.png";

const PROJECTS = [
  { id: "Arkanoid Game", title: "Arkanoid Game", subtitle: "Java",
    description: "Developed a full-featured Arkanoid-style game in Java, applying key OOP principles.Implemented listeners, inheritance, and interfaces to handle user input, collisions, and game flow.The project demonstrates a strong understanding of Java architecture, encapsulation, and modular design.",
    tech: ["OOP", "Java"],
    github: "https://github.com/maaayan3330/Arkanoid-Project.git"
  },
  { id: "React YouTube Website", title: "YouTube Website", subtitle: "React",
    description: "Developed as part of a full project combining a web app and an Android client with a shared Node.js server. This part focuses on the React-based website, built with HTML, CSS, Node.js, and React, featuring token-based authentication, video upload, and video playback pages. The project emphasized frontend–backend integration, secure user sessions, and a responsive UI for seamless viewing.",
    tech: ["Node.js", "Express", "React", "CSS", "HTML"] },
  { id: "soap-sim", title: "Soap Production Line Simulation", subtitle: "Arena + QC",
    description: "Discrete-event simulation of a full line: filling, drying, QC sampling (0.9 prob), defect detection, bottleneck analysis, and KPI dashboards.",
    tech: ["Arena", "Excel", "Statistics", "QC (Cp/Cpk)", "VSM"] },
  { id: "pressure-mdp", title: "Pressure Plate MDP Controller", subtitle: "AI Planning",
    description: "Hybrid A* compass with limited-depth value iteration for a stochastic grid world. Robust rerouting to nearest path node with corner-avoidance.",
    tech: ["Python", "MDP", "A*", "Value Iteration", "Heuristics"] },
  { id: "portfolio", title: "Personal Portfolio", subtitle: "React + Tailwind",
    description: "Harry Potter themed micro-interactions (Marauder's Map, parchment UI). Clean components, routing, and responsive layouts.",
    tech: ["React", "Vite", "Tailwind", "Framer Motion"] },
  { id: "wolt-marketing", title: "Wolt Israel – Marketing Analysis", subtitle: "Course Project",
    description: "Comprehensive market mapping: Porter, segmentation, USP, and ops insights. Deliverables include slides, dashboards, and a written report.",
    tech: ["Marketing", "Research", "Slides", "Excel", "Storytelling"] },
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
  const [expanded, setExpanded] = useState(false); // ← מצב “התרחבות” למלבן

  useEffect(() => {
    function onKey(e) { if (e.key === "Escape") handleClose(); }
    if (project) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [project]);

  // כשנפתח – מתחילים כהצגת מחומש ואז מרחיבים למלבן חלק
  useEffect(() => {
    if (project) {
      setFlipped(false);
      setExpanded(false);
      const t = setTimeout(() => setExpanded(true), 120); // דיליי קצר לאנימציה נעימה
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
          {/* רקע – סוגר את המודאל */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" onClick={handleClose} />

          <div className="absolute inset-0 grid place-items-center">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 200, damping: 22 }}
              className="[perspective:2000px]"
            >
              {/* אפשר להרחיב גם את הגודל כשהוא expanded */}
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
                {/* FRONT – מחומש, לוחצים כדי להתהפך */}
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
                  <p className="text-yellow-100/80 text-base mt-5">Click to flip ✨</p>
                </div>

                {/* BACK – מתחיל מחומש ואז מתרחב למלבן עם פינות מעוגלות */}
                <div
                  className="absolute inset-0 text-yellow-100"
                  style={{
                    clipPath: expanded ? "none" : PENTAGON,       // ← הופך למלבן
                    borderRadius: expanded ? "20px" : "0px",       // ← פינות מעוגלות
                    background: "linear-gradient(180deg,#0f0b2e 0%,#1b1360 55%,#2a1778 100%)",
                    boxShadow: "0 18px 48px rgba(0,0,0,.45), inset 0 0 0 10px #d2a43b, inset 0 0 0 16px #6b4ca6",
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden",
                    transition: "clip-path 0.6s ease-in-out, border-radius 0.6s ease-in-out",
                  }}
                >
                  {/* מרווחים נדיבים – מלבן מאפשר טקסט נוח */}
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

                      {/* לינק פשוט ל-GitHub */}
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

                  {/* ✕ בפינה */}
                  <button
                    onClick={handleClose}
                    className="absolute -top-4 -right-4 rounded-full w-10 h-10 grid place-items-center bg-yellow-500/25 ring-2 ring-yellow-300/70 text-yellow-50 hover:bg-yellow-500/35 transition"
                    aria-label="Close"
                  >
                    ✕
                  </button>
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
          <h1 className="font-harry text-3xl md:text-4xl text-yellow-600 drop-shadow-[0_0_10px_rgba(255,215,0,0.35)]">Projects</h1>
          <p className="mt-1 text-zinc-600 text-xs md:text-sm">Hover a Chocolate Frog card to enlarge, center, and flip for details ✨</p>
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
