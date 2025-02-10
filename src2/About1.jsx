import { useState } from "react";
import "./App1.css";
import ahlcon from "./Schoolimages/Ahlcon.jpeg";
import mayoor from "./Schoolimages/Mayoor.jpeg";
import manipal from "./Schoolimages/Manipal.jpeg";

function About() {
    return (
        <div className="py-16 px-8">
            {/* About Me Section */}
            <div className="flex flex-col items-center">
                <h2 id="about" className="text-6xl font-extrabold text-yellow-500 mb-8">About Me</h2>
                
                <div className="flex flex-col md:flex-row items-center gap-10 w-full max-w-5xl mx-auto">
                    {/* Image */}
                    <img src={mayoor} className="rounded-lg shadow-lg w-full md:w-1/3 object-cover" alt="Mayoor School"/>
                    
                    {/* Text Content */}
                    <p className="text-lg leading-relaxed text-gray-300 w-full md:w-2/3">
                        Hi there! I'm an engineering student pursuing a Bachelor's in Computer Science (BTech) with a focus on core computing concepts. 
                        My passion for coding started early, and over time, it grew into a deep interest in building innovative solutions.
                        I am particularly excited about web development, cyber security, and cloud computing, and I always look for opportunities to learn and experiment in these areas.
                        Outside of coding, I enjoy traveling, playing sports, and collaborating with like-minded individuals on exciting projects. Let’s connect and explore how we can create something amazing!
                    </p>
                </div>
            </div>

            {/* Education Section */}
            <div id="education" className="mt-20 text-center">
                <h2 className="text-6xl font-extrabold text-yellow-500 mb-12">My Education</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
                    {/* School 1 */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center transition-transform transform hover:scale-105">
                        <img src={mayoor} className="rounded-lg mb-4 mx-auto w-48 h-32 object-cover shadow-lg" alt="Mayoor School"/>
                        <h3 className="text-2xl font-semibold text-yellow-400">Mayoor School</h3>
                        <p className="text-gray-400">2010 - 2021</p>
                    </div>

                    {/* School 2 */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center transition-transform transform hover:scale-105">
                        <img src={ahlcon} className="rounded-lg mb-4 mx-auto w-48 h-32 object-cover shadow-lg" alt="Ahlcon Public School"/>
                        <h3 className="text-2xl font-semibold text-yellow-400">Ahlcon Public School</h3>
                        <p className="text-gray-400">2021 - 2023</p>
                        
                    </div>

                    {/* School 3 */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center transition-transform transform hover:scale-105">
                        <img src={manipal} className="rounded-lg mb-4 mx-auto w-48 h-32 object-cover shadow-lg" alt="Manipal University"/>
                        <h3 className="text-2xl font-semibold text-yellow-400">Manipal University</h3>
                        <p className="text-gray-400">2023 - 2027</p>
                        <p className="text-yellow-400">Btech in Computer Science</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
