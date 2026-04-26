import "./App1.css";
import myImage from "./MyImage.jpeg";
import Navbar from "./Navbar1";
import About from "./About1";
import Skills from "./Skills";
import Project from "./Project";
import ImageSlider from "./Certificates";
import ContactForm from "./ContactForm";
import Experience from "./Experience";
import ResumeSection from "./ResumeSection";
import { SocialMedia } from "./images2";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="mx-auto max-w-6xl px-4">
        <section
          id="home"
          className="grid items-center gap-10 py-16 md:grid-cols-2 md:py-24"
        >
          <div>
            <p className="text-sm text-slate-400">
              Noida, Uttar Pradesh • Computer Science Engineering (2027)
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-6xl">
              Atharrv <span className="text-yellow-400">Bhatnagar</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
              Computer Science Engineering undergraduate with hands-on experience
              building full stack applications using React, Node/Express, and
              PostgreSQL.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-xl bg-yellow-400 px-5 py-3 font-semibold text-slate-950 hover:bg-yellow-300 transition"
              >
                View projects
              </a>
              <a
                href="https://drive.google.com/file/d/1R7zRqTysCWMBCPKOlChycgEQuGN1Tltz/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-slate-100 hover:bg-white/10 transition"
              >
                Resume
              </a>
              <a
                href="#contacts"
                className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-slate-100 hover:bg-white/10 transition"
              >
                Contact
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4">
              {SocialMedia.map((item) => (
                <a
                  key={item.label}
                  href={item.src}
                  aria-label={item.label}
                  target={item.src.startsWith("mailto:") ? undefined : "_blank"}
                  rel={item.src.startsWith("mailto:") ? undefined : "noreferrer"}
                  className="inline-flex rounded-xl border border-white/10 bg-white/5 p-3 text-slate-200 hover:bg-white/10 hover:text-yellow-300 transition"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src={myImage}
              alt="Atharrv Bhatnagar"
              className="h-44 w-44 rounded-full object-cover ring-4 ring-white/10 shadow-xl md:h-64 md:w-64"
            />
          </div>
        </section>

        <About />
        <Experience />
        <Skills />
        <Project />
        <ImageSlider />
        <ResumeSection />
        <ContactForm />

        <footer className="py-10 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Atharrv Bhatnagar. Built with React + Vite.
        </footer>
      </main>
    </div>
  );
}

export default App;
