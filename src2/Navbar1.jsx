import { useState } from "react";
import './App1.css';

function Navbar() {
    return (
        <div>
            <nav className="p-4 bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-950 shadow-lg">
                <div className="flex flex-row justify-between items-center mx-8">
            
                    <div className="text-3xl font-semibold text-gray-200">
                        Atharrv Bhatnagar
                    </div>

                    <div>
                        <ul className="flex flex-row gap-6 text-lg font-montserrat">
                            <a href="#about" className="hover:text-yellow-400 transition duration-300">About</a>
                            <a href="#education" className="hover:text-yellow-400 transition duration-300">Education</a>
                            <a href="#skills" className="hover:text-yellow-400 transition duration-300">Skills</a>
                            <a href="#Certifications" className="hover:text-yellow-400 transition duration-300">Certifications</a>
                            <a href="#projects" className="hover:text-yellow-400 transition duration-300">Projects</a>
                            <a href="#resume" className="hover:text-yellow-400 transition duration-300">Resume</a>
                            <a href="#contacts" className="hover:text-yellow-400 transition duration-300">Contacts</a>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
