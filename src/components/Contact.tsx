import React, { useEffect, useRef, useState } from 'react';
import { Mail, MapPin, Phone, Send, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'sarmistha.personal14@gmail.com',
      link: 'mailto:sarmistha.personal14@gmail.com',
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '+91-7609948935',
      link: 'tel:+917609948935',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Bhubaneswar, India',
      link: null,
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-[#F6F7FB]">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Get In <span className="text-[#FBC437]">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-[#FBC437] mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-8 mb-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-3 p-6 bg-white rounded-lg hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="p-3 bg-[#FBC437] rounded-lg text-white">{info.icon}</div>
                      <div className="text-center">
                        <h4 className="font-semibold text-gray-800 mb-1">{info.title}</h4>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-gray-600 hover:text-[#FBC437] transition-colors duration-300 text-sm"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-600 text-sm">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Connect With Me</h3>
                <div className="flex gap-4 justify-center">
                  <a
                    href="https://linkedin.com/in/sahoosarmistha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white rounded-lg hover:bg-[#FBC437] hover:text-white transition-all duration-300 shadow-md hover:shadow-xl transform hover:scale-110 group"
                  >
                    <Linkedin size={24} className="text-gray-700 group-hover:text-white" />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white rounded-lg hover:bg-[#FBC437] hover:text-white transition-all duration-300 shadow-md hover:shadow-xl transform hover:scale-110 group"
                  >
                    <Github size={24} className="text-gray-700 group-hover:text-white" />
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#FBC437] to-[#FBC437]/80 rounded-2xl p-8 text-white max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold mb-4 text-center">Let's Work Together!</h3>
                <p className="leading-relaxed text-center">
                  I'm actively seeking opportunities as an Associate Software Engineer. If you have an exciting project
                  or opportunity, I'd love to hear from you!
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-1 text-sm">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 focus:border-[#FBC437] focus:outline-none transition-colors duration-300 text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-1 text-sm">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 focus:border-[#FBC437] focus:outline-none transition-colors duration-300 text-sm"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-1 text-sm">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 focus:border-[#FBC437] focus:outline-none transition-colors duration-300 text-sm"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-1 text-sm">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 focus:border-[#FBC437] focus:outline-none transition-colors duration-300 resize-none text-sm"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#FBC437] text-white font-semibold rounded-lg hover:bg-[#FBC437]/90 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="mt-16 text-center text-gray-600">
            <p className="mb-2">
              Designed & Built by <span className="text-[#FBC437] font-semibold">Sarmistha Sahoo</span>
            </p>
            <p className="text-sm">2025 Portfolio - All Rights Reserved</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
