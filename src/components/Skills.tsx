import React, { useEffect, useRef, useState } from 'react';

const Skills: React.FC = () => {
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

  const skillCategories = [
    {
      title: 'Languages',
      skills: ['C#', 'JavaScript', 'Java', 'Python', 'HTML', 'CSS', 'SQL'],
    },
    {
      title: 'Frameworks & Tools',
      skills: ['ASP.NET', '.NET Framework 4.5+', 'MVC 5', 'React.js', 'Node.js', 'Express.js', 'Spring Boot', 'Visual Studio'],
    },
    {
      title: 'Databases',
      skills: ['MS SQL Server', 'Oracle PL/SQL', 'MySQL', 'MongoDB'],
    },
    {
      title: 'Technologies',
      skills: ['RESTful APIs', 'AJAX', 'jQuery', 'JSON', 'Git', 'GitHub', 'SSRS', 'SSIS', 'ADO.NET'],
    },
    {
      title: 'Development Practices',
      skills: ['SDLC', 'Agile', 'OOP', 'OOAD', 'UML', 'CI/CD', 'Unit Testing', 'Debugging'],
    },
    {
      title: 'Soft Skills',
      skills: ['Teamwork', 'Problem Solving', 'Analytical Thinking', 'Communication', 'Adaptability', 'Client Focus'],
    },
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Technical <span className="text-[#FBC437]">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-[#FBC437] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-[#F6F7FB] rounded-xl p-6 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-[#FBC437]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4 pb-3 border-b-2 border-[#FBC437]">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 bg-white text-gray-700 rounded-lg text-sm font-medium hover:bg-[#FBC437] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-[#FBC437]/20 to-[#FBC437]/10 rounded-2xl p-8 md:p-10">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Certifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h4 className="font-semibold text-gray-800 mb-2">.NET Framework and C# Development</h4>
                  <p className="text-gray-600 text-sm">Coursera • 2024</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h4 className="font-semibold text-gray-800 mb-2">SQL & Database Management</h4>
                  <p className="text-gray-600 text-sm">Infosys Springboard • 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
