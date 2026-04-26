import { useState } from "react";
import emailjs from "emailjs-com";
import { SiGmail } from "react-icons/si";
import { MdPhone } from "react-icons/md";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      alert(
        "Email is not configured. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in a .env file (see .env.example)."
      );
      return;
    }

    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formData, EMAILJS_PUBLIC_KEY)
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error("EmailJS error:", error);
        }
      );
  };

  return (
    <section id="contacts" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Contact
            </h2>
            <p className="mt-3 text-slate-300">
              Want to collaborate or talk about an opportunity? Send a message.
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-4">
                <SiGmail size={24} className="text-yellow-300" />
                <a
                  className="text-slate-200 hover:text-yellow-300"
                  href="mailto:atharrv@gmail.com"
                >
                  atharrv@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <MdPhone size={24} className="text-yellow-300" />
                <a
                  className="text-slate-200 hover:text-yellow-300"
                  href="tel:+919654235576"
                >
                  +91 9654235576
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
            <h3 className="text-xl font-semibold">Send a message</h3>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="text-sm font-semibold text-slate-200">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl bg-white/5 p-3 text-slate-100 border border-white/10 focus:outline-none focus:ring-2 focus:ring-yellow-300/60"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-slate-200">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl bg-white/5 p-3 text-slate-100 border border-white/10 focus:outline-none focus:ring-2 focus:ring-yellow-300/60"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-slate-200">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl bg-white/5 p-3 text-slate-100 border border-white/10 focus:outline-none focus:ring-2 focus:ring-yellow-300/60"
                  rows="4"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-yellow-400 px-6 py-3 font-semibold text-slate-950 hover:bg-yellow-300 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
