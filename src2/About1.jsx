import "./App1.css";
import ahlcon from "./Schoolimages/Ahlcon.jpeg";
import mayoor from "./Schoolimages/Mayoor.jpeg";
import manipal from "./Schoolimages/Manipal.jpeg";

function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              About me
            </h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Computer Science Engineering undergraduate with practical experience
              developing full stack applications. I work primarily with React.js,
              Tailwind CSS, Node.js/Express.js, and PostgreSQL, and I enjoy building
              clean UIs backed by well-structured APIs.
            </p>
            <p className="mt-4 text-slate-300 leading-relaxed">
              I’ve implemented JWT authentication, role-based access control, and
              improved data flows with optimized SQL queries. I’m based in Noida,
              Uttar Pradesh.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">Quick highlights</h3>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li>React.js / React Native + Tailwind CSS</li>
              <li>Node.js + Express.js REST APIs</li>
              <li>PostgreSQL + MongoDB</li>
              <li>JWT auth + RBAC</li>
              <li>Tools: Git, Postman, Expo</li>
            </ul>
          </div>
        </div>

        <div id="education" className="mt-16">
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Education
            </h2>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
              <img
                src={manipal}
                className="h-36 w-full rounded-xl object-cover"
                alt="Manipal University Jaipur"
              />
              <h3 className="mt-4 text-lg font-semibold text-slate-100">
                Manipal University Jaipur
              </h3>
              <p className="mt-1 text-sm text-slate-400">2023 – 2027</p>
              <p className="mt-2 text-slate-300">
                B.Tech in Computer Science and Engineering
              </p>
            </div>

            <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
              <img
                src={ahlcon}
                className="h-36 w-full rounded-xl object-cover"
                alt="Ahlcon Public School, Delhi"
              />
              <h3 className="mt-4 text-lg font-semibold text-slate-100">
                Ahlcon Public School, Delhi
              </h3>
              <p className="mt-1 text-sm text-slate-400">2021 – 2023</p>
              <p className="mt-2 text-slate-300">12th • 81%</p>
            </div>

            <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
              <img
                src={mayoor}
                className="h-36 w-full rounded-xl object-cover"
                alt="Mayoor School, Noida"
              />
              <h3 className="mt-4 text-lg font-semibold text-slate-100">
                Mayoor School, Noida
              </h3>
              <p className="mt-1 text-sm text-slate-400">2010 – 2021</p>
              <p className="mt-2 text-slate-300">10th • 95.3%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
