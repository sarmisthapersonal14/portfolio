import { motion } from "motion/react";

export default function Preloader() {
  const words = ["Innovation", "Design", "Future", "Nexus"];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-background"
    >
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="h-[1px] bg-neon-cyan mb-8"
        />
        
        <div className="overflow-hidden h-12 flex items-center justify-center">
          <motion.div
            animate={{
              y: [0, -48, -96, -144],
            }}
            transition={{
              duration: 2,
              times: [0, 0.33, 0.66, 1],
              ease: "easeInOut",
              repeat: Infinity,
            }}
            className="flex flex-col items-center"
          >
            {words.map((word, i) => (
              <span
                key={i}
                className="text-4xl font-mono uppercase tracking-[0.2em] text-neon-cyan h-12 flex items-center"
              >
                {word}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-xs font-mono text-white/30 uppercase tracking-widest"
        >
          Initializing System...
        </motion.div>
      </div>
    </motion.div>
  );
}
