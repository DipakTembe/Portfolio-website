import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const certificates = [
    {
        id: 1,
        src: "/certificates/01631214374005.png",
        date: "28th Oct, 2023",
        topic: "Introduction to Computer Programming"
    },
    {
        id: 2,
        src: "/certificates/01893377981989.png",
        date: "21st Oct, 2023",
        topic: "End Course Quiz Assessment - Introduction to Computer..."
    },
    {
        id: 3,
        src: "/certificates/96275605643062.png",
        date: "9th Jan, 2024",
        topic: "Competency Test - Tailwind CSS & Front End Capstone Project"
    },

    {
        id: 4,
        src: "certificates/02645674434858.png",
        date: "16th Oct, 2023",
        topic: "Mid Course Quiz Assessment - Introduction to Computer..."
    },
    {
        id: 5,
        src: "certificates/03784205780494.png",
        date: "3rd Jan, 2024",
        topic: "HTML & CSS"
    },
    {
        id: 6,
        src: "certificates/03862866045430.png",
        date: "1st Nov, 2023",
        topic: "Competency Test - Dynamic Web Design"
    },
    {
        id: 7,
        src: "certificates/04806752910540.png",
        date: "1st Nov, 2024",
        topic: "Competency Test - Recursion & Back Tracking"
    },
    {
        id: 8,
        src: "certificates/10327375917984.png",
        date: "28th Oct, 2023",
        topic: "Competency Test - Introduction to DSA"
    },
    {
        id: 9,
        src: "certificates/15414523401265.png",
        date: "28th Oct, 2023",
        topic: "Module:1 Coding Challenge"
    },
    {
        id: 10,
        src: "certificates/15523216184785.png",
        date: "13th Jun, 2024",
        topic: "Competency Test - Relational Database Fundamentals"
    },
    {
        id: 11,
        src: "certificates/16608553983641.png",
        date: "5th Sep, 2023",
        topic: "JavaScript Fundamentals"
    },
    {
        id: 12,
        src: "certificates/17656982233191.png",
        date: "6th Jul, 2024",
        topic: "End Course Quiz Assessment - Practical Software Engineering"
    },
    {
        id: 13,
        src: "certificates/19499261711395.png",
        date: "6th Feb, 2024",
        topic: "Technical Interview Questions"
    },

    {
        id: 14,
        src: "certificates/20624607256634.png",
        date: "4th Jan, 2024",
        topic: "Competency Test - Foundations of Web Design"
    },

    {
        id: 15,
        src: "certificates/23455057342713.png",
        date: "19th Aug, 2023",
        topic: "Introduction to CSS"
    },

    {
        id: 16,
        src: "certificates/26615452437863.png",
        date: "31st Oct, 2023",
        topic: "Mid Course Quiz Assessment - Design & Analysis of Algorithms"
    },

    {
        id: 17,
        src: "certificates/26860478503714.png",
        date: "29th Aug, 2023",
        topic: "Fundamentals of Web Development"
    },

    {
        id: 18,
        src: "certificates/27879730031456.png",
        date: "16th Oct, 2023",
        topic: "Mid Course Quiz Assessment - Introduction to Computer"
    },

    {
        id: 19,
        src: "certificates/29205305479079.png",
        date: "2nd Sep, 2023",
        topic: "Competency Test - Introduction to JavaScript Programming"
    },

    {
        id: 20,
        src: "certificates/31460099125071.png",
        date: "22nd Nov, 2023",
        topic: "Technical Interview Questions"
    },

    {
        id: 21,
        src: "certificates/37304997581938.png",
        date: "19th Aug, 2023",
        topic: "Introduction to NodeJS"
    },

    {
        id: 22,
        src: "certificates/49730457864583.png",
        date: "21st Jun, 2024",
        topic: "Competency Test - Node.js & Express.js Foundations"
    },

    {
        id: 23,
        src: "certificates/52771960255035.png",
        date: "13th Jun, 2024",
        topic: "Mid Course Quiz Assessment - Backend Development"
    },

    {
        id: 24,
        src: "certificates/53078671539323.png",
        date: "1st Jun, 2024",
        topic: "End Course Quiz Assessment - Front-end Development"
    },

    {
        id: 25,
        src: "certificates/60314664047229.png",
        date: "5th Sep, 2023",
        topic: "JavaScript Control Flow and Arrays"
    },

    {
        id: 26,
        src: "certificates/65029734501803.png",
        date: "18th Aug, 2023",
        topic: "Introduction to HTML"
    },

    {
        id: 27,
        src: "certificates/66456690626832.png",
        date: "5th Sep, 2023",
        topic: "JavaScript Fundamentals Competency"
    },

    {
        id: 28,
        src: "certificates/69063458874316.png",
        date: "27th Jun, 2024",
        topic: "Competency Test - Foundations of Practical Software Engineering"
    },

    {
        id: 29,
        src: "certificates/70699405333166.png",
        date: "30th May, 2024",
        topic: "Competency Test - Next.js Foundations"
    },
    {
        id: 29,
        src: "certificates/76831001778512.png",
        date: "13th Jun, 2024",
        topic: "Competency Test - Non-relational Database Fundamentals",
      },
      {
        id: 29,
        src: "certificates/77232779213586.png",
        date: "2nd Jul, 2024",
        topic: "Mid Course Quiz Assessment - Practical Software Engineering",
      },
      {
        id: 30,
        src: "certificates/80977080189906.png",
        date: "5th Sep, 2023",
        topic: "Functional and Object Oriented Programming in JavaScript",
      },
      {
        id: 31,
        src: "certificates/87527567633072.png",
        date: "3rd Jul, 2024",
        topic: "Competency Test - Design Principles, Best Practices & 3rdg",
      },
      {
        id: 32,
        src: "certificates/87535835142815.png",
        date: "3rd Oct, 2023",
        topic: "Competency Test - JavaScript Foundation",
      },
      {
        id: 33,
        src: "certificates/89401562451902.png",
        date: "29th Oct, 2023",
        topic: "Test - Sorting Algorithms and Searching",
      },
      {
        id: 34,
        src: "certificates/90758840724169.png",
        date: "3rd Jan, 2024",
        topic: "End Course Quiz Assessment - Design & Analysis of Algorithms",
      },
      {
        id: 35,
        src: "certificates/91302693185587.png",
        date: "15th Oct, 2023",
        topic: "Competency Test - Modern JavaScript Concepts",
      },
      {
        id: 36,
        src: "certificates/93279458410388.png",
        date: "28th May, 2024",
        topic: "Competency Test - ReactJS Foundations",
      },
      {
        id: 37,
        src: "certificates/94686590196442.png",
        date: "5th Sep, 2023",
        topic: "Basics of Web Fundamentals",
      },
      {
        id: 38,
        src: "certificates/94857183874920.png",
        date: "1st Jul, 2024",
        topic: "Competency Test - Practical Session with Deployment on AWS",
      },

];

const Certificates = () => {
    const [modalImage, setModalImage] = useState(null);
  
    return (
      <div className="bg-gray-100 min-h-screen p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Certificates</h1>
  
        {/* Certificate Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-lg shadow-md p-4 text-center transform transition hover:scale-105"
            >
              <img
                src={cert.src}
                alt={`Certificate ${cert.id}`}
                className="w-full rounded-md"
              />
              <div className="mt-3 text-gray-700 text-left">
                <p className="text-sm">
                  <span className="font-semibold">Date:</span> {cert.date}
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Topic:</span> {cert.topic}
                </p>
              </div>
              <button
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                onClick={() => setModalImage(cert.src)}
              >
                View
              </button>
            </div>
          ))}
        </div>
  
        {/* Modal */}
        {modalImage && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
            <div className="relative bg-white p-4 rounded-lg shadow-lg">
              <button
                className="absolute top-2 right-2 text-gray-700 text-3xl"
                onClick={() => setModalImage(null)}
              >
                <FaTimes />
              </button>
              <img
                src={modalImage}
                alt="Certificate"
                className="max-w-[90vw] max-h-[90vh] rounded-md"
              />
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default Certificates;