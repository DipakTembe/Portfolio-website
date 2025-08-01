import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaAws, FaGithub, FaGitAlt, FaJs } from "react-icons/fa";
import { DiMongodb, DiNodejs, DiMysql, DiPostgresql } from "react-icons/di";
import { SiTailwindcss, SiNextdotjs, SiExpress, SiMariadb, SiNetlify, SiRedux } from "react-icons/si";

const TechStack = () => {
  const techs = [
    { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500", bg: "from-orange-500 to-orange-700" },
    { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500", bg: "from-blue-500 to-blue-700" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-teal-500", bg: "from-teal-500 to-teal-700" },
    { name: "JavaScript", icon: <FaJs />, color: "text-yellow-500", bg: "from-yellow-500 to-yellow-700" },
    { name: "React.js", icon: <FaReact />, color: "text-blue-500", bg: "from-blue-500 to-blue-700" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "text-gray-900", bg: "from-gray-600 to-gray-900" },
    { name: "Redux", icon: <SiRedux />, color: "text-purple-400", bg: "from-purple-500 to-purple-700" },

    // Backend
    { name: "Node.js", icon: <DiNodejs />, color: "text-green-400", bg: "from-green-500 to-green-700" },
    { name: "Express.js", icon: <SiExpress />, color: "text-black", bg: "from-gray-500 to-gray-700" },

    // Databases
    { name: "MongoDB", icon: <DiMongodb />, color: "text-green-500", bg: "from-green-500 to-green-700" },
    { name: "MySQL", icon: <DiMysql />, color: "text-cyan-400", bg: "from-cyan-500 to-cyan-700" },
    { name: "MariaDB", icon: <SiMariadb />, color: "text-yellow-700", bg: "from-yellow-500 to-yellow-700" },
    { name: "PostgreSQL", icon: <DiPostgresql />, color: "text-blue-500", bg: "from-blue-500 to-blue-700" },

    {
      name: "Power BI",
      icon: <img src="/images/power-bi.png" alt="Power BI" className="w-14 h-14" />,
      color: "text-yellow-500",
      bg: "from-yellow-400 to-yellow-600"
    },

    // DevOps & Cloud
    { name: "AWS", icon: <FaAws />, color: "text-yellow-500", bg: "from-yellow-500 to-yellow-700" },

    // Version Control & Deployment
    { name: "Git", icon: <FaGitAlt />, color: "text-red-500", bg: "from-red-500 to-red-700" },
    { name: "GitHub", icon: <FaGithub />, color: "text-black", bg: "from-gray-500 to-gray-700" },
    { name: "Netlify", icon: <SiNetlify />, color: "text-blue-500", bg: "from-blue-500 to-blue-700" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 text-white py-16 px-6">
      <div className="w-full max-w-6xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12 tracking-wide">
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            🚀 My Tech Stack
          </span>
        </h1>

        {/* Updated Grid for 3 logos on mobile */}
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {techs.map((tech, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center p-6 rounded-xl bg-gradient-to-r ${tech.bg} 
                shadow-lg backdrop-blur-md border border-gray-800 hover:scale-105 transform transition-all duration-300 
                hover:shadow-[0px_0px_20px_rgba(255,255,255,0.3)]`}
            >
              <div className={`text-6xl mb-4 ${tech.color} drop-shadow-md brightness-125`}>{tech.icon}</div>
              <p className="text-lg font-semibold">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
