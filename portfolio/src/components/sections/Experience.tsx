"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./Experience.module.css";
import clsx from "clsx";
import { useMounted } from "@/hooks/useMounted";

const experiences = [
  {
    year: "Current",
    title: "Creative Experiments",
    description: "Building cinematic visuals inspired by modern advertising.",
  },
  {
    year: "2023",
    title: "Unreal Engine Cinematics",
    description: "Transitioning skills to real-time rendering. Focused on lighting, motion, and storytelling.",
  },
  {
    year: "2022",
    title: "Product Animation Practice",
    description: "Learning the art of lighting and showcasing products realistically.",
  },
  {
    year: "2022",
    title: "Exploring Simulations",
    description: "Diving into particles, physics, and complex nodes.",
  },
  {
    year: "2021",
    title: "Learning Blender",
    description: "The beginning of the journey. Exploring the basics of 3D modeling and texturing.",
  }
];

const BLOB_CONFIGS = [
  { x: ["-20vw", "10vw", "-20vw"], y: ["10vh", "-5vh", "10vh"], scale: [1, 1.2, 1], duration: 15, delay: 0, width: 200, height: 200, top: 20, left: 10, bg: "var(--accent-orange)" },
  { x: ["-5vw", "25vw", "-5vw"], y: ["0vh", "-15vh", "0vh"], scale: [1, 1.4, 1], duration: 17, delay: 0.5, width: 250, height: 250, top: 35, left: 30, bg: "var(--accent-purple)" },
  { x: ["10vw", "-20vw", "10vw"], y: ["-10vh", "10vh", "-10vh"], scale: [1, 1.6, 1], duration: 19, delay: 1, width: 300, height: 300, top: 50, left: 50, bg: "var(--accent-orange)" },
  { x: ["25vw", "-5vw", "25vw"], y: ["-20vh", "25vh", "-20vh"], scale: [1, 1.8, 1], duration: 21, delay: 1.5, width: 350, height: 350, top: 65, left: 70, bg: "var(--accent-purple)" },
];

export default function Experience() {
  const mounted = useMounted();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className={styles.experienceSection} id="journey" ref={containerRef}>
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
          Current <span className={styles.highlight}>Journey</span>
        </motion.h2>

        <p className={styles.subtitle}>
          Focused on learning, experimenting, and growing into a professional 3D/VFX artist.
        </p>

        <div className={styles.timeline}>
          <div className={styles.lineBg} />
          <motion.div className={styles.lineFill} style={{ height: lineHeight }} />

          {experiences.map((exp, index) => (
            <div key={index} className={styles.nodeWrapper}>
              <motion.div 
                className={styles.node}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: false, amount: 1 }}
                transition={{ duration: 0.5 }}
              />
              <motion.div 
                className={clsx(styles.content, index % 2 === 0 ? styles.left : styles.right)}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.6 }}
              >
                <span className={styles.year}>{exp.year}</span>
                <h3>{exp.title}</h3>
                <p>{exp.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
