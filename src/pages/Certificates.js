import React, { useState } from "react";
import { Award, Calendar, Search, X, Eye, Filter } from "lucide-react";

const certificates = [
    {
        id: 1,
        src: "/certificates/01631214374005.png",
        date: "28th Oct, 2023",
        topic: "Introduction to Computer Programming",
        category: "Programming"
    },
    {
        id: 2,
        src: "/certificates/01893377981989.png",
        date: "21st Oct, 2023",
        topic: "End Course Quiz Assessment - Introduction to Computer Programming",
        category: "Assessment"
    },
    {
        id: 3,
        src: "/certificates/96275605643062.png",
        date: "9th Jan, 2024",
        topic: "Competency Test - Tailwind CSS & Front End Capstone Project",
        category: "Frontend"
    },
    {
        id: 4,
        src: "certificates/02645674434858.png",
        date: "16th Oct, 2023",
        topic: "Mid Course Quiz Assessment - Introduction to Computer Programming",
        category: "Assessment"
    },
    {
        id: 5,
        src: "certificates/03784205780494.png",
        date: "3rd Jan, 2024",
        topic: "HTML & CSS",
        category: "Frontend"
    },
    {
        id: 6,
        src: "certificates/03862866045430.png",
        date: "1st Nov, 2023",
        topic: "Competency Test - Dynamic Web Design",
        category: "Frontend"
    },
    {
        id: 7,
        src: "certificates/04806752910540.png",
        date: "1st Nov, 2024",
        topic: "Competency Test - Recursion & Back Tracking",
        category: "Algorithms"
    },
    {
        id: 8,
        src: "certificates/10327375917984.png",
        date: "28th Oct, 2023",
        topic: "Competency Test - Introduction to DSA",
        category: "Algorithms"
    },
    {
        id: 9,
        src: "certificates/15414523401265.png",
        date: "28th Oct, 2023",
        topic: "Module:1 Coding Challenge",
        category: "Programming"
    },
    {
        id: 10,
        src: "certificates/15523216184785.png",
        date: "13th Jun, 2024",
        topic: "Competency Test - Relational Database Fundamentals",
        category: "Database"
    },
    {
        id: 11,
        src: "certificates/16608553983641.png",
        date: "5th Sep, 2023",
        topic: "JavaScript Fundamentals",
        category: "Programming"
    },
    {
        id: 12,
        src: "certificates/17656982233191.png",
        date: "6th Jul, 2024",
        topic: "End Course Quiz Assessment - Practical Software Engineering",
        category: "Software Engineering"
    },
    {
        id: 13,
        src: "certificates/19499261711395.png",
        date: "6th Feb, 2024",
        topic: "Technical Interview Questions",
        category: "Interview Prep"
    },
    {
        id: 14,
        src: "certificates/20624607256634.png",
        date: "4th Jan, 2024",
        topic: "Competency Test - Foundations of Web Design",
        category: "Frontend"
    },
    {
        id: 15,
        src: "certificates/23455057342713.png",
        date: "19th Aug, 2023",
        topic: "Introduction to CSS",
        category: "Frontend"
    },
    {
        id: 16,
        src: "certificates/26615452437863.png",
        date: "31st Oct, 2023",
        topic: "Mid Course Quiz Assessment - Design & Analysis of Algorithms",
        category: "Algorithms"
    },
    {
        id: 17,
        src: "certificates/26860478503714.png",
        date: "29th Aug, 2023",
        topic: "Fundamentals of Web Development",
        category: "Frontend"
    },
    {
        id: 18,
        src: "certificates/27879730031456.png",
        date: "16th Oct, 2023",
        topic: "Mid Course Quiz Assessment - Introduction to Computer Programming",
        category: "Assessment"
    },
    {
        id: 19,
        src: "certificates/29205305479079.png",
        date: "2nd Sep, 2023",
        topic: "Competency Test - Introduction to JavaScript Programming",
        category: "Programming"
    },
    {
        id: 20,
        src: "certificates/31460099125071.png",
        date: "22nd Nov, 2023",
        topic: "Technical Interview Questions",
        category: "Interview Prep"
    },
    {
        id: 21,
        src: "certificates/37304997581938.png",
        date: "19th Aug, 2023",
        topic: "Introduction to NodeJS",
        category: "Backend"
    },
    {
        id: 22,
        src: "certificates/49730457864583.png",
        date: "21st Jun, 2024",
        topic: "Competency Test - Node.js & Express.js Foundations",
        category: "Backend"
    },
    {
        id: 23,
        src: "certificates/52771960255035.png",
        date: "13th Jun, 2024",
        topic: "Mid Course Quiz Assessment - Backend Development",
        category: "Backend"
    },
    {
        id: 24,
        src: "certificates/53078671539323.png",
        date: "1st Jun, 2024",
        topic: "End Course Quiz Assessment - Front-end Development",
        category: "Frontend"
    },
    {
        id: 25,
        src: "certificates/60314664047229.png",
        date: "5th Sep, 2023",
        topic: "JavaScript Control Flow and Arrays",
        category: "Programming"
    },
    {
        id: 26,
        src: "certificates/65029734501803.png",
        date: "18th Aug, 2023",
        topic: "Introduction to HTML",
        category: "Frontend"
    },
    {
        id: 27,
        src: "certificates/66456690626832.png",
        date: "5th Sep, 2023",
        topic: "JavaScript Fundamentals Competency",
        category: "Programming"
    },
    {
        id: 28,
        src: "certificates/69063458874316.png",
        date: "27th Jun, 2024",
        topic: "Competency Test - Foundations of Practical Software Engineering",
        category: "Software Engineering"
    },
    {
        id: 29,
        src: "certificates/70699405333166.png",
        date: "30th May, 2024",
        topic: "Competency Test - Next.js Foundations",
        category: "Frontend"
    },
    {
        id: 30,
        src: "certificates/76831001778512.png",
        date: "13th Jun, 2024",
        topic: "Competency Test - Non-relational Database Fundamentals",
        category: "Database"
    },
    {
        id: 31,
        src: "certificates/77232779213586.png",
        date: "2nd Jul, 2024",
        topic: "Mid Course Quiz Assessment - Practical Software Engineering",
        category: "Software Engineering"
    },
    {
        id: 32,
        src: "certificates/80977080189906.png",
        date: "5th Sep, 2023",
        topic: "Functional and Object Oriented Programming in JavaScript",
        category: "Programming"
    },
    {
        id: 33,
        src: "certificates/87527567633072.png",
        date: "3rd Jul, 2024",
        topic: "Competency Test - Design Principles, Best Practices & Deployment",
        category: "Software Engineering"
    },
    {
        id: 34,
        src: "certificates/87535835142815.png",
        date: "3rd Oct, 2023",
        topic: "Competency Test - JavaScript Foundation",
        category: "Programming"
    },
    {
        id: 35,
        src: "certificates/89401562451902.png",
        date: "29th Oct, 2023",
        topic: "Test - Sorting Algorithms and Searching",
        category: "Algorithms"
    },
    {
        id: 36,
        src: "certificates/90758840724169.png",
        date: "3rd Jan, 2024",
        topic: "End Course Quiz Assessment - Design & Analysis of Algorithms",
        category: "Algorithms"
    },
    {
        id: 37,
        src: "certificates/91302693185587.png",
        date: "15th Oct, 2023",
        topic: "Competency Test - Modern JavaScript Concepts",
        category: "Programming"
    },
    {
        id: 38,
        src: "certificates/93279458410388.png",
        date: "28th May, 2024",
        topic: "Competency Test - ReactJS Foundations",
        category: "Frontend"
    },
    {
        id: 39,
        src: "certificates/94686590196442.png",
        date: "5th Sep, 2023",
        topic: "Basics of Web Fundamentals",
        category: "Frontend"
    },
    {
        id: 40,
        src: "certificates/94857183874920.png",
        date: "1st Jul, 2024",
        topic: "Competency Test - Practical Session with Deployment on AWS",
        category: "DevOps"
    },
];

