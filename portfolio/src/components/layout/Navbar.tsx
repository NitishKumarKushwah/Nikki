"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import styles from "./Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by ensuring we only render UI after mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        Nikks<span>.</span>
      </Link>

      <div className={styles.actions}>
        <button 
          onClick={toggleTheme} 
          className={styles.themeToggle}
          aria-label="Toggle Theme"
        >
          {/* We use two absolute wrappers to animate them in and out cleanly */}
          <div 
            className={`${styles.iconWrapper} ${
              mounted && resolvedTheme === "dark" ? styles.iconActive : styles.iconEnter
            }`}
          >
            <Moon size={20} />
          </div>
          <div 
            className={`${styles.iconWrapper} ${
              mounted && resolvedTheme === "light" ? styles.iconActive : styles.iconEnter
            }`}
          >
            <Sun size={20} />
          </div>
        </button>
      </div>
    </nav>
  );
}
