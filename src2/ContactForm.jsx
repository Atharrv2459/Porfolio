import React, { useState } from "react";
import emailjs from "emailjs-com";
import { SiGmail } from "react-icons/si";
import { MdPhone } from "react-icons/md";

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
    emailjs
      .send(
        "service_xxxxxx", // Replace with your EmailJS Service ID
        "template_xxxxxx", // Replace with your EmailJS Template ID
        formData,
        "user_xxxxxx" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error("Error:", error);
        }
      );
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-24 py-16 bg-[#0A0E31] text-white">
      {/* Left Side: Contact Info */}
      <div className="flex flex-col gap-6 text-center md:text-left mb-10 md:mb-0">
        <h2 className="text-4xl font-bold">Contact me</h2>
        <div className="flex items-center gap-4">
          <SiGmail size={40} className="text-blue-600" />
          <p className="text-lg">atharrv@gmail.com</p>
        </div>
        <div className="flex items-center gap-4">
          <MdPhone size={40} className="text-blue-600" />
          <p className="text-lg">+91 9654235576</p>
        </div>
      </div>

      {/* Right Side: Contact Form */}
      <div className="w-full md:w-[40%] bg-white/10 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-3">
          Connect with <span className="text-blue-500">me</span>
        </h2>
        <p className="text-white/70 mb-6">
          If you want to know more about me or my work, or just want to say hello,
          send me a message. I'd love to hear from you.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-white font-semibold">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="text-white font-semibold">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="text-white font-semibold">Message</label>
            <textarea
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
