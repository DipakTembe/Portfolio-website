import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import TechStack from "../pages/TechStack";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

const Home = () => {
  const techStackRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth"; // Enables smooth scrolling
  }, []);

  return (
    <div>
      {/* Home Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-gray-900 text-white px-6 py-16">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black"></div>

        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between gap-16 relative">
          {/* Profile Image - Blended with Background */}
          <motion.div 
            className="relative w-64 md:w-96 bg-gray-900 p-2 shadow-2xl rounded-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.9, y: 20 }} 
            animate={{ opacity: 1, scale: 1, y: 0 }} 
            transition={{ duration: 1 }}
          >
            {/* Image with Gradient Overlay */}
            <div className="relative">
              <img 
                src="/images/dipak4.png" 
                alt="Dipak Tembe Profile" 
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900"></div>
            </div>
          </motion.div>

          {/* About Me Text */}
          <motion.div 
            className="max-w-2xl text-center md:text-left flex-1"
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-100">
              <span className="text-blue-400">Hello,</span> it's me 👋
            </h2>
            <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text mt-2">
              Dipak Tembe
            </h1>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-300 mt-4">
              I'm a <span className="text-blue-400">Full Stack</span> Developer 🚀
            </h3>
            <p className="text-lg text-gray-300 mt-4 leading-relaxed">
              Passionate about building modern, high-performing web applications using the latest technologies.
              Skilled in React, Node.js, MongoDB, and more!
            </p>

            {/* Download Resume Button */}
            <motion.a 
              href="/resume.pdf" 
              download 
              className="inline-flex items-center px-6 py-3 mt-6 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.1 }}
            >
              <FaDownload className="mr-3" /> Download Resume
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section ref={techStackRef} id="techstack" className="scroll-mt-20">
        <TechStack />
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} id="projects" className="scroll-mt-20">
        <Projects />
      </section>

      {/* Contact Section */}
      <section ref={contactRef} id="contact" className="scroll-mt-20">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
