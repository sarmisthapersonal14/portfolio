import { motion } from "motion/react";

const skills = [
  { name: "JavaScript / ES6", level: 95, color: "var(--color-neon-cyan)" },
  { name: "React.js / Tailwind", level: 92, color: "var(--color-neon-purple)" },
  { name: "Node.js / Express.js", level: 88, color: "var(--color-neon-pink)" },
  { name: "MongoDB / MySQL", level: 85, color: "var(--color-neon-cyan)" },
  { name: "Python / Java", level: 80, color: "var(--color-neon-purple)" },
  { name: "Docker / Kubernetes", level: 75, color: "var(--color-neon-pink)" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            TECH STACK
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/40 font-mono text-sm uppercase tracking-[0.3em]"
          >
            My specialized toolkit for building the future.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {skills.map((skill, i) => (
            <div key={i} className="space-y-4">
              <div className="flex justify-between items-end">
                <span className="text-lg font-medium">{skill.name}</span>
                <span className="text-sm font-mono text-white/40">{skill.level}%</span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden relative">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: i * 0.1 }}
                  style={{ backgroundColor: skill.color }}
                  className="absolute inset-y-0 left-0 rounded-full"
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse" />
                </motion.div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Icons Cloud (Simplified) */}
        <div className="mt-32 flex flex-wrap justify-center gap-8 opacity-20 grayscale">
          {["JavaScript", "Python", "Java", "PHP", "React", "Node.js", "MongoDB", "MySQL", "AWS", "Docker", "Git"].map((item, i) => (
            <span key={i} className="text-2xl font-bold tracking-tighter uppercase">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
