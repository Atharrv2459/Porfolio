import "./App1.css";

const projects = [
  {
    title: "Employee Attendance Management System",
    subtitle: "Full Stack Web App • 2025",
    bullets: [
      "Tracks attendance, leaves, breaks, and manual entries.",
      "Includes punch in/out, leave management, approvals, and dashboards.",
      "Secure access using JWT authentication and role-based access control.",
    ],
    stack: ["React.js", "Node.js", "Express.js", "PostgreSQL", "JWT", "RBAC"],
    links: {
      github: "https://github.com/Atharrv2459/Employee-management-system.git",
    },
  },
  {
    title: "Ticket Management System",
    subtitle: "Backend & API Development • 2025",
    bullets: [
      "Scalable backend for customer support ticket workflows.",
      "Role-based authentication/authorization using JWT.",
      "Email notifications for key ticket updates.",
    ],
    stack: ["Node.js", "Express.js", "PostgreSQL", "JWT", "Postman"],
    links: {
      github: "https://github.com/Atharrv2459/New-Ticket-Management.git",
    },
  },
  {
    title: "Task Manager (To‑Do List)",
    subtitle: "Productivity Web App • 2024",
    bullets: [
      "Create, update, and track tasks with statuses.",
      "Simple UX focused on day-to-day productivity.",
      "Clean UI that works well across screen sizes.",
    ],
    stack: ["HTML", "CSS", "JavaScript"],
    links: {
      github: "https://github.com/Atharrv2459/TO-DO-LIST.git",
    },
  },
  {
    title: "Geolocation App",
    subtitle: "Location Tracking • 2025",
    bullets: [
      "Fetches and displays device/user location coordinates.",
      "Uses browser/device geolocation APIs for real-time updates.",
      "Built to demonstrate location-based UI flows.",
    ],
    stack: ["JavaScript", "Geolocation API"],
    links: {
      github: "https://github.com/Atharrv2459/Geolocation-app.git",
    },
  },
  {
    title: "Gold Price Prediction",
    subtitle: "Machine Learning + Time Series Forecasting",
    bullets: [
      "Predicts gold price using market indicators: SPX, USO, SLV, and EUR/USD.",
      "Linear Regression for indicator-based prediction; ARIMA for historical time-series forecasting.",
      "Logistic Regression to classify trend direction (up/down).",
      "Flask web interface for running predictions from the browser.",
    ],
    stack: ["Python", "Pandas", "scikit-learn", "statsmodels (ARIMA)", "Flask"],
    links: {
      github: "https://github.com/Atharrv2459/Gold-price-prediction.git",
    },
  },
];

function Project() {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Projects
          </h2>
          <a
            className="hidden rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 hover:bg-white/10 md:inline-flex"
            href="https://github.com/Atharrv2459"
            target="_blank"
            rel="noreferrer"
          >
            View GitHub
          </a>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{p.subtitle}</p>
                </div>
                <div className="flex gap-2">
                  {p.links?.github && (
                    <a
                      href={p.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-200 hover:bg-white/10"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>

              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-300">
                {p.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 text-sm text-slate-400">
          Source code for each project is available on GitHub.
        </p>
      </div>
    </section>
  );
}

export default Project;
