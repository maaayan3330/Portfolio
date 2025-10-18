import React from "react";
import "./FootstepsOverlay.css";

export default function FootstepsOverlay() {
  const steps = [
    { side: "l", left: 86, top: 86, rot: -10, d: 0.00 }, 
    { side: "r", left: 72, top: 72, rot:   8, d: 0.40 },
    { side: "l", left: 58, top: 58, rot:  -6, d: 0.60 },
    { side: "r", left: 44, top: 44, rot:  10, d: 0.80 },
    { side: "l", left: 30, top: 30, rot:  -4, d: 1.00 },
    { side: "r", left: 16, top: 16, rot:   6, d: 1.40 },
  ];

  return (
    <div
      className="fixed pointer-events-none z-40"
      style={{
        right: "30px",
        bottom: "10px",
        width:  "180px",
        height: "180px",
        transform: "rotate(-22deg)",
      }}
    >
    

      {steps.map((s, i) => (
        <div
          key={i}
          className={`footstep ${s.side === "l" ? "foot-l" : "foot-r"}`}
          style={{
            left: `${s.left}%`,
            top:  `${s.top}%`,
            ["--r"]: `${s.rot}deg`,
            ["--d"]: `${s.d}s`,
          }}
        />
      ))}
    </div>
  );
}
