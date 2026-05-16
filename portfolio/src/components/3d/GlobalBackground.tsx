"use client";

import { useRef, useEffect, useMemo, type CSSProperties, type RefObject } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useTheme } from "next-themes";
import * as THREE from "three";
import {
  FLOATING_OBJECTS,
  PALETTE_DARK,
  PALETTE_LIGHT,
} from "@/data/floatingObjects";
import type { FloatingObjectConfig, ShapeType } from "@/types/floatingObject";
import { useMounted } from "@/hooks/useMounted";

type ScrollSnapshot = { scrollY: number; pageHeight: number };

const BACKDROP_STYLE: CSSProperties = {
  position: "fixed",
  inset: 0,
  zIndex: 1,
  pointerEvents: "none",
};

function phaseFromId(id: string): number {
  return (id.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0) % 100) * 0.1;
}

function ShapeMesh({ shape, color }: { shape: ShapeType; color: string }) {
  return (
    <mesh>
      {shape === "sphere" && <sphereGeometry args={[1, 32, 32]} />}
      {shape === "box" && <boxGeometry args={[1, 1, 1]} />}
      {shape === "torus" && <torusGeometry args={[0.8, 0.32, 24, 48]} />}
      {shape === "cone" && <coneGeometry args={[1, 2, 32]} />}
      <meshStandardMaterial color={color} metalness={0.5} roughness={0.25} />
    </mesh>
  );
}

function FloatingMesh({
  id,
  shape,
  x,
  z,
  scale,
  rotationX,
  rotationY,
  rotationZ,
  scrollAnchor,
  floatSpeed,
  floatAmp,
  rotSpeed,
  meshColor,
  scrollRef,
}: FloatingObjectConfig & {
  meshColor: string;
  scrollRef: RefObject<ScrollSnapshot>;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const phase = useMemo(() => phaseFromId(id), [id]);

  useFrame((state) => {
    const group = groupRef.current;
    const scroll = scrollRef.current;
    if (!group || !scroll) return;

    const t = state.clock.elapsedTime * floatSpeed + phase;
    const scrollable = Math.max(scroll.pageHeight - window.innerHeight, 1);
    const scrollProgress = scroll.scrollY / scrollable;
    const baseY = (scrollAnchor - scrollProgress) * 18;

    const offsetX = Math.sin(t) * floatAmp * 0.45;
    const offsetY = Math.cos(t * 0.85) * floatAmp * 0.3;

    group.position.x = THREE.MathUtils.lerp(group.position.x, x + offsetX, 0.04);
    group.position.y = THREE.MathUtils.lerp(
      group.position.y,
      THREE.MathUtils.clamp(baseY + offsetY, -10, 10),
      0.04
    );
    group.position.z = z;

    group.rotation.x += 0.002 * rotSpeed;
    group.rotation.y += 0.004 * rotSpeed;
  });

  return (
    <group
      ref={groupRef}
      scale={scale}
      rotation={[rotationX, rotationY, rotationZ]}
    >
      <ShapeMesh shape={shape} color={meshColor} />
    </group>
  );
}

function SceneBloom({ isDark }: { isDark: boolean }) {
  return (
    <EffectComposer enableNormalPass={false}>
      <Bloom
        luminanceThreshold={isDark ? 0.45 : 0.72}
        luminanceSmoothing={0.9}
        intensity={isDark ? 1.4 : 0.9}
        mipmapBlur
      />
    </EffectComposer>
  );
}

function FloatingScene({ isDark }: { isDark: boolean }) {
  const palette = isDark ? PALETTE_DARK : PALETTE_LIGHT;
  const scrollRef = useRef<ScrollSnapshot>({ scrollY: 0, pageHeight: 1 });

  useEffect(() => {
    const update = () => {
      scrollRef.current.scrollY = window.scrollY;
      scrollRef.current.pageHeight = document.body.scrollHeight;
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <>
      <Environment preset={isDark ? "studio" : "city"} />
      <ambientLight intensity={isDark ? 0.65 : 0.9} />
      <directionalLight position={[8, 12, 8]} intensity={isDark ? 2 : 2.4} />
      <directionalLight
        position={[-6, -4, -6]}
        intensity={0.55}
        color={isDark ? "#9b51e0" : "#93c5fd"}
      />
      <hemisphereLight
        color="#ffffff"
        groundColor={isDark ? "#9b51e0" : "#c4b5fd"}
        intensity={isDark ? 1.2 : 1.8}
      />

      <group>
        {FLOATING_OBJECTS.map((item) => (
          <FloatingMesh
            key={item.id}
            {...item}
            meshColor={palette[item.color]}
            scrollRef={scrollRef}
          />
        ))}
      </group>

      <SceneBloom isDark={isDark} />
    </>
  );
}

export default function GlobalBackground() {
  const mounted = useMounted();
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme !== "light";

  if (!mounted) {
    return <div style={BACKDROP_STYLE} aria-hidden />;
  }

  return (
    <div style={BACKDROP_STYLE} aria-hidden>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, powerPreference: "high-performance" }}
        frameloop="always"
      >
        <FloatingScene isDark={isDark} />
      </Canvas>
    </div>
  );
}
