import { useState } from "react";

function Skills() {
  const skillGroups = [
    {
      title: "Core Programming",
      skills: [
        "JavaScript",
        "Python",
        "Java",
        "C",
        "Object-Oriented Programming (OOP)",
      ],
    },
    {
      title: "Backend / Full Stack",
      skills: [
        "Node.js",
        "React",
        "MongoDB",
        "MySQL",
        "CSS",
        "HTML",
      ],
    },
    {
      title: "Computer Science Fundamentals",
      skills: [
        "Communication Networks (protocols, layers)",
        "Data Structures",
        "Algorithms",
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        "Git",
        "Jira",
        "Android Studio",
      ],
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <main className="min-h-screen bg-[#f5f5f5] px-6 py-16 pb-24 text-zinc-900">
      
      {/* Header */}
      <header className="flex items-center justify-center gap-4 mb-14 whitespace-nowrap">
        <img
          src="/skills/hat.jpg"
          alt="Sorting Hat"
          className="w-12 h-12"
        />
        <h1 className="font-harry text-5xl text-yellow-500 drop-shadow-[0_0_10px_rgba(255,215,0,0.4)]">
          My Skills
        </h1>
      </header>

      {/* Accordion */}
      <section className="max-w-3xl mx-auto space-y-6">
        {skillGroups.map((group, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={group.title}
              className="bg-yellow-50/70 border border-yellow-200 rounded-xl shadow-md transition hover:shadow-lg"
            >
              {/* Section Header */}
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between px-6 py-5
                           text-left text-lg font-semibold text-zinc-900
                           hover:bg-yellow-100/50 transition"
              >
                <span>{group.title}</span>
                <span className="text-xl">
                  {isOpen ? "▾" : "▸"}
                </span>
              </button>

              {/* Content */}
              {isOpen && (
                <div className="px-8 pb-6">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-start gap-3 text-zinc-800"
                      >
                                              <img
                        src="/snitchpng.png"
                        alt=""
                        className="w-4 h-4 mt-1 opacity-80"
                      />

                        <span className="font-medium">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default Skills;
