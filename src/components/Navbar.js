import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const sections = ["home", "techstack", "projects", "contact"];

    const handleScroll = () => {
      let currentSection = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsOpen(false); // Close menu on click

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300);
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const navigateToCertificates = () => {
    setIsOpen(false);
    if (location.pathname !== "/certificates") {
      navigate("/certificates");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-gray-900 shadow-md transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-white cursor-pointer" onClick={() => scrollToSection("home")}>
          Dipak 🚀
        </h1>

        <nav>
          <div className="md:hidden" onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} className="text-white" /> : <FaBars size={24} className="text-white" />}
          </div>

          <ul
            className={`md:flex md:space-x-6 absolute md:relative top-full left-0 w-full md:w-auto bg-gray-900 md:bg-transparent flex-col md:flex-row items-center transition-all duration-500 ease-in-out ${
              isOpen ? "flex" : "hidden"
            }`}
          >
            {[
              { name: "Home", id: "home" },
              { name: "Tech Stack", id: "techstack" },
              { name: "Projects", id: "projects" },
              { name: "Contact", id: "contact" },
            ].map((item, index) => (
              <li key={index} className="group">
                <button
                  className={`block py-2 px-6 text-white transition duration-300 ${
                    activeSection === item.id ? "text-red-400 font-bold" : "hover:text-red-400"
                  }`}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.name}
                </button>
              </li>
            ))}
            <li className="group">
              <button
                className="block py-2 px-6 text-white transition duration-300 hover:text-red-400"
                onClick={navigateToCertificates}
              >
                Certificates
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
