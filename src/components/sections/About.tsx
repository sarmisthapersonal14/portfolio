import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Cpu, Globe, Rocket } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Years Experience", value: "5+", icon: Rocket },
    { label: "Projects Completed", value: "40+", icon: Globe },
    { label: "Technologies", value: "15+", icon: Cpu },
    { label: "Open Source", value: "10+", icon: Code2 },
  ];

  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              BEYOND THE <br />
              <span className="text-neon-cyan">INTERFACE</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              I am a motivated MCA graduate with a strong interest in fintech and SaaS solutions. 
              I specialize in API integration, system architecture, and building robust full-stack applications.
            </p>
            <p className="text-white/60 text-lg leading-relaxed mb-12">
              With a background in Computer Science and a Master's from KIIT University, 
              I bring strong problem-solving skills and a collaborative mindset to every project.
            </p>

            <div className="space-y-6">
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white mb-1">KIIT University</span>
                <span className="text-xs font-mono uppercase tracking-widest text-neon-cyan">
                  Master Of Computer Application (2023 - 2025) • CGPA: 8.1/10
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white mb-1">Utkal University</span>
                <span className="text-xs font-mono uppercase tracking-widest text-neon-pink">
                  Bachelor of Science in Computer Science (2019 - 2022) • CGPA: 8.5/10
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden relative group">
              <img
                src="https://picsum.photos/seed/developer/800/800"
                alt="Developer"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              
              {/* Floating Badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-10"
              >
                <Badge className="glass text-neon-cyan border-neon-cyan/30 px-4 py-2">
                  Full Stack
                </Badge>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 left-10"
              >
                <Badge className="glass text-neon-pink border-neon-pink/30 px-4 py-2">
                  Creative Coder
                </Badge>
              </motion.div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-neon-cyan/50 rounded-tl-3xl" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-neon-pink/50 rounded-br-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
