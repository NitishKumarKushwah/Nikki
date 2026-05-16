"use client";

import { motion } from "framer-motion";
import styles from "./Footer.module.css";
import { useMounted } from "@/hooks/useMounted";

export default function Footer() {
  const mounted = useMounted();

  return (
    <footer className={styles.footer}>
      <div className={styles.marqueeContainer}>
        <motion.div
          className={styles.marquee}
          // Animate only after client mount — repeat: Infinity on SSR causes hydration mismatch
          animate={mounted ? { x: [0, -1000] } : {}}
          transition={mounted ? { repeat: Infinity, duration: 20, ease: "linear" } : {}}
        >
          <span>BLENDER • VFX • CGI • ANIMATION • UNREAL ENGINE • </span>
          <span>BLENDER • VFX • CGI • ANIMATION • UNREAL ENGINE • </span>
          <span>BLENDER • VFX • CGI • ANIMATION • UNREAL ENGINE • </span>
          <span>BLENDER • VFX • CGI • ANIMATION • UNREAL ENGINE • </span>
        </motion.div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.container}>
          <div className={styles.copy}>
            <p>Designed &amp; Created by Nikks</p>
            <p className={styles.sub}>3D Artist • VFX Designer • Blender Creative</p>
          </div>
          <div className={styles.links}>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#projects">Work</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
