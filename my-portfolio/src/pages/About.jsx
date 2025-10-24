import { useState } from "react";
import FootstepsOverlay from "../components/FootstepsOverlay";

function MagicScroll({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-[calc(100dvh-0px)] flex items-start md:items-center justify-center px-6 py-8">
      <div className="w-full max-w-4xl text-center">
        
        <h1 className="font-harry text-4xl text-yellow-400 mb-6 drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]">
          {open ? "Mischief Managed." : "I solemnly swear that I am up to no good."}
        </h1>

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
          {open && (
            <div className="relative px-6 md:px-10 py-5 md:py-8 text-stone-900 scroll-text text-left">
              <ul className="list-disc list-inside space-y-3 text-lg leading-relaxed">
                <li>
                  I am Maayan Ifergan, a Computer Science student at Bar-Ilan University and a Harry Potter enthusiast.
                </li>
                <li>
                  I am a highly creative person with excellent communication and teamwork skills.
                </li>
                <li>
                  I am always eager to learn new things, grow, and give my best to ensure outstanding results.
                </li>
                <li>
                  I am looking for my first position in the development world - since all the jobs at Hogwarts were already taken!
                </li>
                <li>
                  All the projects I’ve worked on and my skills are detailed on this site.
                </li>
              </ul>
            </div>
          )}
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="mt-6 rounded-xl px-6 py-2 bg-yellow-500/20 text-black-300 hover:bg-yellow-500/30 transition"
        >
          {open ? "Close" : "Open"}
        </button>
      </div>

      <FootstepsOverlay />
    </div>
  );
}

export default function About() {
  return <MagicScroll />;
}
