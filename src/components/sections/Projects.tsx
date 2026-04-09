import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Demo Bank - Digital Banking",
    description: "A full-stack fintech web application with user authentication, balance management, and secure fund transfer features. Designed RESTful APIs for real-time transactions.",
    image: "https://picsum.photos/seed/bank/800/600",
    tags: ["React", "Node.js", "Express", "MongoDB", "Python"],
    link: "#",
    github: "https://github.com/sarmisthapersonal14/Demo-Bank-Digital-Banking-System",
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce platform with product listing, shopping cart, and secure checkout. Implemented user authentication and authorization.",
    image: "https://picsum.photos/seed/shop/800/600",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    link: "#",
    github: "https://github.com/sarmisthapersonal14/E-Commerce-Web-Application",
  },
  {
    title: "Hostel Management System",
    description: "Web-based system to manage student accommodation and room allocation. Includes modules for registration, booking, and admin management.",
    image: "https://picsum.photos/seed/hostel/800/600",
    tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    link: "#",
    github: "https://github.com/sarmisthapersonal14/Hostel-Management-System",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">SELECTED WORKS</h2>
            <p className="text-white/40 font-mono text-sm uppercase tracking-widest">
              A collection of digital experiments and professional projects.
            </p>
          </motion.div>
          <Button variant="link" className="text-neon-cyan p-0 h-auto font-mono uppercase tracking-widest">
            View Archive
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="group glass border-white/5 overflow-hidden h-full flex flex-col hover:border-neon-cyan/30 transition-all duration-500">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                    <a
                      href={project.github}
                      aria-label={`${project.title} — GitHub`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full p-2 bg-white/5 hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-neon-cyan/40 rounded"
                    >
                      <Github className="w-5 h-5" aria-hidden="true" />
                    </a>
                    <a
                      href={project.link}
                      aria-label={`${project.title} — Live site`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full p-2 bg-white/5 hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-neon-cyan/40 rounded"
                    >
                      <ExternalLink className="w-5 h-5" aria-hidden="true" />
                    </a>
                  </div>
                </div>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="text-[10px] font-mono uppercase tracking-wider text-white/40 border border-white/10 px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-neon-cyan transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
