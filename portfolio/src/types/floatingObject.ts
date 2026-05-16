export type ShapeType = "sphere" | "box" | "torus" | "cone";

export type PaletteColor = "purple" | "peach" | "lime" | "gold" | "cyan" | "pink";

/** Flat config — no nested animation objects, no scene references. */
export interface FloatingObjectConfig {
  id: string;
  shape: ShapeType;
  x: number;
  z: number;
  scale: number;
  rotationX: number;
  rotationY: number;
  rotationZ: number;
  color: PaletteColor;
  scrollAnchor: number;
  floatSpeed: number;
  floatAmp: number;
  rotSpeed: number;
}
