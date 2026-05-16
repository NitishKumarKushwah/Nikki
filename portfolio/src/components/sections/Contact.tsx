"use client";

import { motion } from "framer-motion";
import styles from "./Contact.module.css";
import Button from "../Button";
import { Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { contactInfo } from "@/data/contact";

const iconMap: Record<string, React.ElementType> = {
  Github: FaGithub,
  Linkedin: FaLinkedin,
  Instagram: FaInstagram
};

export default function Contact() {

  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.container}>
        <motion.div 
          className={styles.infoBox}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Let's Create Something <span className={styles.highlight}>Amazing Together.</span></h2>
          <p className={styles.subtitle}>
            Available for freelance opportunities. If you have a project in mind, let's talk.
          </p>
          
          <div className={styles.socials}>
            {contactInfo.socials.map((social) => {
              const IconComponent = iconMap[social.icon];
              return (
                <a key={social.name} href={social.url} target="_blank" rel="noreferrer" className={styles.socialIcon} title={social.name}>
                  {IconComponent && <IconComponent size={24} />}
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.form 
          className={styles.form}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className={styles.inputGroup}>
            <input type="text" placeholder="Your Name" required className={styles.input} />
          </div>
          <div className={styles.inputGroup}>
            <input type="email" placeholder="Your Email" required className={styles.input} />
          </div>
          <div className={styles.inputGroup}>
            <textarea placeholder="Tell me about your project..." rows={5} required className={styles.textarea} />
          </div>
          <Button type="submit" variant="primary" className={styles.submitBtn}>
            Send Message <Send size={18} />
          </Button>
        </motion.form>
      </div>
    </section>
  );
}
