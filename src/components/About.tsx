import React, { useEffect, useRef, useState } from 'react';
import { Code2, Database, Layout, Server } from 'lucide-react';

const About: React.FC = () => {
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

  const highlights = [
    {
      icon: <Code2 size={32} />,
      title: 'Full Stack Development',
      description: 'Expertise in building end-to-end web applications using modern frameworks and technologies',
    },
    {
      icon: <Database size={32} />,
      title: 'Database Management',
      description: 'Proficient in SQL Server, MongoDB, MySQL, and Oracle PL/SQL with strong data modeling skills',
    },
    {
      icon: <Layout size={32} />,
      title: 'Responsive Design',
      description: 'Creating beautiful, user-friendly interfaces that work seamlessly across all devices',
    },
    {
      icon: <Server size={32} />,
      title: 'Backend Systems',
      description: 'Building scalable APIs and server-side logic with Node.js, Express.js, and .NET',
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              About <span className="text-[#FBC437]">Me</span>
            </h2>
            <div className="w-24 h-1 bg-[#FBC437] mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-[#F6F7FB] rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                I'm a passionate <span className="font-semibold text-[#FBC437]">Software Engineer</span> with hands-on
                experience in full-stack development, application engineering, and database management. Currently pursuing
                my Master's in Computer Applications at KIIT, Bhubaneswar, I've honed my skills through academic excellence
                and real-world internship experience.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                As a <span className="font-semibold text-[#FBC437]">MERN Stack Developer Intern at TETRATRION</span>,
                I've been designing responsive web modules, integrating RESTful APIs, and collaborating with cross-functional
                Agile teams to deliver secure, scalable solutions. My technical toolkit spans across .NET, C#, ASP.NET,
                React.js, Node.js, and various database technologies.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm driven by a passion for creating efficient, user-centric applications and continuously expanding my
                expertise in modern web technologies. My goal is to contribute to innovative projects that make a real
                impact in the tech industry.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-white border-2 border-[#F6F7FB] rounded-xl p-6 hover:border-[#FBC437] hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-[#FBC437] mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
