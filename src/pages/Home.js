import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaDownload, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { ArrowDown } from "lucide-react";
import TechStack from "../pages/TechStack";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

const Home = () => {
  const techStackRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
      >
        {/* Subtle Animated Background */}
        <div className="absolute inset-0">
          {/* Minimal gradient orbs */}
          <div 
            className="absolute w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl"
            style={{
              top: '20%',
              left: '10%',
              transform: `translateY(${scrollY * 0.3}px)`,
            }}
          ></div>
          <div 
            className="absolute w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-3xl"
            style={{
              bottom: '20%',
              right: '10%',
              transform: `translateY(${scrollY * -0.2}px)`,
            }}
          ></div>

          {/* Elegant grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
        </div>

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Profile Image - Elegant & Minimal */}
              <motion.div
                className="order-2 lg:order-1 flex justify-center lg:justify-start"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <div className="relative group">
                  {/* Ambient glow that matches background */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-transparent rounded-[2rem] blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
                  
                  {/* Decorative frame elements */}
                  <div className="absolute -top-3 -left-3 w-20 h-20 border-l-2 border-t-2 border-blue-500/30 rounded-tl-3xl"></div>
                  <div className="absolute -bottom-3 -right-3 w-20 h-20 border-r-2 border-b-2 border-purple-500/30 rounded-br-3xl"></div>
                  
                  {/* Main image container - sophisticated frame design */}
                  <div className="relative">
                    {/* Inner border frame */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 rounded-2xl p-[1px]">
                      <div className="w-full h-full bg-gray-900 rounded-2xl"></div>
                    </div>
                    
                    {/* Image wrapper with padding for frame effect */}
                    <div className="relative bg-gradient-to-br from-gray-800 via-gray-850 to-gray-900 rounded-2xl p-3 w-[300px] h-[380px] sm:w-[340px] sm:h-[420px]">
                      <div className="relative w-full h-full rounded-xl overflow-hidden">
                        <img
                          src="/images/dipak-portfolio.jpeg"
                          alt="Dipak Tembe"
                          className="w-full h-full object-cover"
                        />
                        
                        {/* Subtle vignette effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
                      </div>
                      
                      {/* Corner accent details */}
                      <div className="absolute top-2 left-2 w-3 h-3 border-l border-t border-white/20 rounded-tl"></div>
                      <div className="absolute top-2 right-2 w-3 h-3 border-r border-t border-white/20 rounded-tr"></div>
                      <div className="absolute bottom-2 left-2 w-3 h-3 border-l border-b border-white/20 rounded-bl"></div>
                      <div className="absolute bottom-2 right-2 w-3 h-3 border-r border-b border-white/20 rounded-br"></div>
                    </div>
                  </div>
                  
                  {/* Elegant status badge - positioned outside frame */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-max">
                    <div className="bg-gray-900/90 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2 shadow-xl">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                        <span className="text-white text-xs font-medium tracking-wide">Open to Work</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Content Section */}
              <motion.div
                className="order-1 lg:order-2 text-center lg:text-left space-y-6"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              >
                {/* Elegant title badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-300 tracking-wide">Full Stack Developer</span>
                </div>

                {/* Main heading - sophisticated typography */}
                <div>
                  <h1 className="text-gray-400 text-xl sm:text-2xl font-light mb-3 tracking-wide">
                    Hello, I'm
                  </h1>
                  <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
                    Dipak Tembe
                  </h2>
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </div>

                {/* Elegant subtitle */}
                <p className="text-xl sm:text-2xl text-gray-300 font-light leading-relaxed">
                  Crafting elegant digital experiences with modern web technologies
                </p>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed max-w-xl text-base">
                  Specialized in building scalable web applications using React, Node.js, and modern development practices. 
                  Passionate about clean code and exceptional user experiences.
                </p>

                {/* CTA Buttons - refined design */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                  <motion.a
                    href="/Dipak Resume.pdf"
                    download="Dipak_Tembe_Resume.pdf"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl transition-all duration-300 hover:bg-gray-100 shadow-lg hover:shadow-xl hover:scale-105"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaDownload className="w-4 h-4" />
                    Download Resume
                  </motion.a>

                  <motion.button
                    onClick={() => scrollToSection(contactRef)}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/20 text-white font-semibold rounded-xl backdrop-blur-sm hover:border-white/40 hover:bg-white/5 transition-all duration-300"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get In Touch
                  </motion.button>
                </div>

                {/* Social Links - minimal and elegant */}
                <div className="flex gap-4 justify-center lg:justify-start pt-2">
                  {[
                    { icon: FaGithub, href: "#", label: "GitHub" },
                    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
                    { icon: FaTwitter, href: "#", label: "Twitter" },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 flex items-center justify-center border border-white/20 rounded-xl backdrop-blur-sm hover:border-white/40 hover:bg-white/5 transition-all duration-300 group"
                      whileHover={{ y: -3 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator - refined */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.button
              onClick={() => scrollToSection(techStackRef)}
              className="flex flex-col items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
              <ArrowDown className="w-4 h-4" />
            </motion.button>
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