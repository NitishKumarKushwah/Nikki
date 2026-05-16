"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Projects.module.css";
import { X, Play } from "lucide-react";

const categories = ["All", "3D Modeling", "Animation", "VFX", "Product CGI", "Unreal Engine"];

const projects = [
  {
    id: 1,
    title: "My First Project",
    category: "3D Modeling",
    description: "An early exploration into 3D modeling and texturing.",
    thumbnail: "/projects/my first project.jpeg",
    video: null
  },
  {
    id: 2,
    title: "My Second Project",
    category: "3D Modeling",
    description: "Continuing the journey with advanced rendering techniques.",
    thumbnail: "/projects/my second project.jpeg",
    video: null
  },
  {
    id: 3,
    title: "Headphone Model",
    category: "Product CGI",
    description: "A detailed and realistic 3D model of premium headphones.",
    thumbnail: "/projects/headphone model.jpeg",
    video: null
  },
  {
    id: 4,
    title: "Perfume Bottles",
    category: "Product CGI",
    description: "Elegant 3D modeling and lighting for perfume bottles.",
    thumbnail: "/projects/perfume bottles.jpeg",
    video: null
  },
  {
    id: 5,
    title: "Water Animation",
    category: "Animation",
    description: "Dynamic fluid simulation and water animation visualization.",
    thumbnail: "/projects/water animation thumbnail.png",
    video: "/projects/water animation.mp4"
  },
  {
    id: 6,
    title: "Thumbs Up Bottle",
    category: "Animation",
    description: "Thumbs up bottle animation and visualization.",
    thumbnail: "/projects/thumbs up thumbnail.png",
    video: "/projects/thumbs up.mp4"
  }
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeTab === "All" 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <section className={styles.projectsSection} id="projects">
      <div className={styles.container}>
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured <span className={styles.highlight}>Work</span>
        </motion.h2>

        <div className={styles.filterTabs}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.tab} ${activeTab === cat ? styles.activeTab : ""}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className={styles.masonryGrid}>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className={styles.projectCard}
                onClick={() => setSelectedProject(project)}
              >
                <div className={styles.thumbnailContainer}>
                  <img src={project.thumbnail} alt={project.title} className={styles.thumbnail} />
                  {project.video && (
                    <video 
                      src={project.video} 
                      muted 
                      loop 
                      playsInline 
                      className={styles.videoPreview}
                      onMouseEnter={(e) => e.currentTarget.play()}
                      onMouseLeave={(e) => {
                        e.currentTarget.pause();
                        e.currentTarget.currentTime = 0;
                      }}
                    />
                  )}
                  <div className={styles.cardOverlay}>
                    <Play className={styles.playIcon} size={48} />
                  </div>
                </div>
                <div className={styles.cardInfo}>
                  <p className={styles.cardCategory}>{project.category}</p>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className={styles.modalContent}
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.closeBtn} onClick={() => setSelectedProject(null)}>
                <X size={24} />
              </button>
              <div className={styles.modalMedia}>
                {selectedProject.video ? (
                  <video src={selectedProject.video} autoPlay controls className={styles.fullVideo} />
                ) : (
                  <img src={selectedProject.thumbnail} alt={selectedProject.title} className={styles.fullImage} />
                )}
              </div>
              <div className={styles.modalInfo}>
                <h2>{selectedProject.title}</h2>
                <span className={styles.modalCategory}>{selectedProject.category}</span>
                <p>{selectedProject.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
