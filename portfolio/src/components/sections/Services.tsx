"use client";

import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import styles from "./Services.module.css";
import { useMounted } from "@/hooks/useMounted";

// Mini 3D Shapes
const ShapeBox = ({ color }: { color: string }) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.5;
      ref.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });
  return (
    <mesh ref={ref}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={color} roughness={0.2} metalness={0.8} />
    </mesh>
  );
};

const ShapeSphere = ({ color }: { color: string }) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.2;
    }
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial color={color} roughness={0.2} metalness={0.8} />
    </mesh>
  );
};

const ShapeTorus = ({ color }: { color: string }) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.5;
      ref.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });
  return (
    <mesh ref={ref}>
      <torusGeometry args={[1.2, 0.4, 16, 32]} />
      <meshStandardMaterial color={color} roughness={0.2} metalness={0.8} />
    </mesh>
  );
};

const ShapeCone = ({ color }: { color: string }) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 1;
      ref.current.rotation.z = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });
  return (
    <mesh ref={ref}>
      <coneGeometry args={[1.2, 2.5, 32]} />
      <meshStandardMaterial color={color} roughness={0.2} metalness={0.8} />
    </mesh>
  );
};

const ShapeTorusKnot = ({ color }: { color: string }) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.4;
      ref.current.rotation.y = state.clock.elapsedTime * 0.4;
    }
  });
  return (
    <mesh ref={ref} scale={0.7}>
      <torusKnotGeometry args={[1, 0.3, 64, 16]} />
      <meshStandardMaterial color={color} roughness={0.2} metalness={0.8} />
    </mesh>
  );
};

const ShapeIcosahedron = ({ color }: { color: string }) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.5;
      ref.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1.5, 0]} />
      <meshStandardMaterial color={color} roughness={0.2} metalness={0.8} wireframe />
    </mesh>
  );
};

const ShapeCylinder = ({ color }: { color: string }) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.5;
      ref.current.rotation.z = state.clock.elapsedTime * 0.5;
    }
  });
  return (
    <mesh ref={ref}>
      <cylinderGeometry args={[1, 1, 2, 32]} />
      <meshStandardMaterial color={color} roughness={0.2} metalness={0.8} />
    </mesh>
  );
};

const ShapeOctahedron = ({ color }: { color: string }) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime;
    }
  });
  return (
    <mesh ref={ref}>
      <octahedronGeometry args={[1.5, 0]} />
      <meshStandardMaterial color={color} roughness={0.2} metalness={0.8} />
    </mesh>
  );
};

const skills = [
  { title: "3D Modeling", Shape: ShapeBox, color: "#9b51e0" },
  { title: "Product Animation", Shape: ShapeTorus, color: "#f2994a" },
  { title: "CGI Advertising", Shape: ShapeSphere, color: "#56ccf2" },
  { title: "Motion Graphics", Shape: ShapeTorusKnot, color: "#27ae60" },
  { title: "VFX & Simulations", Shape: ShapeCone, color: "#f2c94c" },
  { title: "Unreal Engine Cinematics", Shape: ShapeIcosahedron, color: "#9b51e0" },
  { title: "Environment Design", Shape: ShapeCylinder, color: "#56ccf2" },
  { title: "Rendering & Look Dev", Shape: ShapeOctahedron, color: "#f2994a" },
];

export default function Services() {
  const mounted = useMounted();

  return (
    <section className={styles.servicesSection} id="skills">
      <div className={styles.container}>
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Premium <span className={styles.highlight}>Skills</span>
        </motion.h2>

        <div className={styles.grid}>
          {skills.map((skill, index) => {
            const ShapeComponent = skill.Shape;
            return (
              <motion.div
                key={index}
                className={`glass ${styles.card}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateX: 5, 
                  rotateY: -5,
                  boxShadow: `0 20px 40px rgba(0,0,0,0.3), 0 0 30px ${skill.color}50`
                }}
              >
                <div className={styles.canvasWrapper}>
                  {/* Render WebGL only after mount — prevents SSR hydration mismatch */}
                  {mounted ? (
                    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                      <ambientLight intensity={0.6} />
                      <directionalLight position={[10, 10, 10]} intensity={1.5} />
                      <directionalLight position={[-10, -10, -10]} intensity={0.5} color={skill.color} />
                      <ShapeComponent color={skill.color} />
                    </Canvas>
                  ) : (
                    <div className={styles.canvasPlaceholder} />
                  )}
                </div>
                <h3 className={styles.cardTitle}>{skill.title}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
