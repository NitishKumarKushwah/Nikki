"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styles from "./Vision.module.css";
import clsx from "clsx";

export default function Vision() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section className={styles.visionSection} ref={containerRef}>
      {/* Floating Abstract Meshes (CSS representations) */}
      <motion.div 
        className={clsx(styles.abstractMesh, styles.mesh1)}
        style={{ y: y1 }}
      />
      <motion.div 
        className={clsx(styles.abstractMesh, styles.mesh2)}
        style={{ y: y2 }}
      />

      <div className={styles.container}>
        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, filter: "blur(10px)", y: 30 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Creative <span className={styles.highlight}>Vision</span>
        </motion.h2>

        <div className={styles.textStack}>
          <motion.p
            className={styles.textLine}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Building cinematic visuals inspired by modern advertising.
          </motion.p>
          
          <motion.p
            className={styles.textLine}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Focused on improving realism, lighting, motion, and storytelling.
          </motion.p>
          
          <motion.p
            className={styles.textLine}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Learning through daily experiments and creative exploration.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
