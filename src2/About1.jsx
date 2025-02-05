import { useState } from "react";
import './App1.css'
import ahlcon from "./Schoolimages/Ahlcon.jpeg"
import mayoor from "./Schoolimages/Mayoor.jpeg"
import manipal from "./Schoolimages/Manipal.jpeg"
function About(){
    return (
        <div>
            <div class="delay-[300ms] duration-[600ms] taos:translate-y-[100%] taos:opacity-0" data-taos-offset="300">
            
            <div className="flex flex-col items-center relative top-48">
                <p id="about" className="text-6xl text-yellow-600 font-bold">About Me</p>
                <div className="flex flex-row">
                    <img src={mayoor}></img>
                <p className="m-10 text-xl">Hi there! I'm an engineering student pursuing a Bachelor's in Computer Science (BTech) with a focus on core computing concepts. My passion for coding started early, and over time, it grew into a deep interest in building innovative solutions.

I am particularly excited about web development, cyber security, and cloud computing, and I always look for opportunities to learn and experiment in these areas. I thrive on tackling complex problems, creating efficient systems, and exploring new technologies that can shape the future of tech.

Outside of coding, I enjoy travelling and playing sports and am always looking to collaborate with like-minded individuals on exciting projects. Let’s connect and explore how we can create something amazing!</p></div>
            <div className="relative top-20">
           <p className="text-7xl relative font-bold text-center text-yellow-500">My Education</p>
            <div className="flex flex-row justify-center relative top-16 gap-11">
                <div className="flex flex-col">
                    <img src={mayoor} className="rounded-lg"></img>
                    <p>Mayoor School</p>
                    <p>2010-2021</p>
                    
                </div>
                <div className="flex flex-col">
                    <img src={ahlcon} className="rounded-lg"></img>
                    <p>Ahlcon Public School, Delhi</p>
                    <p>2021-2023</p>
                    
                </div>
                <div className="flex flex-col">
                    <img src={manipal} className="rounded-lg"></img>
                    <p>Manipal University</p>
                    <p>2023-2027</p>
                    
                </div>
                </div>
                

            </div>
            </div>
        </div>
        </div>
        
    );
} 
export default About
