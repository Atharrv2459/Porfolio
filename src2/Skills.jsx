import "./App1.css";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "React.js",
      "React Native",
      "Tailwind CSS",
      "DaisyUI",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "Role-Based Access Control",
    ],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "SQL"],
  },
  {
    title: "Tools",
    skills: ["Git", "Postman", "Expo", "VS Code"],
  },
];

function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Skills
          </h2>
          <p className="hidden max-w-xl text-right text-sm text-slate-400 md:block">
            A snapshot of the tools and technologies I use most.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {skillGroups.map((g) => (
            <div
              key={g.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
            >
              <h3 className="text-lg font-semibold">{g.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
