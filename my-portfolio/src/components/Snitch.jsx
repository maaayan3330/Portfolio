import { useEffect, useRef, useState } from "react";

function Snitch() {
  const snitchRef = useRef(null);
  const [pos, setPos] = useState({ x: 200, y: 200 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const dx = e.clientX - pos.x;
      const dy = e.clientY - pos.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      let newX = pos.x;
      let newY = pos.y;

      if (distance < 150) {
        const angle = Math.atan2(dy, dx);
        newX = pos.x - Math.cos(angle) * 100;
        newY = pos.y - Math.sin(angle) * 100;
      }

      const maxX = window.innerWidth - 80;
      const maxY = window.innerHeight - 80;

      newX = Math.max(20, Math.min(maxX, newX));
      newY = Math.max(20, Math.min(maxY, newY));

      setPos({ x: newX, y: newY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [pos]);

  return (
    <img
      ref={snitchRef}
      src="/snitchpng.png"
      alt="Golden Snitch"
      style={{
        position: "fixed",
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        width: "60px",
        height: "60px",
        transition: "all 0.3s ease",
        pointerEvents: "none",
        zIndex: 9999,
        animation: "snitch-rotate 8s linear infinite, snitch-hover 2s ease-in-out infinite",
        }}

    />
  );

  
}

export default Snitch;
