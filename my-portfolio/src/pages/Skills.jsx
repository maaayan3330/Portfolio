function Skills() {
  const skills = [
    { name: "C",         img: "/skills/c.webp" },
    { name: "Python",    img: "/skills/python.png" },
    { name: "Java",      img: "/skills/java.png" },
    { name: "OOP",       img: "/skills/OOP.jpg" },
    { name: "Git",       img: "/skills/git.png" },
    { name: "Jira",      img: "/skills/jira.png" },
    { name: "MongoDB",   img: "/skills/mongo.png" },
    { name: "Node.js",   img: "/skills/node.webp" },
    { name: "Android",   img: "/skills/android.png" },
    { name: "React",     img: "/skills/react.png" },
  ];

  return (
    <main className="h-full overflow-hidden text-white">
      <section className="h-full flex flex-col">
        <header className="shrink-0 h-16 flex items-center justify-center">
          <h1 className="font-harry text-6xl text-yellow-400 leading-none">My Skills</h1>
        </header>

        <div className="grow grid grid-cols-4 grid-rows-3 place-items-center gap-x-8 gap-y-4 overflow-hidden">
          {skills.map((s) => (
            <div key={s.name} className="flex items-center justify-center">
              <img
                src={s.img}
                alt={s.name}
                className="[width:clamp(56px,7.5vw,90px)] [height:clamp(56px,7.5vw,90px)] object-contain select-none"
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
