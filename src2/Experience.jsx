import "./App1.css";

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company: "Orane Consulting",
    dates: "May – July 2025",
    bullets: [
      "Developed full stack apps (auth dashboard, task manager, attendance tracking) using React.js, Node.js, and PostgreSQL.",
      "Built REST APIs with JWT authentication and role-based access control.",
      "Shipped responsive UIs with Tailwind CSS + DaisyUI and collaborated on a live ticket-management backend.",
      "Created a React Native app to track real-time geolocation.",
    ],
  },
  {
    title: "Data Analytics Intern",
    company: "Aero Survey",
    dates: "June – July 2024",
    bullets: [
      "Processed and analyzed aerial data for aviation-related projects including NOC and OLS surveys.",
      "Worked with a team supporting regulatory compliance and safe infrastructure planning around airports and airstrips.",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Experience
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {experiences.map((e) => (
            <article
              key={e.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold">{e.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{e.company}</p>
                </div>
                <p className="text-sm text-slate-400">{e.dates}</p>
              </div>

              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-300">
                {e.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
