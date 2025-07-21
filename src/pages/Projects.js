import React from "react";

const projects = [
    {
        id: 1,
        img: "images/crypto dashboard.jpg",
        title: "Crypto Dashboard",
        description:
            "Automatically track changes in movement & earnings potential across multiple coins, time ranges, trading intervals, and more.",
        link: "#",
    },
    {
        id: 2,
        img: "images/E-commerce.jpg",
        title: "E-commerce Website",
        description:
            "An e-commerce website is an online store where customers can buy and sell products and services.",
        link: "#",
    },
    {
        id: 3,
        img: "images/to-do list.jpg",
        title: "To-Do List App",
        description:
            "The prediction of future weather conditions based on global and regional scale numerical models and data assimilation.",
        link: "https://dipaktembetodolistapp.netlify.app/",
    },
];

const Projects = () => {
    return (
        <div id="projects" className="py-16 bg-gray-400">
            <div className="container mx-auto px-6">
                <h1 className="text-3xl font-bold text-center mb-8">My Projects</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="relative group overflow-hidden rounded-lg shadow-lg"
                        >
                            <img
                                src={project.img}
                                alt={project.title}
                                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-300"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white text-center p-4 transition duration-300">
                                <h3 className="text-xl font-semibold">{project.title}</h3>
                                <p className="text-sm mt-2">{project.description}</p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-block bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-8">
                    <a href="/more-projects" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
                        See More
                    </a>

                </div>
            </div>
        </div>
    );
};

export default Projects;
