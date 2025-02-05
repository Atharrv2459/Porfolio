import { useState } from "react";
import './App1.css'
function Navbar(){
    return (<div>
        <nav className="p-4 bg-purple-950">
            <div className="flex flex-row gap-32 mx-8">
                <div className="text-3xl font-semibold">
                    Atharrv Bhatnagar
                </div>
                <div>
                    <ul className="flex flex-row gap-6 relative top-1 text-2xl">
                        <a href="#about" className=" hover:text-yellow-500">About</a>
                     
                        <a href="" className=" hover:text-yellow-500">Education</a>
                        <a href="#skill" className=" hover:text-yellow-500">Skills</a>
                        <a href="#Certifications" className=" hover:text-yellow-500">Certifications</a>
                        <a href="" className=" hover:text-yellow-500">Projects</a>
                        <a href="" className=" hover:text-yellow-500">Resume</a>
                        <a href="" className=" hover:text-yellow-500">Contacts</a>

                    </ul>
                </div>
                
                
                
                
                </div></nav>

    </div>

    );
}
export default Navbar