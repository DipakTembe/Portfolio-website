import React from "react";
import { FaPaperPlane, FaPhone, FaFacebook, FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section 
      id="contact" 
      className="py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
    >
      <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        
        {/* Contact Info & Social Links */}
        <motion.div 
          className="contact-left bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text mb-6">
            📩 Contact Me
          </h1>

          <p className="text-lg text-gray-300 flex items-center gap-2">
            <FaPaperPlane className="text-blue-400 text-xl" /> dipak7499@gmail.com
          </p>
          <p className="text-lg text-gray-300 flex items-center gap-2 mt-2">
            <FaPhone className="text-blue-400 text-xl" /> 8329672473
          </p>

          {/* Social Icons */}
          <div className="flex gap-6 mt-6">
            {[ 
              { href: "https://www.facebook.com/profile.php?id=100011763692276", icon: <FaFacebook />, color: "text-blue-500" },
              { href: "https://x.com/DipakTembe7499", icon: <FaXTwitter />, color: "text-gray-400" },
              { href: "https://www.instagram.com/dipaktembe/", icon: <FaInstagram />, color: "text-pink-500" },
              { href: "https://www.linkedin.com/in/dipaktembe", icon: <FaLinkedin />, color: "text-blue-300" }
            ].map((item, index) => (
              <motion.a 
                key={index} 
                href={item.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${item.color} text-3xl hover:scale-125 transition-transform duration-300`}
                whileHover={{ scale: 1.2 }}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          className="contact-right bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text mb-6">
            📬 Send Me a Message
          </h2>

          <form className="space-y-4">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 outline-none"
              required 
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 outline-none"
              required 
            />
            <textarea 
              placeholder="Your Message" 
              rows="5" 
              className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 outline-none"
              required
            ></textarea>

            <motion.button 
              type="submit" 
              className="w-full py-3 mt-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:from-blue-600 hover:to-purple-600 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message 🚀
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
