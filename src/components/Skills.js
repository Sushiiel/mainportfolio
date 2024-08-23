import React from "react";
import pythonLogo from "../assets/python.png";
import javaLogo from "../assets/java.png";
import cppLogo from "../assets/c-.png";
import cLogo from "../assets/letter-c.png";
import mdbLogo from "../assets/database-storage.png";
import llmLogo from "../assets/hugging.png";
import mlLogo from "../assets/machine-learning.png";
import reactLogo from "../assets/physics.png";
import resumeFile from "../assets/A Sushiiel (4).pdf";

import "./skills.css";

export default function Skills(){
    const handleDownload = () => {
        window.open(resumeFile, "_blank");
    };
    return(
        <div id="Skills" className="main">
        <section className="experience-section" id="about">
            <div className="container">
                <div className="section_title center">
                    <p>Skills</p>
                </div>
                <div className="experience-items py-10">
                    <div className="experience-item py-4">
                        <div className="experience-info">
                        <div className="flex">
                        <div>
                        <img src={pythonLogo} alt="Python Logo" className="skill-logo" />
                        </div>
                        <div className="px-2">
                        <p>Python</p>
                        <p><span className="text-blue-500">90%</span></p>
                        </div>
                        </div>

                        </div>
                        

                    
                    <div className="progress-line" data-percent="90%">
                        <span style={{width:"90%"}}></span>

                    </div>

                </div>
                <div className="experience-item py-4">
                        <div className="experience-info">
                        <div className="flex">
                        <div>
                        <img src={javaLogo} alt="Python Logo" className="skill-logo" />
                        </div>
                        <div className="px-2">
                        <p>Java</p>
                        <p><span className="text-blue-500">90%</span></p>
                        </div>
                        </div>

                        </div>
                        

                    
                    <div className="progress-line" data-percent="90%">
                        <span style={{width:"90%"}}></span>

                    </div>

                </div>
                <div className="experience-item py-4">
                        <div className="experience-info">
                        <div className="flex">
                        <div>
                        <img src={cLogo} alt="Python Logo" className="skill-logo" />
                        </div>
                        <div className="px-2">
                        <p>C</p>
                        <p><span className="text-blue-500">90%</span></p>
                        </div>
                        </div>

                        </div>
                        

                    
                    <div className="progress-line" data-percent="90%">
                        <span style={{width:"90%"}}></span>

                    </div>

                </div>
                <div className="experience-item py-4">
                        <div className="experience-info">
                        <div className="flex">
                        <div>
                        <img src={cppLogo} alt="Python Logo" className="skill-logo" />
                        </div>
                        <div className="px-2">
                        <p>C++</p>
                        <p><span className="text-blue-500">90%</span></p>
                        </div>
                        </div>

                        </div>
                        

                    
                    <div className="progress-line" data-percent="90%">
                        <span style={{width:"90%"}}></span>

                    </div>

                </div>
                <div className="experience-item py-4">
                        <div className="experience-info">
                        <div className="flex">
                        <div>
                        <img src={reactLogo} alt="Python Logo" className="skill-logo" />
                        </div>
                        <div className="px-2">
                        <p>React </p>
                        <p><span className="text-blue-500">80%</span></p>
                        </div>
                        </div>

                        </div>
                        

                    
                    <div className="progress-line" data-percent="80%">
                        <span style={{width:"80%"}}></span>

                    </div>

                </div>
                <div className="experience-item py-4">
                        <div className="experience-info">
                        <div className="flex">
                        <div>
                        <img src={mlLogo} alt="Python Logo" className="skill-logo" />
                        </div>
                        <div className="px-2">
                        <p>Machine Learning Algorithms</p>
                        <p><span className="text-blue-500">70%</span></p>
                        </div>
                        </div>

                        </div>
                        

                    
                    <div className="progress-line" data-percent="70%">
                        <span style={{width:"70%"}}></span>

                    </div>

                </div>
                <div className="experience-item py-4">
                        <div className="experience-info">
                        <div className="flex">
                        <div>
                        <img src={mdbLogo} alt="Python Logo" className="skill-logo" />
                        </div>
                        <div className="px-2">
                        <p>MongoDB</p>
                        <p><span className="text-blue-500">70%</span></p>
                        </div>
                        </div>

                        </div>
                        

                    
                    <div className="progress-line" data-percent="70%">
                        <span style={{width:"70%"}}></span>

                    </div>

                </div>
                <div className="experience-item py-4">
                        <div className="experience-info">
                        <div className="flex">
                        <div>
                        <img src={llmLogo} alt="Python Logo" className="skill-logo" />
                        </div>
                        <div className="px-2">
                        <p>Large language Models</p>
                        <p><span className="text-blue-500">70%</span></p>
                        </div>
                        </div>

                        </div>
                        

                    
                    <div className="progress-line" data-percent="70%">
                        <span style={{width:"70%"}}></span>

                    </div>

                </div>
                </div>

            </div>
            <div className="py-1 container mt-8 text-center flex justify-center">
    <button className="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleDownload}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
        </svg>
        <p>Download Resume</p>
    </button>
</div>


        </section>
        </div>
    )
}