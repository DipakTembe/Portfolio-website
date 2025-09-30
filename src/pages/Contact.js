import React, { useState } from "react";
import { Mail, Phone, Send, Facebook, Twitter, Instagram, Linkedin, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "dipak7499@gmail.com",
      href: "mailto:dipak7499@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 8329672473",
      href: "tel:+918329672473"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "India",
      href: null
    }
  ];

  const socialLinks = [
    { 
      href: "https://www.linkedin.com/in/dipaktembe", 
      icon: <Linkedin className="w-5 h-5" />, 
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    { 
      href: "https://x.com/DipakTembe7499", 
      icon: <Twitter className="w-5 h-5" />, 
      label: "Twitter",
      color: "hover:text-sky-400"
    },
    { 
      href: "https://www.facebook.com/profile.php?id=100011763692276", 
      icon: <Facebook className="w-5 h-5" />, 
      label: "Facebook",
      color: "hover:text-blue-500"
    },
    { 
      href: "https://www.instagram.com/dipaktembe/", 
      icon: <Instagram className="w-5 h-5" />, 
      label: "Instagram",
      color: "hover:text-pink-500"
    }
  ];

  return (
    <section 
      id="contact" 
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white"
    >
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold tracking-widest text-blue-400 uppercase">
              Get In Touch
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-300 text-transparent bg-clip-text">
            Let's Work Together
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out and let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Contact Details */}
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800">
              <h3 className="text-lg font-semibold text-slate-200 mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index}>
                    {item.href ? (
                      <a 
                        href={item.href}
                        className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-800/50 transition-colors group"
                      >
                        <div className="p-2 bg-slate-800 rounded-lg text-blue-400 group-hover:bg-slate-700 transition-colors">
                          {item.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-slate-500 font-medium mb-1">{item.label}</p>
                          <p className="text-sm text-slate-300 group-hover:text-slate-200 break-all">{item.value}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start gap-4 p-3">
                        <div className="p-2 bg-slate-800 rounded-lg text-blue-400">
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <p className="text-xs text-slate-500 font-medium mb-1">{item.label}</p>
                          <p className="text-sm text-slate-300">{item.value}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800">
              <h3 className="text-lg font-semibold text-slate-200 mb-6">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 p-3 bg-slate-800 rounded-xl border border-slate-700 hover:border-slate-600 transition-all ${social.color} text-slate-400`}
                    aria-label={social.label}
                  >
                    {social.icon}
                    <span className="text-sm font-medium">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Badge */}
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-200">Available for Work</p>
                  <p className="text-xs text-slate-400">Open to new opportunities</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800">
              <h2 className="text-2xl font-semibold text-slate-200 mb-6">
                Send Me a Message
              </h2>

              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Your Name
                    </label>
                    <input 
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe" 
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Your Email
                    </label>
                    <input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com" 
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Your Message
                  </label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..." 
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  onClick={handleSubmit}
                  className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-medium text-white transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-16 pt-12 border-t border-slate-800">
          <p className="text-slate-500 text-sm">
            I typically respond within 24-48 hours. Looking forward to hearing from you!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;