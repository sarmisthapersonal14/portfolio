import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
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

  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Kalinga Institute of Industrial Technology (KIIT)',
      location: 'Bhubaneswar',
      duration: '2023 - 2025',
      description: 'Pursuing advanced studies in computer science with focus on software engineering, database management, and full-stack development.',
    },
    {
      degree: 'Bachelor of Science (B.Sc.) in Computer Science',
      institution: 'Government Autonomous College',
      location: 'Angul',
      duration: '2019 - 2022',
      description: 'Completed undergraduate studies with strong foundation in programming, data structures, algorithms, and computer science fundamentals.',
    },
  ];

  return (
    <section id="education" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              <span className="text-[#FBC437]">Education</span>
            </h2>
            <div className="w-24 h-1 bg-[#FBC437] mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-0 md:left-8 top-0 bottom-0 w-1 bg-[#FBC437]"></div>

              <div className="space-y-12">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="relative pl-8 md:pl-20"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="absolute left-0 md:left-8 transform -translate-x-1/2 w-6 h-6 bg-[#FBC437] rounded-full border-4 border-white shadow-lg"></div>

                    <div className="bg-[#F6F7FB] rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-x-2">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 bg-[#FBC437] rounded-lg flex-shrink-0">
                          <GraduationCap className="text-white" size={24} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">{edu.degree}</h3>
                          <h4 className="text-lg text-[#FBC437] font-semibold mb-3">{edu.institution}</h4>
                          <div className="flex flex-wrap gap-4 text-gray-600 text-sm mb-3">
                            <div className="flex items-center gap-2">
                              <Calendar size={16} />
                              <span>{edu.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin size={16} />
                              <span>{edu.location}</span>
                            </div>
                          </div>
                          <p className="text-gray-700 leading-relaxed">{edu.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
