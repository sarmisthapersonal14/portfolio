import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const experience = {
    company: 'TETRATRION',
    role: 'MERN Stack Developer Intern',
    location: 'Bhubaneswar',
    duration: 'October 2024 - April 2025',
    responsibilities: [
      'Designed and developed responsive web modules integrating RESTful APIs with optimized performance and scalability',
      'Collaborated with cross-functional Agile teams to implement secure, maintainable, and well-documented software',
      'Applied debugging, testing, and version control (Git, GitHub) to ensure smooth deployments',
      'Participated in sprint planning and code reviews, contributing to continuous improvement of software processes',
      'Strengthened backend logic and database handling, aligning with data security and user requirements',
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'Git', 'RESTful APIs'],
  };

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-[#F6F7FB]">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Work <span className="text-[#FBC437]">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-[#FBC437] mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-[#FBC437]"></div>

              <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 md:p-10 ml-8 md:ml-0">
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#FBC437] rounded-full border-4 border-white shadow-lg"></div>

                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-[#FBC437] rounded-lg">
                    <Briefcase className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{experience.role}</h3>
                    <h4 className="text-xl text-[#FBC437] font-semibold mb-3">{experience.company}</h4>
                    <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{experience.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h5 className="font-semibold text-gray-800 mb-3 text-lg">Key Responsibilities:</h5>
                  <ul className="space-y-3">
                    {experience.responsibilities.map((resp, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-[#FBC437] mt-1.5 flex-shrink-0">▸</span>
                        <span className="text-gray-700">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-800 mb-3 text-lg">Technologies:</h5>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-[#F6F7FB] text-gray-700 rounded-full text-sm font-medium hover:bg-[#FBC437] hover:text-white transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
