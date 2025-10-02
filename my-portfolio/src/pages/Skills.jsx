function Skills() {
  const skills = [
    { name: "C",         img: "/skills/c.webp" },
    { name: "Python",    img: "/skills/python.png" },
    { name: "Java",      img: "/skills/java.png" },
    { name: "OOP",       img: "/skills/OOP.png" },
    { name: "Git",       img: "/skills/git.png" },
    { name: "Jira",      img: "/skills/jira.png" },
    { name: "MongoDB",   img: "/skills/mongo.png" },
    { name: "Node.js",   img: "/skills/node.webp" },
    { name: "Android",   img: "/skills/android.png" },
    { name: "React",     img: "/skills/react.png" },
  ];

  return (
    <main className="h-full overflow-hidden text-white">
      <style>
        {`
          @keyframes sparkle {
            0%, 100% {
              filter: drop-shadow(0 0 0 rgba(255, 215, 0, 0));
              transform: scale(1);
            }
            50% {
              filter: drop-shadow(0 0 20px rgba(255, 215, 0, 0.8));
              transform: scale(1.08);
            }
          }
          .sparkle {
            animation: sparkle 3s ease-in-out infinite;
          }
        `}
      </style>

      <section className="h-full flex flex-col">
        {/* כותרת עם הכובע בלבד */}
        <header className="shrink-0 h-28 flex items-center justify-center gap-6">
          {/* המצנפת */}
          <img
            src="/skills/hat.jpg"
            alt="Sorting Hat"
            className="w-14 h-14 object-contain animate-bounce-slow"
          />

          {/* הכותרת */}
          <h1 className="font-harry text-6xl text-yellow-400 leading-none drop-shadow-[0_0_8px_rgba(255,215,0,0.35)]">
            My Skills
          </h1>
        </header>

        {/* הגריד של הסקילים */}
        <div className="grow grid grid-cols-4 grid-rows-3 place-items-center gap-x-8 gap-y-4 overflow-hidden">
          {skills.map((s) => (
            <div key={s.name} className="flex items-center justify-center">
              <img
                src={s.img}
                alt={s.name}
                className="[width:clamp(56px,7.5vw,90px)] [height:clamp(56px,7.5vw,90px)] 
                           object-contain select-none sparkle"
                draggable="false"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Skills;