const Certificates = () => {
    const [modalImage, setModalImage] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", ...new Set(certificates.map(cert => cert.category))];

    const filteredCertificates = certificates.filter(cert => {
        const matchesSearch = cert.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            cert.date.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === "All" || cert.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const stats = [
        { label: "Total Certificates", value: certificates.length },
        { label: "Categories", value: categories.length - 1 },
        { label: "Latest", value: "Jul 2024" }
    ];
  
    return (
      <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
        <div className="container mx-auto max-w-7xl">
          
          {/* Header */}
          <div className="mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold tracking-widest text-blue-400 uppercase">
                Certifications & Achievements
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-300 text-transparent bg-clip-text">
              Professional Certificates
            </h1>
            
            <p className="text-slate-400 text-lg max-w-3xl mb-8">
              A comprehensive collection of certifications demonstrating continuous learning and expertise across various technologies and methodologies.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-4 border border-slate-800">
                  <p className="text-2xl font-bold text-slate-200">{stat.value}</p>
                  <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search certificates..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-slate-900/50 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-slate-700 transition-all"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 pointer-events-none" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-11 pr-8 py-3 bg-slate-900/50 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-slate-700 transition-all appearance-none cursor-pointer"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Results count */}
          {searchTerm || selectedCategory !== "All" ? (
            <p className="text-slate-400 text-sm mb-6">
              Showing {filteredCertificates.length} of {certificates.length} certificates
            </p>
          ) : null}

          {/* Certificate Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredCertificates.map((cert) => (
              <div
                key={cert.id}
                className="group bg-slate-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-800 hover:border-slate-700 transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative h-44 overflow-hidden bg-slate-800/30 flex items-center justify-center p-3">
                  <img
                    src={cert.src}
                    alt={cert.topic}
                    className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-2 left-2">
                    <span className="px-2 py-1 text-xs font-medium bg-slate-900/80 backdrop-blur-sm border border-slate-700 rounded text-slate-300">
                      {cert.category}
                    </span>
                  </div>

                  {/* View overlay */}
                  <button
                    onClick={() => setModalImage(cert.src)}
                    className="absolute inset-0 flex items-center justify-center bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="bg-slate-800 p-3 rounded-lg border border-slate-700">
                      <Eye className="w-5 h-5 text-slate-300" />
                    </div>
                  </button>
                </div>

                {/* Content */}
                <div className="p-4">
                  <p className="text-sm text-slate-300 leading-relaxed mb-3 line-clamp-2 group-hover:text-slate-200 transition-colors">
                    {cert.topic}
                  </p>

                  <div className="flex items-center gap-2 text-slate-500 text-xs">
                    <Calendar className="w-3 h-3" />
                    <span>{cert.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredCertificates.length === 0 && (
            <div className="text-center py-16">
              <div className="inline-block p-8 bg-slate-900/50 border border-slate-800 rounded-2xl backdrop-blur-sm">
                <Search className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                <p className="text-slate-400 text-lg mb-2">No certificates found</p>
                <p className="text-slate-500 text-sm">Try adjusting your search or filter criteria</p>
              </div>
            </div>
          )}
        </div>

        {/* Modal */}
        {modalImage && (
          <div 
            className="fixed inset-0 bg-black/95 backdrop-blur-sm flex justify-center items-center z-50 p-4"
            onClick={() => setModalImage(null)}
          >
            <div 
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-12 right-0 w-10 h-10 flex items-center justify-center bg-slate-800 border border-slate-700 rounded-lg hover:bg-slate-700 transition-colors"
                onClick={() => setModalImage(null)}
              >
                <X className="w-5 h-5 text-slate-300" />
              </button>

              <div className="bg-slate-900/50 backdrop-blur-sm p-4 rounded-xl border border-slate-800">
                <img
                  src={modalImage}
                  alt="Certificate"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    );
};
  
export default Certificates;