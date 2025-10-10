import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
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

  const projects = [
    {
      title: 'Hostel Management System',
      description:
        'Developed a secure, full-stack management system enabling student record tracking, automated payments, and role-based access control. Features include real-time data updates, secure authentication, and comprehensive reporting.',
      technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      features: [
        'Student record management',
        'Automated payment processing',
        'Role-based access control',
        'Real-time updates',
      ],
    },
    {
      title: 'Portfolio Website',
      description:
        'Created a personal portfolio website focusing on responsive design and optimized rendering across browsers. Implemented modern UI/UX principles with smooth animations and interactive elements.',
      technologies: ['React.js', 'CSS', 'JavaScript', 'Responsive Design'],
      features: [
        'Fully responsive design',
        'Smooth animations',
        'Cross-browser compatibility',
        'Optimized performance',
      ],
    },
    {
      title: 'Scientific Calculator',
      description:
        'Engineered a fast, reliable calculator with enhanced error handling and efficient computation methods. Supports basic arithmetic, trigonometric functions, logarithms, and advanced mathematical operations.',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Algorithm Design'],
      features: [
        'Advanced mathematical functions',
        'Error handling',
        'Clean user interface',
        'Efficient algorithms',
      ],
    },
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-[#F6F7FB]">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Featured <span className="text-[#FBC437]">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-[#FBC437] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="h-2 bg-gradient-to-r from-[#FBC437] to-[#FBC437]/60"></div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2 text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="text-[#FBC437] mt-1">▸</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2 text-sm">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-[#F6F7FB] text-gray-700 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-gray-100">
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#FBC437] text-white rounded-lg hover:bg-[#FBC437]/90 transition-colors duration-300">
                      <Github size={16} />
                      <span className="text-sm font-medium">Code</span>
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300">
                      <ExternalLink size={16} />
                      <span className="text-sm font-medium">Demo</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
