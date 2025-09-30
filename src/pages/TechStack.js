import React, { useState } from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaAws,
  FaGithub,
  FaGitAlt,
  FaJs,
  FaPython,
  FaPhp,
  FaLaravel,
} from "react-icons/fa";
import {
  DiMongodb,
  DiNodejs,
  DiMysql,
  DiPostgresql,
} from "react-icons/di";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMariadb,
  SiNetlify,
  SiRedux,
} from "react-icons/si";

const TechStack = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const categories = {
    Frontend: [
      { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500" },
      { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-teal-400" },
      { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
      { name: "React.js", icon: <FaReact />, color: "text-cyan-400" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
      { name: "Redux", icon: <SiRedux />, color: "text-purple-400" },
    ],
    Backend: [
      { name: "Node.js", icon: <DiNodejs />, color: "text-green-400" },
      { name: "Express.js", icon: <SiExpress />, color: "text-gray-300" },
      { name: "Python", icon: <FaPython />, color: "text-blue-400" },
      { name: "PHP", icon: <FaPhp />, color: "text-indigo-400" },
      { name: "Laravel", icon: <FaLaravel />, color: "text-red-500" },
    ],
    Database: [
      { name: "MongoDB", icon: <DiMongodb />, color: "text-green-500" },
      { name: "MySQL", icon: <DiMysql />, color: "text-cyan-400" },
      { name: "MariaDB", icon: <SiMariadb />, color: "text-blue-400" },
      { name: "PostgreSQL", icon: <DiPostgresql />, color: "text-blue-500" },
    ],
    "DevOps & Tools": [
      { name: "AWS", icon: <FaAws />, color: "text-orange-400" },
      { name: "Git", icon: <FaGitAlt />, color: "text-red-500" },
      { name: "GitHub", icon: <FaGithub />, color: "text-gray-300" },
      { name: "Netlify", icon: <SiNetlify />, color: "text-teal-400" },
    ],
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold tracking-widest text-blue-400 uppercase">
              Technical Expertise
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-300 text-transparent bg-clip-text">
            Technology Stack
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            A comprehensive collection of modern tools and technologies I leverage to build scalable solutions
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-12">
          {Object.entries(categories).map(([category, techs], categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className="text-xl font-semibold text-slate-300 mb-6 flex items-center">
                <span className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-transparent mr-3"></span>
                {category}
              </h2>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
                {techs.map((tech, index) => {
                  const globalIndex = categoryIndex * 100 + index;
                  return (
                    <div
                      key={index}
                      onMouseEnter={() => setHoveredIndex(globalIndex)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className="group relative"
                    >
                      <div className={`
                        relative flex flex-col items-center justify-center p-4 h-28
                        bg-slate-900/50 backdrop-blur-sm rounded-xl
                        border border-slate-800
                        transition-all duration-300 cursor-pointer
                        ${hoveredIndex === globalIndex 
                          ? 'border-slate-600 bg-slate-800/60 shadow-lg shadow-slate-900/50' 
                          : 'hover:border-slate-700'}
                      `}>
                        {/* Icon */}
                        <div className={`text-3xl mb-2 ${tech.color} transition-all duration-300
                          ${hoveredIndex === globalIndex ? 'scale-110' : 'group-hover:scale-105'}`}>
                          {tech.icon}
                        </div>
                        
                        {/* Name */}
                        <p className="text-xs font-medium text-center text-slate-400 group-hover:text-slate-200 transition-colors">
                          {tech.name}
                        </p>

                        {/* Hover accent line */}
                        <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${tech.color.replace('text-', 'from-')} to-transparent transition-opacity duration-300 ${hoveredIndex === globalIndex ? 'opacity-100' : 'opacity-0'}`}></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom accent */}
        <div className="mt-20 pt-12 border-t border-slate-800 text-center">
          <p className="text-slate-500 text-sm">
            Continuously learning and expanding my toolkit with emerging technologies
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechStack;