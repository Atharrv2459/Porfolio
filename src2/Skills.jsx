import "./App1.css";
import { WDicons } from "./Schoolimages/Skillicons";
import { LDicons } from "./Schoolimages/Skillicons";
import { Ticons } from "./Schoolimages/Skillicons";

function Skills() {
    return (
        <div id="skills" className="py-20">

            <div className="text-center">
                <h2 className="text-6xl font-extrabold text-yellow-500">My Skills</h2>
            </div>

        
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto mt-16">
            
                <div className="bg-purple-900 p-6 rounded-2xl w-72 mx-auto shadow-lg transition-transform transform hover:scale-105">
                    <h3 className="text-center text-3xl font-bold text-white mb-6">Web Development</h3>
                    {WDicons.map((item, index) => (
                        <div key={index} className="flex flex-row items-center gap-3 mb-4">
                            <div>{item.icon}</div>
                            <p className="text-2xl font-semibold">{item.text}</p>
                        </div>
                    ))}
                </div>

                
                <div className="bg-purple-900 p-6 rounded-2xl w-72 mx-auto shadow-lg transition-transform transform hover:scale-105">
                    <h3 className="text-center text-3xl font-bold text-white mb-6">Languages & Databases</h3>
                    {LDicons.map((item, index) => (
                        <div key={index} className="flex flex-row items-center gap-3 mb-4">
                            <div>{item.icon}</div>
                            <p className="text-2xl font-semibold">{item.text}</p>
                        </div>
                    ))}
                </div>

            
                <div className="bg-purple-900 p-6 rounded-2xl w-72 mx-auto shadow-lg transition-transform transform hover:scale-105">
                    <h3 className="text-center text-3xl font-bold text-white mb-6">Tools & Technologies</h3>
                    {Ticons.map((item, index) => (
                        <div key={index} className="flex flex-row items-center gap-3 mb-4">
                            <div>{item.icon}</div>
                            <p className="text-2xl font-semibold">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;
