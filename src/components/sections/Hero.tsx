import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      <div className="z-10 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="inline-block px-4 py-1.5 mb-6 rounded-full glass text-xs font-mono uppercase tracking-[0.3em] text-neon-cyan"
        >
          Available for new projects
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.4 }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8"
        >
          SARMISTHA <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink animate-gradient-x">
            SAHOO
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.8 }}
          className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          MERN Stack Developer specializing in Fintech and SaaS solutions. 
          Building scalable, high-performance web applications with a focus on clean architecture.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 3.2 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="rounded-full bg-neon-cyan text-black hover:bg-neon-cyan/80 group"
            onClick={() => scrollTo("projects")}
          >
            View Projects
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-white/20 hover:bg-white/5"
            onClick={() => scrollTo("contact")}
          >
            Contact Me
          </Button>
        </motion.div>
      </div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
        className="absolute bottom-10 left-10 hidden lg:flex flex-col gap-6"
      >
        <a
          href="https://github.com/sarmisthapersonal14"
          aria-label="GitHub — Sarmistha"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/40 hover:text-neon-cyan transition-colors focus:outline-none focus:ring-2 focus:ring-neon-cyan/40 rounded"
        >
          <Github className="w-5 h-5" aria-hidden="true" />
        </a>
        <a
          href="https://www.linkedin.com/in/sahoosarmistha/"
          aria-label="LinkedIn — Sarmistha"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/40 hover:text-neon-pink transition-colors focus:outline-none focus:ring-2 focus:ring-neon-pink/40 rounded"
        >
          <Linkedin className="w-5 h-5" aria-hidden="true" />
        </a>
        <a
          href="https://twitter.com/"
          aria-label="Twitter — Sarmistha"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/40 hover:text-neon-purple transition-colors focus:outline-none focus:ring-2 focus:ring-neon-purple/40 rounded"
        >
          <Twitter className="w-5 h-5" aria-hidden="true" />
        </a>
        <div className="w-[1px] h-20 bg-gradient-to-b from-white/20 to-transparent mx-auto" />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
        className="absolute bottom-10 right-10 flex items-center gap-4 rotate-90 origin-right"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-white/40">Scroll to explore</span>
        <div className="w-12 h-[1px] bg-white/20" />
      </motion.div>
    </section>
  );
}
