import React, { useState } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
    {
        id: 1,
        img: "images/E-commerce.jpg",
        title: "E-commerce Platform",
        description:
            "A full-featured online marketplace with product catalog, shopping cart, and secure checkout functionality. Built with modern React patterns and responsive design principles.",
        link: "https://dipakecommercewebsite.netlify.app",
        github: "#",
        tags: ["React", "E-commerce", "Responsive Design"],
        category: "Web Application"
    },
    {
        id: 2,
        img: "images/crypto dashboard.jpg",
        title: "Crypto Analytics Dashboard",
        description:
            "Real-time cryptocurrency tracking dashboard with interactive charts, market analysis, and portfolio management features. Displays trends across multiple coins and time ranges.",
        link: "https://dipakcryptodashboard.netlify.app/",
        github: "#",
        tags: ["React", "Data Visualization", "API Integration"],
        category: "Dashboard"
    },
    {
        id: 3,
        img: "images/to-do list.jpg",
        title: "Task Management App",
        description:
            "Intuitive task management application with drag-and-drop functionality, priority levels, and local storage persistence. Designed for productivity and ease of use.",
        link: "https://dipaktembetodolistapp.netlify.app/",
        github: "#",
        tags: ["React", "Productivity", "Local Storage"],
        category: "Web Application"
    },
];

const Projects = () => {
    const [hoveredId, setHoveredId] = useState(null);

    return (
        <div id="projects" className="min-h-screen py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                {/* Header Section */}
                <div className="mb-20">
                    <div className="inline-block mb-4">
                        <span className="text-sm font-semibold tracking-widest text-blue-400 uppercase">
                            Portfolio
                        </span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-300 text-transparent bg-clip-text">
                        Featured Projects
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl">
                        A selection of recent work showcasing my expertise in full-stack development and modern web technologies
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-16">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            onMouseEnter={() => setHoveredId(project.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            className="group relative bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-800 hover:border-slate-700 transition-all duration-500"
                            style={{
                                transform: hoveredId === project.id ? 'translateY(-4px)' : 'translateY(0)',
                            }}
                        >
                            {/* Image Container */}
                            <div className="relative h-48 overflow-hidden bg-slate-800">
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                                
                                {/* Category Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 text-xs font-medium bg-slate-900/80 backdrop-blur-sm border border-slate-700 rounded-full text-slate-300">
                                        {project.category}
                                    </span>
                                </div>

                                {/* Links overlay */}
                                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 bg-slate-900/80 backdrop-blur-sm rounded-lg border border-slate-700 hover:bg-slate-800 hover:border-slate-600 transition-all"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <ExternalLink className="w-4 h-4 text-slate-300" />
                                    </a>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 bg-slate-900/80 backdrop-blur-sm rounded-lg border border-slate-700 hover:bg-slate-800 hover:border-slate-600 transition-all"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <Github className="w-4 h-4 text-slate-300" />
                                    </a>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-slate-100 mb-3 group-hover:text-white transition-colors">
                                    {project.title}
                                </h3>
                                
                                <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-2.5 py-1 text-xs font-medium bg-slate-800/50 border border-slate-700 rounded text-slate-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* View Project Link */}
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors group/link"
                                >
                                    View Project
                                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                                </a>
                            </div>

                            {/* Bottom border accent */}
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                    ))}
                </div>

                {/* Bottom Section */}
                <div className="pt-12 border-t border-slate-800">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="text-lg font-semibold text-slate-200 mb-2">Interested in my work?</h3>
                            <p className="text-slate-400 text-sm">
                                Check out more projects and contributions on my GitHub profile
                            </p>
                        </div>
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 border border-slate-700 rounded-xl font-medium text-slate-200 hover:bg-slate-700 hover:border-slate-600 transition-all duration-300 whitespace-nowrap"
                        >
                            <Github className="w-5 h-5" />
                            View GitHub Profile
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;