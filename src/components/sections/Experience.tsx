import { motion } from "motion/react";

const experiences = [
  {
    period: "10/2024 - 03/2025",
    role: "MERN Stack Developer Intern",
    company: "Tetratrion Technologies Pvt.Ltd.",
    description: "Developed full-stack web applications implementing CRUD operations and integrating frontend with backend services. Collaborated on API integration and utilized Git for version control.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center">JOURNEY</h2>
        
        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-[1fr_2px_2fr] gap-12 items-start">
                <div className="md:text-right pb-4 md:pb-0">
                  <span className="text-sm font-mono text-neon-cyan tracking-widest">{exp.period}</span>
                  <h3 className="text-xl font-bold mt-2">{exp.company}</h3>
                </div>
                
                <div className="hidden md:block h-full bg-white/10 relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-neon-cyan neon-border" />
                </div>
                
                <div className="pb-12">
                  <h4 className="text-lg font-medium text-white/80 mb-4">{exp.role}</h4>
                  <p className="text-white/40 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
