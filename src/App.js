import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import TechStack from "./pages/TechStack";
import Projects from "./pages/Projects"; // Ensure this is correctly pointing to Projects.js
import Contact from "./pages/Contact";
import Certificates from "./pages/Certificates";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/techstack" element={<TechStack />} />
        <Route path="/projects" element={<Projects />} /> {/* This ensures Projects is correctly routed */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/certificates" element={<Certificates />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
