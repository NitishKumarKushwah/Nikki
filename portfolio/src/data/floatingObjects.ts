import type { FloatingObjectConfig } from "@/types/floatingObject";

/** Static scene objects — edit this array only to add or move shapes. */
export const FLOATING_OBJECTS: FloatingObjectConfig[] = [
  { id: "hero-sphere", shape: "sphere", x: -5.5, z: -6, scale: 2.4, rotationX: 0, rotationY: 0, rotationZ: 0, color: "purple", scrollAnchor: 0.04, floatSpeed: 1.2, floatAmp: 1.0, rotSpeed: 0.4 },
  { id: "hero-accent", shape: "sphere", x: 6.0, z: -10, scale: 1.4, rotationX: 0.8, rotationY: 0.8, rotationZ: 0, color: "cyan", scrollAnchor: 0.07, floatSpeed: 1.8, floatAmp: 1.3, rotSpeed: 1.2 },
  { id: "hero-torus", shape: "torus", x: 2.5, z: -4, scale: 1, rotationX: 0, rotationY: 0, rotationZ: 0, color: "gold", scrollAnchor: 0.11, floatSpeed: 2.4, floatAmp: 0.6, rotSpeed: 2.0 },
  { id: "about-cone", shape: "cone", x: 6.2, z: -8, scale: 1.8, rotationX: 0, rotationY: 0, rotationZ: 0, color: "peach", scrollAnchor: 0.2, floatSpeed: 1.0, floatAmp: 0.9, rotSpeed: 0.9 },
  { id: "about-cube", shape: "box", x: -4.0, z: -5, scale: 1, rotationX: 0, rotationY: 0, rotationZ: 0, color: "lime", scrollAnchor: 0.27, floatSpeed: 2.0, floatAmp: 0.8, rotSpeed: 1.8 },
  { id: "services-cube", shape: "box", x: -6.0, z: -11, scale: 2.8, rotationX: 0, rotationY: 0, rotationZ: 0, color: "gold", scrollAnchor: 0.37, floatSpeed: 0.8, floatAmp: 0.7, rotSpeed: 0.6 },
  { id: "services-torus", shape: "torus", x: 5.5, z: -7, scale: 1.5, rotationX: 0, rotationY: 0, rotationZ: 0, color: "cyan", scrollAnchor: 0.45, floatSpeed: 2.0, floatAmp: 1.2, rotSpeed: 1.6 },
  { id: "projects-sphere", shape: "sphere", x: -5.8, z: -7, scale: 2.0, rotationX: 0, rotationY: 0, rotationZ: 0, color: "pink", scrollAnchor: 0.54, floatSpeed: 1.4, floatAmp: 0.9, rotSpeed: 1.8 },
  { id: "projects-accent", shape: "sphere", x: 6.0, z: -10, scale: 1.5, rotationX: 0, rotationY: 0, rotationZ: 0, color: "gold", scrollAnchor: 0.63, floatSpeed: 1.1, floatAmp: 1.0, rotSpeed: 1.0 },
  { id: "projects-small", shape: "sphere", x: 1.5, z: -3, scale: 0.45, rotationX: 0, rotationY: 0, rotationZ: 0, color: "purple", scrollAnchor: 0.6, floatSpeed: 3.0, floatAmp: 0.5, rotSpeed: 2.5 },
  { id: "contact-cone", shape: "cone", x: 5.5, z: -8, scale: 1.5, rotationX: 0, rotationY: 0, rotationZ: 0, color: "purple", scrollAnchor: 0.74, floatSpeed: 0.7, floatAmp: 0.7, rotSpeed: 0.6 },
  { id: "contact-cube", shape: "box", x: -6.0, z: -10, scale: 2.4, rotationX: 0, rotationY: 0, rotationZ: 0, color: "peach", scrollAnchor: 0.81, floatSpeed: 1.0, floatAmp: 0.9, rotSpeed: 1.1 },
  { id: "footer-torus", shape: "torus", x: 5.8, z: -8, scale: 1.8, rotationX: 0, rotationY: 0, rotationZ: 0, color: "gold", scrollAnchor: 0.91, floatSpeed: 0.9, floatAmp: 0.8, rotSpeed: 1.0 },
  { id: "footer-sphere", shape: "sphere", x: -5.0, z: -7, scale: 1.8, rotationX: 0, rotationY: 0, rotationZ: 0, color: "lime", scrollAnchor: 0.97, floatSpeed: 1.3, floatAmp: 1.1, rotSpeed: 1.5 },
];

export const PALETTE_DARK: Record<FloatingObjectConfig["color"], string> = {
  purple: "#b088f9",
  peach: "#ff9999",
  lime: "#8fd628",
  gold: "#ffc933",
  cyan: "#56ccf2",
  pink: "#f472b6",
};

export const PALETTE_LIGHT: Record<FloatingObjectConfig["color"], string> = {
  purple: "#8b5cf6",
  peach: "#fb7185",
  lime: "#84cc16",
  gold: "#f59e0b",
  cyan: "#22d3ee",
  pink: "#ec4899",
};
