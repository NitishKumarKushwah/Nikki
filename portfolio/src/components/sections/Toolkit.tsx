"use client";

import { motion } from "framer-motion";
import styles from "./Toolkit.module.css";
import clsx from "clsx";
import { useMounted } from "@/hooks/useMounted";

const tools = [
  "Blender",
  "Unreal Engine",
  "After Effects",
  "Photoshop",
];

const BLOB_CONFIGS = [
  { x: ["-20vw", "10vw", "-20vw"], y: ["15vh", "-5vh", "15vh"], scale: [1, 1.2, 1], duration: 10, delay: 0, width: 150, height: 150, top: 15, left: 5, bg: "var(--accent-lime)" },
  { x: ["-8vw", "22vw", "-8vw"], y: ["0vh", "-20vh", "0vh"], scale: [1, 1.3, 1], duration: 12, delay: 0.4, width: 210, height: 210, top: 30, left: 23, bg: "var(--accent-cyan)" },
  { x: ["4vw", "-15vw", "4vw"], y: ["-15vh", "10vh", "-15vh"], scale: [1, 1.4, 1], duration: 14, delay: 0.8, width: 270, height: 270, top: 45, left: 41, bg: "var(--accent-lime)" },
  { x: ["16vw", "-5vw", "16vw"], y: ["-30vh", "25vh", "-30vh"], scale: [1, 1.5, 1], duration: 16, delay: 1.2, width: 330, height: 330, top: 60, left: 59, bg: "var(--accent-cyan)" },
  { x: ["28vw", "5vw", "28vw"], y: ["-45vh", "40vh", "-45vh"], scale: [1, 1.6, 1], duration: 18, delay: 1.6, width: 390, height: 390, top: 75, left: 77, bg: "var(--accent-lime)" },
];

export default function Toolkit() {
  const mounted = useMounted();

  return (
    <section className={styles.toolkitSection} id="toolkit">
      {/* Floating blobs — rendered only after client mount to prevent SSR mismatch */}
      {mounted && (
        <div className={styles.backgroundLayer}>
          {BLOB_CONFIGS.map((config, i) => (
            <motion.div
              key={i}
              className={`${styles.floatingBlob} ${styles[`blob${i}`]}`}
              animate={{
                x: config.x,
                y: config.y,
                scale: config.scale,
              }}
              transition={{
                duration: config.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: config.delay,
              }}
            />
          ))}
        </div>
      )}

      <div className={styles.container}>
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My <span className={styles.highlight}>Toolkit</span>
        </motion.h2>

        <div className={styles.grid}>
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              className={clsx("glass", styles.toolCard)}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              whileHover={{ 
                scale: 1.15,
                backgroundColor: "var(--foreground)",
                color: "var(--background)",
                boxShadow: "0 10px 30px rgba(86, 204, 242, 0.4)"
              }}
            >
              <span className={styles.toolName}>{tool}</span>
              <div className={styles.glow} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
