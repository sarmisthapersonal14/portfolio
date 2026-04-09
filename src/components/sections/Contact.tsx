import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen px-6 py-20">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            GET IN <span className="text-neon-pink">TOUCH</span>
          </h2>
          <p className="text-white/60 text-lg mb-16 max-w-2xl mx-auto">
            I'm currently looking for new opportunities in Fintech and SaaS. 
            Feel free to reach out via phone or visit my location.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
            <div className="flex flex-col items-center gap-4 group">
              <a
                href="mailto:sarmistha.personal14@gmail.com"
                aria-label="Send email to Sarmistha"
                className="w-20 h-20 rounded-full glass flex items-center justify-center group-hover:border-neon-pink/50 transition-all duration-500 group-hover:scale-110 focus:outline-none focus:ring-2 focus:ring-neon-pink/40 rounded"
              >
                <Mail className="w-8 h-8 text-neon-pink" aria-hidden="true" />
              </a>
              <div className="text-center">
                <p className="text-xs font-mono text-white/40 uppercase tracking-[0.3em] mb-2">Mail</p>
                <a
                  href="mailto:sarmistha.personal14@gmail.com"
                  className="text-2xl font-bold tracking-tight hover:underline focus:outline-none focus:ring-2 focus:ring-neon-pink/40 rounded"
                  aria-label="Email address sarmistha.personal14@gmail.com"
                >
                  sarmistha.personal14@gmail.com
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 group">
              <div className="w-20 h-20 rounded-full glass flex items-center justify-center group-hover:border-neon-purple/50 transition-all duration-500 group-hover:scale-110">
                <MapPin className="w-8 h-8 text-neon-purple" />
              </div>
              <div className="text-center">
                <p className="text-xs font-mono text-white/40 uppercase tracking-[0.3em] mb-2">Location</p>
                <p className="text-2xl font-bold tracking-tight">Odisha, India</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <footer className="mt-48 pt-12 border-t border-white/5 text-center text-white/20 text-[10px] font-mono uppercase tracking-[0.5em]">
        &copy; 2026 SARMISTHA SAHOO &bull; ALL RIGHTS RESERVED
      </footer>
    </section>
  );
}

