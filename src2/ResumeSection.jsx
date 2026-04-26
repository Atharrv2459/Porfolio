import "./App1.css";

function ResumeSection() {
  return (
    <section id="resume" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Resume
              </h2>
              <p className="mt-3 text-slate-300">
                View or download a PDF copy of my resume.
              </p>
              
            </div>

            <a
              href="https://drive.google.com/file/d/1R7zRqTysCWMBCPKOlChycgEQuGN1Tltz/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-6 py-3 font-semibold text-slate-950 hover:bg-yellow-300 transition"
            >
              View resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResumeSection;
