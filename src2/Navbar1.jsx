import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contacts" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a
          href="#home"
          className="text-base font-semibold tracking-tight text-slate-100"
        >
          Atharrv Bhatnagar
        </a>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2 text-slate-100 hover:bg-white/10 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        <ul className="hidden items-center gap-6 text-sm font-medium text-slate-200 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-yellow-300 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-slate-950 md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 text-sm font-medium text-slate-200">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block rounded-lg px-3 py-2 hover:bg-white/5"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
