"use client";

import { motion } from "framer-motion";
import styles from "./About.module.css";
import clsx from "clsx";
import { aboutParagraphs } from "@/data/about";
import { useMounted } from "@/hooks/useMounted";

export default function About() {
  const mounted = useMounted();

  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.container}>
        {aboutParagraphs.map((text, index) => (
          <motion.div
            key={index}
            className={clsx(styles.paragraphContainer, index % 2 === 0 ? styles.left : styles.right)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Float animation runs only on client — prevents SSR Infinity repeat mismatch */}
            <motion.div
              className={styles.floatingShape}
              animate={mounted ? {
                y: [0, -15, 0],
                rotate: [0, 5, -5, 0],
              } : {}}
              transition={mounted ? {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.5,
              } : {}}
            />
            <p className={styles.text}>{text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
