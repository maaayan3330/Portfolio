import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Image path (put chocolate-frog.png in /public)
const FROG_IMG = "/chocolate-frog.png";

const PROJECTS = [
  {
    id: "smartcare",
    title: "SmartCare Band",
    subtitle: "Wearable + PaaS",
    description:
      "A wellness-oriented wearable concept with modular sensors and AI insights. Built the product architecture, UX, and business model as a PaaS.",
    tech: ["Product Design", "Figma", "Python", "Edge AI", "Business Model"],
  },
  {
    id: "voicebot",
    title: "Voicebot for the House for the Blind",
    subtitle: "Social Impact",
    description:
      "Twilio-style voice routing and analytics to streamline support calls. Designed flows, backend endpoints, and CI for cloud deployment.",
    tech: ["Node.js", "Express", "Twilio", "PostgreSQL", "Docker"],
  },
  {
    id: "soap-sim",
    title: "Soap Production Line Simulation",
    subtitle: "Arena + QC",
    description:
      "Discrete-event simulation of a full line: filling, drying, QC sampling (0.9 prob), defect detection, bottleneck analysis, and KPI dashboards.",
    tech: ["Arena", "Excel", "Statistics", "QC (Cp/Cpk)", "VSM"],
  },
  {
    id: "pressure-mdp",
    title: "Pressure Plate MDP Controller",
    subtitle: "AI Planning",
    description:
      "Hybrid A* compass with limited-depth value iteration for a stochastic grid world. Robust rerouting to nearest path node with corner-avoidance.",
    tech: ["Python", "MDP", "A*", "Value Iteration", "Heuristics"],
  },
  {
    id: "portfolio",
    title: "Personal Portfolio",
    subtitle: "React + Tailwind",
    description:
      "Harry Potter themed micro-interactions (Marauder's Map, parchment UI). Clean components, routing, and responsive layouts.",
    tech: ["React", "Vite", "Tailwind", "Framer Motion"],
  },
  {
    id: "wolt-marketing",
    title: "Wolt Israel – Marketing Analysis",
    subtitle: "Course Project",
    description:
      "Comprehensive market mapping: Porter, segmentation, USP, and ops insights. Deliverables include slides, dashboards, and a written report.",
    tech: ["Marketing", "Research", "Slides", "Excel", "Storytelling"],
  },
];

function ChocolateFrogCard({ project, onFocus, isOpen }) {
  return (
    <button
      onClick={() => onFocus(isOpen ? null : project)} // ← קליק פותח/סוגר
      className="relative group focus:outline-none"
      aria-label={`Open ${project.title}`}
    >
      <div className="[perspective:1200px] w-[6rem] h-[6rem] sm:w-[6.5rem] sm:h-[6.5rem] md:w-[7rem] md:h-[7rem] lg:w-[8rem] lg:h-[8rem]">
        <div
          className="relative w-full h-full rounded-[18px] shadow-lg ring-2 ring-yellow-500/60 bg-gradient-to-br from-indigo-900 via-indigo-800 to-violet-900 p-[2px] transition-transform duration-300 group-hover:scale-105 group-active:scale-95"
          style={{ clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)" }}
        >
          <div className="absolute inset-0 rounded-[14px]">
            <div
              className="absolute inset-0 rounded-[14px] bg-cover bg-center"
              style={{ backgroundImage: `url(${FROG_IMG})` }}
            />
          </div>
        </div>
      </div>
    </button>
  );
}

function FocusedFrog({ project, onClose }) {
  // סגירה ב-ESC
  useEffect(() => {
    function onKey(e) { if (e.key === "Escape") onClose(); }
    if (project) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [project, onClose]);

  // מחומש פנימי קטן יותר לטקסט שלא ייחתך
  const innerPentagon = {
    clipPath:
      "polygon(50% 4%, 96% 40%, 80% 96%, 20% 96%, 4% 40%)", // שוליים פנימיים
  };

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
          {/* רקע לסגירה */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" onClick={onClose} />

          <div className="absolute inset-0 grid place-items-center">
            <motion.div
              initial={{ scale: 0.9, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              className="[perspective:1600px]"
            >
              {/* קלף גדול עם המחומש */}
              <div
                role="dialog"
                aria-label={`${project.title} details`}
                className="relative w-[min(88vw,480px)] h-[min(88vh,560px)] select-none"
                style={{ clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)" }}
              >
                {/* מסגרת חיצונית */}
                <div className="absolute inset-0 rounded-3xl ring-4 ring-yellow-500/70 shadow-2xl overflow-hidden bg-gradient-to-br from-indigo-950 via-indigo-900 to-violet-900" />

                {/* תוכן: מחומש פנימי + ריווח */}
                <div className="absolute inset-0 p-4 md:p-6">
                  <div
                    className="w-full h-full overflow-auto text-yellow-100"
                    style={innerPentagon}
                  >
                    <div className="px-4 py-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-harry text-3xl md:text-4xl text-yellow-300 drop-shadow-sm">
                            {project.title}
                          </h3>
                          <p className="mt-1 text-yellow-200/80 uppercase tracking-wide text-xs">
                            {project.subtitle}
                          </p>
                        </div>
                        <button
                          onClick={onClose}
                          className="rounded-full w-9 h-9 grid place-items-center bg-yellow-500/20 ring-1 ring-yellow-300/50 hover:bg-yellow-500/30 transition"
                          aria-label="Close"
                        >
                          ✕
                        </button>
                      </div>

                      <p className="mt-4 leading-relaxed text-sm md:text-base text-yellow-100/90">
                        {project.description}
                      </p>

                      <div className="mt-5">
                        <h4 className="text-sm font-semibold text-yellow-300/90">Tech & Focus</h4>
                        <ul className="mt-2 flex flex-wrap gap-2">
                          {project.tech.map((t) => (
                            <li
                              key={t}
                              className="px-3 py-1 text-xs md:text-[13px] rounded-full bg-yellow-500/10 ring-1 ring-yellow-400/30"
                            >
                              {t}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

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
                  // קליק על אותו קלף → סגירה
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
