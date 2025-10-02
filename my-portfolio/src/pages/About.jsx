import { useState } from "react";

function MagicScroll({ title = "About Me", children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-[calc(100dvh-0px)] flex items-start md:items-center justify-center px-6 py-8">
      <div className="w-full max-w-4xl">
        {/* כותרת + כפתור */}
        <div className="flex items-center gap-4 mb-6">
          <h1 className="font-harry text-5xl text-yellow-400 drop-shadow-[0_0_10px_rgba(255,215,0,0.35)]">
            {title}
          </h1>
          <button
            onClick={() => setOpen((v) => !v)}
            className="ml-2 rounded-xl px-4 py-2 bg-yellow-500/20 text-black-300 hover:bg-yellow-500/30 transition"
            aria-expanded={open}
            aria-controls="scroll-panel"
          >
            {open ? "Close" : "Open"}
          </button>
        </div>

        {/* מגילה */}
        <div
          id="scroll-panel"
          className={`
            relative mx-auto
            rounded-[22px] parchment-real
            ring-1 ring-black/10 overflow-hidden
            shadow-[0_10px_40px_rgba(0,0,0,0.35)]
            transition-[max-height] duration-700 ease-out
            ${open ? "max-h-[70dvh] animate-unroll-real" : "max-h-16"}
          `}
          role="region"
          aria-label="Magic parchment"
        >

          {/* תוכן המגילה */}
          <div className="px-6 md:px-10 py-5 md:py-8 text-stone-900 scroll-text">
            {children}
          </div>
        </div>

        <p className="mt-3 text-sm text-black-200/80 italic">
          Click “Open” to unroll the parchment — like the Weasley twins would 
        </p>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <MagicScroll title="About Me">
      <p className="mb-4 text-lg leading-relaxed">
        I’m a CS student passionate about software development, problem solving,
        and building cool stuff. I enjoy React, Python and back-end work,
        and I love learning by creating fun projects.
      </p>

      <p className="mb-4 text-lg leading-relaxed">
        Recently I’ve been focusing on clean UI, small animations, and turning
        ideas into working apps. My goal is to join a team where I can learn fast,
        contribute, and ship features that make people smile.
      </p>

      <p className="text-lg leading-relaxed">
        Beyond code: coffee, puzzles, and a bit of Quidditch 🧹.
      </p>
    </MagicScroll>
  );
}
