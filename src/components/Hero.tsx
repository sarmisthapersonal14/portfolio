import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const roles = ['Software Engineer', 'Full Stack Developer', 'MERN Stack Developer'];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FBC437]/10 via-[#F6F7FB] to-[#FBC437]/5"></div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-[#FBC437]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FBC437]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-6">
              <h2 className="text-xl md:text-2xl text-gray-600 mb-2">Hello, I'm</h2>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-4">
                Sarmistha Sahoo
              </h1>
              <div className="h-12 flex items-center justify-center">
                <p className="text-2xl md:text-3xl font-semibold text-[#FBC437] animate-fade-in">
                  {roles[currentRole]}
                </p>
              </div>
            </div>

            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Results-driven Software Engineer with expertise in full-stack development,
              specializing in .NET, MERN Stack, and scalable web solutions.
              Based in Bhubaneswar, India.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <button
                onClick={scrollToContact}
                className="px-8 py-4 bg-[#FBC437] text-gray-800 font-semibold rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Get In Touch
              </button>
              <a
                href="mailto:sarmistha.personal14@gmail.com"
                className="px-8 py-4 bg-white text-gray-800 font-semibold rounded-full border-2 border-[#FBC437] hover:bg-[#FBC437] hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <Download size={20} />
                Download CV
              </a>
            </div>

            <div className="flex gap-6 justify-center">
              <a
                href="https://linkedin.com/in/sahoosarmistha"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 hover:bg-[#FBC437] transition-all duration-300 group"
              >
                <Linkedin className="text-gray-700 group-hover:text-white" size={24} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 hover:bg-[#FBC437] transition-all duration-300 group"
              >
                <Github className="text-gray-700 group-hover:text-white" size={24} />
              </a>
              <a
                href="mailto:sarmistha.personal14@gmail.com"
                className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 hover:bg-[#FBC437] transition-all duration-300 group"
              >
                <Mail className="text-gray-700 group-hover:text-white" size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-[#FBC437]" size={32} />
      </div>
    </section>
  );
};

export default Hero;
