"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import styles from "./Hero.module.css";
import Button from "../Button";
import { ArrowRight, PlayCircle } from "lucide-react";
export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Mouse parallax setup
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 400 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const parallaxXTitle = useTransform(smoothX, [0, 1], [-20, 20]);
  const parallaxYTitle = useTransform(smoothY, [0, 1], [-20, 20]);
  
  const parallaxXImage = useTransform(smoothX, [0, 1], [15, -15]);
  const parallaxYImage = useTransform(smoothY, [0, 1], [15, -15]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = e.clientX / innerWidth;
      const y = e.clientY / innerHeight;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className={styles.heroSection}>
      <div className={styles.lighting} />
      
      <motion.div 
        className={styles.content}
        style={{ y: y1, opacity }}
      >
        <motion.div 
          className={styles.imageWrapper}
          style={{ x: parallaxXImage, y: parallaxYImage }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className={styles.glowBehind} />
          {/* Please place your profile image as 'profile.jpeg' in the public folder */}
          <img
            src="/profile.jpeg"
            alt="Nikks Profile"
            className={styles.profileImage}
            onError={(e) => {
              // Fallback if image not found
              e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop";
            }}
          />
        </motion.div>

        <motion.div 
          className={styles.textWrapper}
          style={{ x: parallaxXTitle, y: parallaxYTitle }}
        >
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            3D Artist • VFX Designer • Motion Creative
          </motion.p>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Hi, I’m <span className={styles.highlight}>Nikks!</span>
          </motion.h1>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Creating cinematic visuals and immersive digital experiences.
          </motion.p>
        </motion.div>

        <motion.div
          className={styles.buttonGroup}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Button 
            variant="primary" 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work <PlayCircle size={20} />
          </Button>
          <Button 
            variant="outline"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let’s Work Together <ArrowRight size={20} />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
